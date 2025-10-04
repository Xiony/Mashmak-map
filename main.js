const DEBUG_MODE = false; // true pour activer l'édition

// Initialisation de la carte
const map = L.map("map", {
  crs: L.CRS.Simple,
  minZoom: -0.3,
  maxZoom: 2,
  center: [512, 512],
  zoom: 0,

  wheelPxPerZoomLevel: 200,
  zoomDelta: 0.15, // pas du zoom par cran de molette
  zoomSnap: 0.15
});

//positionne les boutons zoom a droite en haut
map.removeControl(map.zoomControl);
L.control.zoom({
  position: "topright"
}).addTo(map);

// Taille de l’image
const width = 1024;
const height = 1024;
const bounds = [[0, 0], [height, width]];

// Image de fond
L.imageOverlay("assets/map.png", bounds).addTo(map);
map.fitBounds(bounds);
const zoneLayer = new L.FeatureGroup().addTo(map);

//Gestion des icones
const categories = {};
const ICON_SIZE = [35, 35]; // taille fixe
const ICON_SIZE_ANCHOR = [30, 30]; // taille fixe

function createControlLine(category, iconUrl, isZone = false, color = null) {
  const controlLine = document.createElement("div");
  controlLine.className = "control-line";

  // Créer l'élément visuel (icône ou cercle)
  const visualElement = document.createElement(isZone ? "div" : "img");
  // Bouton info
  const infoBtn = document.createElement("span");
  if (isZone) {
    visualElement.className = "control-circle";
    visualElement.style.backgroundColor = color;
  } else {
    visualElement.className = "control-icon";
    visualElement.src = iconUrl;
    visualElement.alt = category;

    // Bouton info
    infoBtn.className = "info-btn";
    infoBtn.textContent = "?";

    // Tooltip (caché par défaut)
    const tooltip = document.createElement("div");
    tooltip.className = "info-tooltip";
    tooltip.textContent = CATEGORY_DESCRIPTIONS[category] || "Pas de description disponible.";
    controlLine.appendChild(tooltip);

    // Toggle au clic
    infoBtn.addEventListener("click", (e) => {
      e.stopPropagation();

      // Ferme toutes les autres tooltips
      document.querySelectorAll(".info-tooltip.visible").forEach(t => {
        if (t !== tooltip) {
          t.classList.remove("visible");
        }
      });

      // Bascule uniquement celle de ce bouton
      tooltip.classList.toggle("visible");
    });
  }

  // Créer la checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = `toggle-${category}`;
  checkbox.checked = true;

  // Créer le label
  const label = document.createElement("label");
  label.htmlFor = checkbox.id;
  label.textContent = " " + category;

  // Assembler les éléments
  controlLine.appendChild(visualElement);
  controlLine.appendChild(checkbox);
  controlLine.appendChild(label);
  if (!isZone) controlLine.appendChild(infoBtn);

  return { controlLine, checkbox };
}

//Ferme toutes les tooltips quand on clique ailleurs
document.addEventListener("click", () => {
  document.querySelectorAll(".info-tooltip.visible").forEach(t => {
    t.classList.remove("visible");
  });
});

//Gestion des icones
ICONS_DATA.forEach(item => {

  if (!categories[item.category]) {
    categories[item.category] = L.layerGroup().addTo(map);

    // Créer la ligne de contrôle avec icône
    const { controlLine, checkbox } = createControlLine(item.category, item.icon);
    document.getElementById("controls-icones").appendChild(controlLine);

    checkbox.addEventListener("change", e => {
      if (e.target.checked) map.addLayer(categories[item.category]);
      else map.removeLayer(categories[item.category]);
    });
  }

  //Si les valeur sont en 0,0 c'est que c'est juste pour l'affichage de l'icone pour la légende.
  if (!item.coords || (item.coords[0] === 0 && item.coords[1] === 0)) return;

  // Icône par défaut
  const icon = L.icon({
    iconUrl: item.icon,
    iconSize: ICON_SIZE,
    iconAnchor: ICON_SIZE_ANCHOR,
    className: item.image || item.description ? "icon-pointer" : "icon-default"
  });

  const marker = L.marker(item.coords, {
    icon: icon,
    riseOnHover: true // L'icône se lève au survol
  }).addTo(categories[item.category]);

  // Ajouter modal uniquement si image/description présents
  if (item.image || item.description) {
    marker.on("click", () => {
      const descriptionHTML = generateDescriptionHTML(item);
      openModal(item.image ?? "", descriptionHTML);
    });
  }

  if (DEBUG_MODE) {
    marker.bindTooltip(
      `[${Math.round(item.coords[0])},${Math.round(item.coords[1])}]`,
      { permanent: false, direction: "top" }
    );
  }
});

