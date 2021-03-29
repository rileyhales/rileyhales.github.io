const MapApp = (function () {
    "use strict";

    const DIV_MAP = "map";
    const DIV_SElECTGJ = document.getElementById("select-geojson");
    const INPUT_JSON_URL = document.getElementById("input-json-url");
    const INPUT_WMS_URL = document.getElementById("input-wms-url");
    const INPUT_WMS_LAYER = document.getElementById("input-wms-layer");
    const INPUT_EDITJSON = document.getElementById("textarea-json");
    const BTN_GETJSON = document.getElementById("btn-get-json");
    const BTN_GETWMS = document.getElementById("btn-get-wms");
    const BTN_EDITJSON = document.getElementById("submit-json");
    const URL_OPENSTREETMAP = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const URL_STATICGJ = "/static/geojson/";
    const URL_GEOJSONDIRECTORY = `${URL_STATICGJ}directory.json`;

    const layerOSM = L.tileLayer(URL_OPENSTREETMAP, {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'});
    const basemaps = {"Open Street Maps": layerOSM};
    let layerGeoJSON = L.geoJSON();
    let layerWMS = null;
    let layerDraw = new L.FeatureGroup();
    let layerControl;
    let drawControl = new L.Control.Draw({
        edit: {
            featureGroup: layerDraw
        }
    });
    let map;

    const init = function () {
        map = L.map(DIV_MAP).setView([40.51073, -96.4247], 4);
        layerOSM.addTo(map);

        layerControl = L.control.layers(basemaps, {"Drawn Items": layerDraw.addTo(map)});
        layerControl.addTo(map);

        map.addControl(drawControl);
        map.on("draw:created", function (event) {
            layerDraw.addLayer(event.layer);
            updateJsonDisplay();
        });
        map.on("draw:edited", function (e) {
            updateJsonDisplay();
        });

        readGeoJsonDirectory();

        DIV_SElECTGJ.addEventListener("change", () => {
            addGeoJSON(`${URL_STATICGJ}${DIV_SElECTGJ.value}`, DIV_SElECTGJ.options[DIV_SElECTGJ.selectedIndex].text);
        });
        BTN_GETJSON.addEventListener("click", () => {
            addGeoJSON(INPUT_JSON_URL.value, "Provided JSON URL");
        });
        BTN_GETWMS.addEventListener("click", () => {
            addWMS(INPUT_WMS_URL.value, INPUT_WMS_LAYER.value,"Provided WMS URL");
        });
        BTN_EDITJSON.addEventListener("click", () => {
            addInputJson(JSON.parse(INPUT_EDITJSON.value));
        });

    };

    const onEachFeature = function (feature, layer) {
        if (feature.properties) {
            layer.bindPopup(feature.properties.name);
        }
    };

    const readGeoJsonDirectory = function () {
        fetch(URL_GEOJSONDIRECTORY)
            .then(response => {return response.json()})
            .then(directory => {
                console.log(directory);
                for (let entry in directory) {
                    DIV_SElECTGJ.innerHTML += `<option value="${directory[entry]}">${entry}</option>`
                }
            })
    }
    const removeGeoJSON = function () {
        layerControl.removeLayer(layerGeoJSON);
        map.removeLayer(layerGeoJSON);
    }

    const addGeoJSON = function (url, title) {
        if (url === "") {
            return
        }
        fetch(url)
            .then(response => {return response.json()})
            .then(gjson => {
                removeGeoJSON();
                layerGeoJSON = L.geoJSON(gjson).addTo(map);
                layerControl.addOverlay(layerGeoJSON, title)
            })
            .catch(error => {console.log(error);alert("unable to add geojson to map")})
    };

    const removeWMS = function () {
        if (layerWMS !== null) {
            layerControl.removeLayer(layerWMS);
            map.removeLayer(layerWMS);
        }
    }

    const addWMS = function (url, layer, title) {
        removeWMS();
        layerWMS = L.tileLayer.wms(url, {
            layers: layer,
            format: "image/png",
            transparent: true,
            crossOrigin:false,
        }).addTo(map);
        layerControl.addOverlay(layerWMS, title)
    };

    const updateJsonDisplay = function () {
        INPUT_EDITJSON.innerText = JSON.stringify(layerDraw.toGeoJSON(), null, 2)
    };
    const addInputJson = function (json) {
        layerDraw.clearLayers();
        layerDraw.addLayer(L.geoJSON(json));
        console.log(layerDraw.toGeoJSON())
    };

    return {
        init
    };

}());
MapApp.init()