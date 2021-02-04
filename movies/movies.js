const MovieGallery = (function () {
    "use strict";

    // URLs
    const URL_tmdbPosterBase = "https://image.tmdb.org/t/p/w500/";
    const URL_pageGoogle = "https://play.google.com/store/movies/details?id=";
    const URL_pageIMDB = "https://imdb.com/title/";
    const URL_pageTMDB = "https://themoviedb.org/movie/";
    const URL_searchGoogle = "https://play.google.com/store/search?c=movies&q=";
    const URL_searchFandango = "https://www.fandangonow.com/#search=";
    const URL_searchIMDB = "https://www.imdb.com/find?q=";

    // Icons showing formats and details
    const divOnGoogle = document.getElementById("opt-google");
    const divOnFand = document.getElementById("opt-fandangonow");
    const divOnFile = document.getElementById("opt-file");
    const divOnDisc = document.getElementById("opt-disc");
    const divIsUHD = document.getElementById("opt-uhd");
    const divIs3D = document.getElementById("opt-3d");

    // Poster and Title div
    const divTitle = document.getElementById("results-title");
    const divPoster = document.getElementById("results-poster");
    const divGallery = document.getElementById("posters-gallery");
    const divSearchOptions = document.getElementById("search-options");

    // Database items
    let mvdb = {};
    let mvls = [];

    const hideAllOptions = function () {
        divTitle.innerHTML = "";
        divPoster.innerHTML = "";
        divOnGoogle.style.display = "none";
        divOnFand.style.display = "none";
        divOnFile.style.display = "none";
        divOnDisc.style.display = "none";
        divIsUHD.style.display = "none";
        divIs3D.style.display = "none";
    };

    const displayMovie = function (dbEntry, movie) {
        let img_link;
        if (mvdb[movie].poster === "") {
            img_link = "https://rileyhales.com/assets/images/MoviePosterHolder.jpg";
        } else {
            img_link = URL_tmdbPosterBase + mvdb[movie].poster + ".jpg";
        }
        divTitle.innerHTML = `<h3 class="w3-margin-top">${movie}</h3>`;
        divPoster.innerHTML = `<a href="${URL_searchIMDB}${movie}" target="_blank"><img class="poster" src="${img_link}"></a>`;

        if (dbEntry.onGoogle) {
            divOnGoogle.style.display = "";
            if (dbEntry.idGoogle) {
                divOnGoogle.setAttribute("href", `${URL_pageGoogle}${dbEntry.idGoogle}`);
            } else {
                divOnGoogle.setAttribute("href", `${URL_searchGoogle}${dbEntry.idGoogle}`);
            }
        }
        if (dbEntry.onFandango) {
            divOnFand.style.display = "";
            divOnFand.setAttribute("href", `${URL_searchFandango}${movie}`);
        }
        if (dbEntry.onFile) {divOnFile.style.display = "";}
        if (dbEntry.onDisc) {divOnDisc.style.display = "";}
        if (dbEntry.isUHD) {divIsUHD.style.display = "";}
        if (dbEntry.is3D) {divIs3D.style.display = "";}
    };

    function addPosterRow(listOfMoviesToAdd) {
        let img_link;
        let row = `<div class="w3-row w3-margin-bottom">`;
        listOfMoviesToAdd.forEach(movie => {
            if (mvdb[movie].poster === "") {
                img_link = "https://rileyhales.github.io/assets/images/MoviePosterHolder.jpg";
            } else {
                img_link = URL_tmdbPosterBase + mvdb[movie].poster + ".jpg";
            }
            row += `<img id="${movie}" onclick='MovieGallery.search(this.id)' class="w3-padding-small w3-col s6 m4 l2" src="${img_link}">`;
        });
        row += "</div>";
        divGallery.innerHTML += row;
    }

    function populatePosters() {
        let postersToAdd = Object.keys(mvdb);
        // add rows of 6 while there are at least 6 left
        while (postersToAdd.length > 6) {
            addPosterRow(postersToAdd.splice(0, 6));
        }
        // add the rest of the posters (row of less than 6)
        addPosterRow(postersToAdd)
    }

    const init = function (url) {
        let request = new XMLHttpRequest();
        request.open("GET", url, true);
        request.onload = function () {
            if (request.status >= 200 && request.status < 400) {
                mvdb = JSON.parse(request.response);
                mvls = Object.keys(mvdb);
                mvls.forEach(mov => divSearchOptions.innerHTML += `<option>${mov}</option>`);
                populatePosters();
            } else {
                alert("Unable to retrieve JSON movie database");
            }
        };
        request.send();
    };

    const search = function searchMovies(movie) {
        hideAllOptions();
        if (!mvls.includes(movie)) {
            alert("No matches for this search");
            return;
        }
        console.log(movie)
        displayMovie(mvdb[movie], movie);
    };

    const random = function () {
        search(mvls[Math.floor(Math.random() * mvls.length)]);
    };

    const clear = function () {
        hideAllOptions();
    };

    return {
        "init": init,
        "search": search,
        "random": random,
        "clear": clear
    };

})();

MovieGallery.init("https://rileyhales.com/movies/mvdb.json")
document.getElementById("search-button").onclick = function () {MovieGallery.search(document.getElementById("search-box").value)};
document.getElementById("random-button").onclick = function () {MovieGallery.random()};