//Gestion des zones
ZONES_DATA.forEach(zone => {

  if (!categories[zone.category]) {
    categories[zone.category] = L.layerGroup().addTo(map);

    // Créer la ligne de contrôle avec cercle coloré
    const { controlLine, checkbox } = createControlLine(zone.category, null, true, zone.color);
    document.getElementById("controls-zones").appendChild(controlLine);

    checkbox.addEventListener("change", e => {
      if (e.target.checked) map.addLayer(categories[zone.category]);
      else map.removeLayer(categories[zone.category]);
    });
  }

  L.circle(zone.center, {
    radius: zone.radius,
    color: zone.color,
    fillColor: zone.color,
    fillOpacity: 0.3
  }).addTo(categories[zone.category]);
});


// Fonction pour trouver un marqueur par ses coordonnées
function findMarkerByCoords(coords) {
  let foundMarker = null;

  // Parcourir toutes les catégories
  Object.values(categories).forEach(layerGroup => {
    layerGroup.eachLayer(layer => {
      if (layer instanceof L.Marker) {
        const markerCoords = layer.getLatLng();
        // Comparer les coordonnées (avec une petite marge d'erreur)
        if (Math.abs(markerCoords.lat - coords[0]) < 1 &&
          Math.abs(markerCoords.lng - coords[1]) < 1) {
          foundMarker = layer;
        }
      }
    });
  });

  return foundMarker;
}

// Fonction pour animer un marqueur avec la couleur appropriée
function animateMarker(marker) {
  const iconElement = marker.getElement();
  if (!iconElement) return;

  // Déterminer la classe d'animation en fonction de la catégorie
  let animationClass = 'icon-pulse-default';

  // Trouver l'élément de données correspondant à ce marqueur
  const markerCoords = marker.getLatLng();
  const foundItem = ICONS_DATA.find(item =>
    Math.abs(item.coords[0] - markerCoords.lat) < 1 &&
    Math.abs(item.coords[1] - markerCoords.lng) < 1
  );

  if (foundItem) {
    if (foundItem.category === CAT_DONJON_BLEU) {
      animationClass = 'icon-pulse-blue';
    } else if (foundItem.category === CAT_DONJON_VIOLET) {
      animationClass = 'icon-pulse-purple';
    } else if (foundItem.category === CAT_DONJON_OR) {
      animationClass = `icon-pulse-gold`;
    }
  }

  // Appliquer l'animation
  iconElement.classList.add(animationClass);
  marker.setZIndexOffset(1000);

  // Nettoyer après l'animation
  setTimeout(() => {
    iconElement.classList.remove(animationClass);
  }, 4000); // 8 pulsations × 0.5s = 4s (voir le css)
}

// Modal
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalText = document.getElementById("modal-text");
const modalClose = document.getElementById("modal-close");

function openModal(imgSrc, text) {
  modal.style.display = "block";
  modalImg.src = imgSrc;
  modalImg.alt = imgSrc ? "illustration" : "";
  modalText.innerHTML = text;

  // Reset état zoom
  modalImg.classList.remove("fullscreen");

  // Toggle zoom au clic
  modalImg.onclick = () => {
    modalImg.classList.toggle("fullscreen");
  };
}

modalClose.onclick = () => { modal.style.display = "none"; };
window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };

// Gestion de la checkbox maître pour les icônes
document.getElementById('toggle-all-icons').addEventListener('change', function (e) {
  const checkboxes = document.querySelectorAll('#controls-icones input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.checked = e.target.checked;
    // Déclencher l'événement change pour chaque checkbox
    checkbox.dispatchEvent(new Event('change'));
  });
});

