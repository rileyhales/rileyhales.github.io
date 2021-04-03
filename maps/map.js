const MapApp = (function () {
    "use strict";

    // URLs and Paths
    const DIV_MAP = "map";
    const URL_OPENSTREETMAP = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const URL_STATICGJ = "/static/geojson/";
    const URL_GEOJSONDIRECTORY = `${URL_STATICGJ}directory.json`;
    // Get JSON from URL
    const DIV_SElECTGJ = document.getElementById("select-geojson");
    const INPUT_JSON_URL = document.getElementById("input-json-url");
    // WMS Buttons and Inputs
    const BTN_GETWMS = document.getElementById("btn-get-wms");
    const BTN_GETLEGEND = document.getElementById("btn-get-legend");
    const INPUT_WMS_URL = document.getElementById("input-wms-url");
    const INPUT_WMS_LAYER = document.getElementById("input-wms-layer");
    const INPUT_WMS_MIN = document.getElementById("input-wms-min");
    const INPUT_WMS_MAX = document.getElementById("input-wms-max");
    const INPUT_WMS_OPAC = document.getElementById("input-wms-opacity");
    const INPUT_WMS_COLOR = document.getElementById("input-wms-colorscheme");
    // Draw/Edit GeoJSON
    const INPUT_EDITJSON = document.getElementById("textarea-json");
    const BTN_GETJSON = document.getElementById("btn-get-json");
    const BTN_EDITJSON = document.getElementById("submit-json");

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
    const legend = L.control({position: 'bottomright'});
    legend.onAdd = () => {
        let div = L.DomUtil.create('div', 'legend');
        let url = `${INPUT_WMS_URL.value}?REQUEST=GetLegendGraphic&LAYER=${INPUT_WMS_LAYER.value}&PALETTE=${INPUT_WMS_COLOR.value}&COLORSCALERANGE=${INPUT_WMS_MIN.value},${INPUT_WMS_MAX.value}`;
        div.innerHTML = `<img src="${url}" alt="legend" style="width:100%; float:right;">`
        return div
    };

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
        initEvents();
    };

    const initEvents = function () {
        DIV_SElECTGJ.addEventListener("change", () => {
            addGeoJSON(`${URL_STATICGJ}${DIV_SElECTGJ.value}`, DIV_SElECTGJ.options[DIV_SElECTGJ.selectedIndex].text);
        });
        BTN_GETJSON.addEventListener("click", () => {
            addGeoJSON(INPUT_JSON_URL.value, "Provided JSON URL");
        });
        BTN_GETWMS.addEventListener("click", () => {
            addWMS(INPUT_WMS_URL.value, INPUT_WMS_LAYER.value, "Provided WMS URL");
        });
        BTN_EDITJSON.addEventListener("click", () => {
            addInputJson(JSON.parse(INPUT_EDITJSON.value));
        });
        BTN_EDITJSON.addEventListener("click", () => {
            addInputJson(JSON.parse(INPUT_EDITJSON.value));
        });
        BTN_GETLEGEND.addEventListener("click", () => {
            addLegend();
        });
    }

    const onEachFeature = function (feature, layer) {
        if (feature.properties) {
            layer.bindPopup(feature.properties.name);
        }
    };

    const readGeoJsonDirectory = function () {
        fetch(URL_GEOJSONDIRECTORY)
            .then(response => {
                return response.json()
            })
            .then(directory => {
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
            .then(response => {
                return response.json()
            })
            .then(gjson => {
                removeGeoJSON();
                layerGeoJSON = L.geoJSON(gjson).addTo(map);
                layerControl.addOverlay(layerGeoJSON, title)
            })
            .catch(error => {
                console.log(error);
                alert("unable to add geojson to map")
            })
    };

    const removeWMS = function () {
        if (layerWMS !== null) {
            layerControl.removeLayer(layerWMS);
            map.removeLayer(layerWMS);
        }
    }

    const addWMS = function (url, layer, title) {
        removeWMS();
        const wmsOptions = {
            version: '1.3.0',
            layers: layer,
            format: "image/png",
            transparent: true,
            crossOrigin: false,
            useCache: true,
            opacity: `${INPUT_WMS_OPAC.value}`,
        }
        if (INPUT_WMS_MIN.value !== "" && INPUT_WMS_MAX.value !== "") {
            wmsOptions["colorscalerange"] = `${INPUT_WMS_MIN.value},${INPUT_WMS_MAX.value}`
        }
        if (INPUT_WMS_COLOR.value !== "") {
            wmsOptions["styles"] = INPUT_WMS_COLOR.value
        }
        layerWMS = L.tileLayer.wms(url, wmsOptions).addTo(map);
        layerControl.addOverlay(layerWMS, title)
    };

    const addLegend = function () {
        legend.addTo(map);
    }

    const updateJsonDisplay = function () {
        INPUT_EDITJSON.innerText = JSON.stringify(layerDraw.toGeoJSON(), null, 2)
    };
    const addInputJson = function (json) {
        layerDraw.clearLayers();
        layerDraw.addLayer(L.geoJSON(json));
    };

    return {
        init,
        layerWMS,
    };

}());
MapApp.init()