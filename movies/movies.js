const mvls = Object.keys(mvdb);
const pg_base = 'https://themoviedb.org/movie/';
const img_base = 'https://image.tmdb.org/t/p/w500/';
const google_search = 'https://play.google.com/store/search?c=movies&q=';
const fandangonow_search = 'https://www.fandangonow.com/#search=';
const google_link = 'https://play.google.com/store/movies/details?id=';

function showOptions(db, movie) {
    const google = $("#opt-google");
    const fand = $("#opt-fandangonow");
    const file = $("#opt-file");
    const disc = $("#opt-disc");
    const uhd = $("#opt-uhd");
    const _3d = $("#opt-3d");
    const extended = $("#opt-extended");
    const unrated = $("#opt-unrated");

    $("#opt-formats").show();

    if (db['Google']) {
        google.show();
        if (db['Google-ID']) {
            google.attr('href', google_link + db['Google-ID'])
        } else {
            google.attr('href', google_search + movie)
        }
    } else {google.hide()}
    if (db['Fandango']) {fand.show(); fand.attr('href', fandangonow_search + movie)} else {fand.hide()}
    if (db['File']) {file.show()} else {file.hide()}
    if (db['Disc']) {disc.show()} else {disc.hide()}
    if (db['UHD']) {uhd.show()} else {uhd.hide()}
    if (db['3D']) {_3d.show()} else {_3d.hide()}
    if (db['Extended']) {extended.show()} else {extended.hide()}
    if (db['Unrated']) {unrated.show()} else {unrated.hide()}
}

function addPosterRow(listOfMoviesToAdd) {
    let img_link;
    let start_row = '<div class="w3-row w3-margin-bottom">';
    let end_row = '</div>';
    let row = start_row;
    for (let i in listOfMoviesToAdd) {
        let movie = listOfMoviesToAdd[i];
        if (mvdb[movie]['Poster'] === '') {
            img_link = 'https://rileyhales.github.io/assets/images/MoviePosterHolder.jpg';
        } else {
            img_link = img_base + mvdb[movie]['Poster'] + '.jpg';
        }
        row += '<img id="' + movie + '" class="w3-padding-small w3-col s6 m4 l2" src="' + img_link + '">';
    }
    row += end_row;
    $("#posters-div").append(row);
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

function searchMovies(movie) {
    if (!mvls.includes(movie)) {
        return
    }
    let pg = pg_base + mvdb[movie]['TMDB-ID'] + '.jpg';
    let img_link;
    if (mvdb[movie]['Poster'] === '') {
        img_link = 'https://rileyhales.com/assets/images/MoviePosterHolder.jpg';
    } else {
        img_link = img_base + mvdb[movie]['Poster'] + '.jpg';
    }
    $("#results-title").html('<h3 class="w3-margin-top">' + movie + '</h3>');
    $("#results-poster").html('<a href=' + pg + ' target="_blank"><img class="poster" src=' + img_link + '></a>');
    showOptions(mvdb[movie], movie)
}

$(document).ready(function () {
    populatePosters();
    let searchBox = $("#search-box");
    searchBox.autocomplete({source: mvls});
    searchBox.attr({'placeholder': 'Search ' + mvls.length + ' Movies'});
    $("#search-button").click(function () {
        searchMovies($("#search-box").val())
    });
    $("#random-button").click(function () {
        searchMovies(mvls[Math.floor(Math.random() * mvls.length)])
    });
    $('img').click(function () {
        searchMovies(this.id)
    })
});