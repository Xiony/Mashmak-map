const DEBUG_MODE = true; // true pour activer l'édition

// Initialisation de la carte
const map = L.map("map", {
  crs: L.CRS.Simple,
  minZoom: 0,
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

ICONS_DATA.forEach(item => {
  // Créer le groupe si besoin
  if (!categories[item.category]) {
    categories[item.category] = L.layerGroup().addTo(map);

    // Ajouter la checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `toggle-${item.category}`;
    checkbox.checked = true;

    const label = document.createElement("label");
    label.htmlFor = checkbox.id;
    label.textContent = " " + item.category;

    document.getElementById("controls").appendChild(checkbox);
    document.getElementById("controls").appendChild(label);
    document.getElementById("controls").appendChild(document.createElement("br"));

    checkbox.addEventListener("change", e => {
      if (e.target.checked) map.addLayer(categories[item.category]);
      else map.removeLayer(categories[item.category]);
    });
  }

  // Icône par défaut
  const icon = L.icon({
    iconUrl: item.icon,
    iconSize: ICON_SIZE,
    iconAnchor: ICON_SIZE_ANCHOR
  });

  const marker = L.marker(item.coords, { icon }).addTo(categories[item.category]);

  // Ajouter modal uniquement si image/description présents
  if (item.image || item.description) {
    marker.on("click", () => openModal(item.image ?? "", item.description ?? ""));
    marker._icon.style.cursor = "pointer"; // curseur main
  } else {
    marker._icon.style.cursor = "default";
  }
});

//Gestion des zones
ZONES_DATA.forEach(zone => {
  if (!categories[zone.category]) {
    categories[zone.category] = L.layerGroup().addTo(map);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = true;
    checkbox.id = `toggle-${zone.category}`;

    const label = document.createElement("label");
    label.htmlFor = checkbox.id;
    label.textContent = " " + zone.category;

    document.getElementById("controls").appendChild(checkbox);
    document.getElementById("controls").appendChild(label);
    document.getElementById("controls").appendChild(document.createElement("br"));

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
      console.log("[" + center.lat + "," + center.lng + "]");
      console.log("Rayon :", radius);
    }

  });
}