// Gestion de la checkbox maître pour les zones
document.getElementById('toggle-all-zones').addEventListener('change', function (e) {
  const checkboxes = document.querySelectorAll('#controls-zones input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.checked = e.target.checked;
    checkbox.dispatchEvent(new Event('change'));
  });
});

// Mettre à jour l'état des checkboxes maîtres quand les enfants changent
function updateMasterCheckbox(masterId, containerId) {
  const checkboxes = document.querySelectorAll(`#${containerId} input[type="checkbox"]`);
  const masterCheckbox = document.getElementById(masterId);

  if (checkboxes.length === 0) return;

  const allChecked = Array.from(checkboxes).every(cb => cb.checked);
  const allUnchecked = Array.from(checkboxes).every(cb => !cb.checked);

  if (allChecked) {
    masterCheckbox.checked = true;
    masterCheckbox.indeterminate = false;
  } else if (allUnchecked) {
    masterCheckbox.checked = false;
    masterCheckbox.indeterminate = false;
  } else {
    masterCheckbox.checked = false;
    masterCheckbox.indeterminate = true;
  }
}

// Écouter les changements sur les checkboxes enfants
document.addEventListener('change', function (e) {
  if (e.target.matches('#controls-icones input[type="checkbox"]')) {
    updateMasterCheckbox('toggle-all-icons', 'controls-icones');
  }
  if (e.target.matches('#controls-zones input[type="checkbox"]')) {
    updateMasterCheckbox('toggle-all-zones', 'controls-zones');
  }
});

//Ajout d'un effet collapse pour le menu calque :
const btn = document.getElementById('toggle-controls');
const content = document.getElementById('controls-content');

btn.addEventListener('click', () => {
  content.classList.toggle('collapsed');
});

// Fonction pour générer le HTML de description
function generateDescriptionHTML(item) {
  if (!item.description) return "";

  let html = '';

  // Si c'est un donjon avec structure détaillée
  if (typeof item.description === 'object') {
    html += `
      <div class="modal-info-grid">
        <div class="modal-label">Objectif :</div>
        <div class="modal-value">${item.description.objectif}</div>
        <div class="modal-label">Vidéo explicative :</div>
        <div class="modal-value"><a href="${item.description.urlVideo}">Vidéo crée par Knight Valfodr</a></div>
      </div>
    `;

    // Ajouter le bouton zoom si des coordonnées de sortie sont spécifiées
    if (item.description.sortieCoords) {
      html += `
  <button class="zoom-button" data-target="${JSON.stringify(item.description.sortieCoords)}">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
    Sortie
  </button>
`;
    }
  }
  // Sinon si c'est une description simple
  else if (typeof item.description === 'string') {
    html = item.description;
  }

  return html;
}

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('zoom-button')) {
    const coordsText = e.target.getAttribute('data-target');
    if (coordsText) {
      try {
        const coords = JSON.parse(coordsText);

        // Ajustement des coordonnées
        const adjustedCoords = [coords[0] - 20, coords[1] - 20];

        // Trouve et anime le marqueur cible
        let targetMarker = findMarkerByCoords(coords);

        if (targetMarker) {
          animateMarker(targetMarker);
        }

        // Exécute le zoom
        map.flyTo(adjustedCoords, 2, {
          duration: 1.25,
          easeLinearity: 0.25
        });

        modal.style.display = "none";

      } catch (error) {
        console.error('Erreur parsing JSON:', error);
      }
    }
  }
});

if (DEBUG_MODE) {
  // Ajout des contrôles de dessin
  const drawControl = new L.Control.Draw({
    position: "topright",
    draw: {
      polygon: true,
      rectangle: true,
      circle: true,
      marker: false,
      polyline: false,
      circlemarker: false
    },
    edit: {
      featureGroup: zoneLayer // ici c’est bien un FeatureGroup
    }
  });
  map.addControl(drawControl);

  // Quand une forme est créée
  map.on(L.Draw.Event.CREATED, function (e) {
    const layer = e.layer;
    zoneLayer.addLayer(layer);

    if (layer instanceof L.Circle) {
      const center = layer.getLatLng();
      const radius = layer.getRadius();

      console.log("Cercle centre :", center);
      console.log("[" + Math.round(center.lat) + "," + Math.round(center.lng) + "]");
      console.log("Rayon :", radius);
    }

  });
}
