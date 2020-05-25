let map = L.map('map', {
    zoom: 3,
    minZoom: 1.25,
    maxZoom: 12,
    boxZoom: true,
    maxBounds: L.latLngBounds(L.latLng(-100.0, -270.0), L.latLng(100.0, 270.0)),
    center: [25, -40],
});

const basemap = L.tileLayer('http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg').addTo(map);
basemaps = {"Basemap": basemap};

cisc_march_2019 = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {"name": "Miami-Dade Airport"},
            "geometry": {
                "coordinates": [-80.275151, 25.795301],
                "type": "Point",
            },
        },
        {
            "type": "Feature",
            "properties": {"name": "Florida International University - Casacuba Center, MARC Building"},
            "geometry": {
                "coordinates": [-80.373043, 25.754371],
                "type": "Point",
            },
        },
        {
            "type": "Feature",
            "properties": {"name": "La Quinta West"},
            "geometry": {
                "coordinates": [-80.338578, 25.799071],
                "type": "Point",
            },
        },
        {
            "type": "Feature",
            "properties": {"name": "Atlanta Georgia Airport"},
            "geometry": {
                "coordinates": [-84.434902, 33.644542],
                "type": "Point",
            },
        },
    ],
};
drcap2019 = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {"name": "27 Charcos"},
            "geometry": {
                "coordinates": [-70.819213, 19.734485],
                "type": "Point",
            },
        },

        {
            "type": "Feature",
            "properties": {"name": "Hatillo"},
            "geometry": {
                "coordinates": [-70.201398, 19.030929],
                "type": "Point",
            },
        },

        {
            "type": "Feature",
            "properties": {"name": "COE"},
            "geometry": {
                "coordinates": [-69.923653, 18.488675],
                "type": "Point",
            },
        },

        {
            "type": "Feature",
            "properties": {"name": "Park by Temple"},
            "geometry": {
                "coordinates": [-69.918357, 18.466926],
                "type": "Point",
            },
        },

        {
            "type": "Feature",
            "properties": {"name": "Santo Domingo Temple and MTC"},
            "geometry": {
                "coordinates": [-69.917135, 18.466622],
                "type": "Point",
            },
        },

        {
            "type": "Feature",
            "properties": {"name": "INDRHI"},
            "geometry": {
                "coordinates": [-69.926256, 18.450202],
                "type": "Point",
            },
        },

        {
            "type": "Feature",
            "properties": {"name": "Jardines del Teatro"},
            "geometry": {
                "coordinates": [-69.910303, 18.469293],
                "type": "Point",
            },
        },
        {
            "type": "Feature",
            "properties": {"name": "Food Truck Place"},
            "geometry": {
                "coordinates": [-69.905779, 18.468840],
                "type": "Point",
            },
        },

        {
            "type": "Feature",
            "properties": {"name": "El Conuco Restaurant"},
            "geometry": {
                "coordinates": [-69.900948, 18.465057],
                "type": "Point",
            },
        },

        {
            "type": "Feature",
            "properties": {"name": "Cathedral Santa Maria La Menor"},
            "geometry": {
                "coordinates": [-69.883879, 18.473259],
                "type": "Point",
            },
        },

        {
            "type": "Feature",
            "properties": {"name": "Melia Caribe Resort"},
            "geometry": {
                "coordinates": [-68.415120, 18.672043],
                "type": "Point",
            },
        },
        {
            "type": "Feature",
            "properties": {"name": "Ft Lauderdale Int Airport"},
            "geometry": {
                "coordinates": [-80.145223, 26.071527],
                "type": "Point",
            },
        },
    ],
};
byu = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {"name": "BYU"},
            "geometry": {
                "coordinates": [-111.649085, 40.250192],
                "type": "Point",
            },
        },
    ],
};
mission_firenze = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {"name": "Chicago O'Hare Airport"},
            "geometry": {
                "coordinates": [-87.904724, 41.978611],
                "type": "Point",
            },
        },
        {
            "type": "Feature",
            "properties": {"name": "Frankfurt Airport"},
            "geometry": {
                "coordinates": [8.562096, 50.037503],
                "type": "Point",
            },
        },
        {
            "type": "Feature",
            "properties": {"name": "Appartamento a Firenze"},
            "geometry": {
                "coordinates": [11.269319, 43.780531],
                "type": "Point",
            },
        },
        {
            "type": "Feature",
            "properties": {"name": "Duomo di Firenze - Florence Cathedral"},
            "geometry": {
                "coordinates": [11.256463, 43.773197],
                "type": "Point",
            },
        },
        {
            "type": "Feature",
            "properties": {"name": "Chiesa - Church"},
            "geometry": {
                "coordinates": [11.223759, 43.799389],
                "type": "Point",
            },
        },
        {
            "type": "Feature",
            "properties": {"name": "Other Missionary's Apartment"},
            "geometry": {
                "coordinates": [11.248708, 43.781425],
                "type": "Point",
            },
        },
        {
            "type": "Feature",
            "properties": {"name": "Cento Poveri - Restaurant"},
            "geometry": {
                "coordinates": [11.247382, 43.773177],
                "type": "Point",
            },
        },
        {
            "type": "Feature",
            "properties": {"name": "Piazzale Michelangelo"},
            "geometry": {
                "coordinates": [11.265078, 43.762978],
                "type": "Point",
            },
        },
        {
            "type": "Feature",
            "properties": {"name": "Outdoor Market"},
            "geometry": {
                "coordinates": [11.253623, 43.775495],
                "type": "Point",
            },
        },
    ],
};
mission_genova = {
    "type": "FeatureCollection",
    "features": [
        // {
        //     "type": "Feature",
        //     "properties": {"name": "Appartamento a Genova"},
        //     "geometry": {
        //         "coordinates": [0, 0],
        //         "type": "Point",
        //         },
        //     },
        // {
        //     "type": "Feature",
        //     "properties": {"name": "San Fruttuoso"},
        //     "geometry": {
        //         "coordinates": [0, 0],
        //         "type": "Point",
        //         },
        //     },
        // {
        //     "type": "Feature",
        //     "properties": {"name": "Casa di Robbie"},
        //     "geometry": {
        //         "coordinates": [0, 0],
        //         "type": "Point",
        //         },
        //     },
        {
            "type": "Feature",
            "properties": {"name": "Duomo di Genova - Genoa Cathedral"},
            "geometry": {
                "coordinates": [8.931212, 44.407730],
                "type": "Point",
            },
        },
        // {
        //     "type": "Feature",
        //     "properties": {"name": "Chiesa - Church"},
        //     "geometry": {
        //         "coordinates": [0, 0],
        //         "type": "Point",
        //         },
        //     },
    ],
};
mission_ancona = {
    "type": "FeatureCollection",
    "features": [
        // {
        //     "type": "Feature",
        //     "properties": {"name": "Appartamento ad Ancona"},
        //     "geometry": {
        //         "coordinates": [0, 0],
        //         "type": "Point",
        //         },
        //     },
        {
            "type": "Feature",
            "properties": {"name": "San Marino"},
            "geometry": {
                "coordinates": [12.456524, 43.936523],
                "type": "Point",
            },
        },
        {
            "type": "Feature",
            "properties": {"name": "Duomo di Ancona - Ancona Cathedral"},
            "geometry": {
                "coordinates": [13.510263, 43.625229],
                "type": "Point",
            },
        },
        // {
        //     "type": "Feature",
        //     "properties": {"name": "Chiesa - Church"},
        //     "geometry": {
        //         "coordinates": [0, 0],
        //         "type": "Point",
        //         },
        //     },
    ],
};
mission_milan = {
    "type": "FeatureCollection",
    "features": [
        // {
        //     "type": "Feature",
        //     "properties": {"name": "Appartamento a Milano"},
        //     "geometry": {
        //         "coordinates": [0, 0],
        //         "type": "Point",
        //         },
        //     },
        {
            "type": "Feature",
            "properties": {"name": "Duomo di Milano"},
            "geometry": {
                "coordinates": [9.191390, 45.464170],
                "type": "Point",
            },
        },
        // {
        //     "type": "Feature",
        //     "properties": {"name": "Mission Office"},
        //     "geometry": {
        //         "coordinates": [0, 0],
        //         "type": "Point",
        //         },
        //     },
        // {
        //     "type": "Feature",
        //     "properties": {"name": "Chiesa - Rione di Navigli"},
        //     "geometry": {
        //         "coordinates": [0, 0],
        //         "type": "Point",
        //         },
        //     },
        // Also make entries for the things you saw in como
        {
            "type": "Feature",
            "properties": {"name": "Amsterdam International Airport"},
            "geometry": {
                "coordinates": [4.764015, 52.310204],
                "type": "Point",
            },
        },
    ],
};
childhood = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {"name": "Stake Center"},
            "geometry": {
                "coordinates": [-111.714242, 33.372623],
                "type": "Point",
            },
        },
        {
            "type": "Feature",
            "properties": {"name": "High School"},
            "geometry": {
                "coordinates": [-111.714242, 33.372623],
                "type": "Point",
            },
        },
        {
            "type": "Feature",
            "properties": {"name": "Gilbert AZ Temple"},
            "geometry": {
                "coordinates": [-111.737325, 33.291224],
                "type": "Point",
            },
        },
        {
            "type": "Feature",
            "properties": {"name": "Mesa AZ Temple"},
            "geometry": {
                "coordinates": [-111.819668, 33.412670],
                "type": "Point",
            },
        },
    ],
};

function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties) {
        layer.bindPopup(feature.properties.name);
    }
}


mission_firenze_layer = L.geoJSON(mission_firenze, {onEachFeature: onEachFeature});
mission_genova_layer = L.geoJSON(mission_genova, {onEachFeature: onEachFeature});
mission_ancona_layer = L.geoJSON(mission_ancona, {onEachFeature: onEachFeature});
mission_milan_layer = L.geoJSON(mission_milan, {onEachFeature: onEachFeature});
mission = L.layerGroup([mission_firenze_layer, mission_genova_layer, mission_ancona_layer, mission_milan_layer]).addTo(map);

trips = {
    "Cuba Infrastructure Competition 3/2019": L.geoJSON(cisc_march_2019, {onEachFeature: onEachFeature}).addTo(map),
    "Dominican Republic Capstone 1/2019": L.geoJSON(drcap2019, {onEachFeature: onEachFeature}).addTo(map),
    "School at BYU 2014-2020": L.geoJSON(byu, {onEachFeature: onEachFeature}).addTo(map),
    "Italy Milan Mission 2015": mission,
    "Growing up in Arizona": L.geoJSON(childhood, {onEachFeature: onEachFeature}).addTo(map),
};

L.control.layers(basemaps, trips).addTo(map);