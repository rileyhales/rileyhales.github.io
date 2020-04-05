const mvls = Object.keys(mvdb);
const pg_base = 'https://themoviedb.org/movie/';
const img_base = 'https://image.tmdb.org/t/p/w500';

function makeTable(db) {
    let check = '<td><i class="fas fa-check"></i></td>';
    let ban = '<td><i class="fas fa-ban"></i></td>';
    let table = '<table class="w3-table-all" style="margin-left: auto; margin-right: auto"><tr><th>MoviesAnywhere</th><th>UltraHD</th><th>Disc</th></tr>';
    if (db['MA']) {
        table += check
    } else {
        table += ban
    }
    if (db['UHD']) {
        table += check
    } else {
        table += ban
    }
    if (db['Blu-Ray'] || db['DVD']) {
        table += check
    } else {
        table += ban
    }
    table += '</table>';
    return table
}

function addPosterRow(listOfMoviesToAdd) {
    let img_link;
    let start_row = '<div class="w3-row w3-margin-bottom">';
    let end_row = '</div>';
    let row = start_row;
        for (let i in listOfMoviesToAdd) {
            let movie = listOfMoviesToAdd[i];
            if (mvdb[movie]['Poster'] !== '') {
                img_link = img_base + mvdb[movie]['Poster'];
            } else {
                img_link = 'https://rileyhales.github.io/assets/images/MoviePosterHolder.jpg';
            }
            row += '<img id="' + movie + '" class="w3-container w3-col s6 m4 l2" src="' + img_link + '">';
        }
        row += end_row;
        $("#posters-div").append(row);
}

function populatePosters() {
    let postersToAdd = Object.keys(mvdb);
    // add rows of 6 while there are at least 6 left
    while (postersToAdd.length >= 6) {
        addPosterRow(postersToAdd.splice(0, 6));
    }
    // add the rest of the posters (row of less than 6)
    addPosterRow(postersToAdd)
}

function searchMovies(movie) {
    if (!mvls.includes(movie)) {
        return
    }
    let pg = pg_base + mvdb[movie]['ID'];
    let img_link;
    if (mvdb[movie]['Poster'] !== '') {
        img_link = img_base + mvdb[movie]['Poster'];
    } else {
        img_link = 'https://rileyhales.com/assets/images/MoviePosterHolder.jpg';
    }
    $("#results-title").html('<h3 class="w3-margin-top">' + movie + '</h3>');
    $("#results-poster").html('<a href=' + pg + ' target="_blank"><img class="poster" src=' + img_link + '></a>');
    try {
        $("#results-table").html(makeTable(mvdb[movie]));
    } catch (e) {
        $("#results-table").html('')
    }
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