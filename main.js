const DEBUG_MODE = false; // true pour activer l'édition

// Initialisation de la carte
const map = L.map("map", {
  crs: L.CRS.Simple,
  minZoom: -0.3,
  maxZoom: 1.5,
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
  if (isZone) {
    visualElement.className = "control-circle";
    visualElement.style.backgroundColor = color;
  } else {
    visualElement.className = "control-icon";
    visualElement.src = iconUrl;
    visualElement.alt = category;
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

  return { controlLine, checkbox };
}

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

  // Icône par défaut
  const icon = L.icon({
    iconUrl: item.icon,
    iconSize: ICON_SIZE,
    iconAnchor: ICON_SIZE_ANCHOR,
    className: item.image || item.description ? "icon-pointer" : "icon-default"
  });

  const marker = L.marker(item.coords, { icon }).addTo(categories[item.category]);

  // Ajouter modal uniquement si image/description présents
  if (item.image || item.description) {
    marker.on("click", () => openModal(item.image ?? "", item.description ?? ""));
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


// Modal
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalText = document.getElementById("modal-text");
const modalClose = document.getElementById("modal-close");

function openModal(imgSrc, text) {
  modal.style.display = "block";
  modalImg.src = imgSrc;
  modalText.textContent = text;

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
