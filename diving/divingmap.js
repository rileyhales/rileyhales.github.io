const map = L.map('map').setView([40.51073, -96.4247], 4);
const basemap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'});
basemap.addTo(map)
function pointToLayer(feature, latlng) {return L.circleMarker(latlng);}
function onEachFeature(feature, layer) {
    let metadata = dives_data[feature.id];
    let popupstring = '';
    for (let key in metadata) {popupstring += String(key) + ': ' + String(metadata[key]) + '<br>'}
    layer.bindPopup(popupstring);
}
L.geoJSON(dives, {onEachFeature: onEachFeature, pointToLayer: pointToLayer}).addTo(map)