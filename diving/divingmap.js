const map = L.map('map').setView([40.51073, -96.4247], 4);
const basemap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

function pointToLayer(feature, latlng) {
    return L.circleMarker(latlng);
}

function onEachFeature(feature, layer) {
    let metadata = dives_data[feature.id];
    let popupstring = '';
    for (let key in metadata) {
        popupstring += String(key) + ': ' + String(metadata[key]) + '<br>'
    }
    layer.bindPopup(popupstring);
}

L.geoJSON(dives, {onEachFeature: onEachFeature, pointToLayer: pointToLayer}).addTo(map);

// make the metadata table
function maketable() {
    let table_string = "<table><tr><th>#</th><th>Date</th><th>Site</th><th>Type</th><th>Max Depth</th></tr>"
    for (let key in dives_data) {
        let id = "dive" + String(key);
        table_string += "<tr id=" + id + "><td>" + String(key) + "</td>"
        for (let entry in dives_data[key]) {
            table_string += "<td>" + String(dives_data[key][entry]) + "</td>";
        }
        table_string += "</tr>"
    }
    return table_string
}
$("#table").html(maketable())