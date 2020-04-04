mvls = Object.keys(mvdb);
$(function () {$("#searchbox").autocomplete({source: mvls})});
const pg_base = 'https://themoviedb.org/movie/';
const img_base = 'https://image.tmdb.org/t/p/w500';

function makeTable(db) {
    let check = '<td><i class="fas fa-check"></i></td>';
    let ban = '<td><i class="fas fa-ban"></i></td>';
    let table = '<table class="table"><tr><th>MoviesAnywhere</th><th>UltraHD</th><th>Disc</th></tr>';
    if (db['MA']) {table += check} else {table += ban}
    if (db['UHD']) {table += check} else {table += ban}
    if (db['Blu-Ray'] || db['DVD']) {table += check} else {table += ban}
    table += '</table>';
    return table
}

function populatePosters() {
    let i = 1;
    let img_link;
    for (let movie in mvdb) {
        if (mvdb[movie]['Poster'] !== '') {
            img_link = img_base + mvdb[movie]['Poster'];
        } else {
            img_link = 'https://rileyhales.github.io/Placeholder.jpg';
        }
        let html = "<img id=" + '"' + movie + '"' + 'class="poster" src=' + img_link + '>';
        if (i === 1) {$("#1").append(html);i += 1;}
            else if (i === 2) {$("#2").append(html);i += 1;}
            else if (i === 3) {$("#3").append(html);i += 1;}
            else if (i === 4) {$("#4").append(html);i += 1;}
            else if (i === 5) {$("#5").append(html);i += 1;}
            else if (i === 6) {$("#6").append(html);i = 1;}
        }
}

function searchMovies(movie) {
    if (!mvls.includes(movie)) {return}
    let pg = pg_base + mvdb[movie]['ID'];
    let img_link;
    if (mvdb[movie]['Poster'] !== '') {
            img_link = img_base + mvdb[movie]['Poster'];
    } else {
        img_link = 'https://rileyhales.github.io/Placeholder.jpg';
    }
    $("#results-poster").html('<a href=' + pg + ' target="_blank"><img class="poster" src=' + img_link + '></a>');
    $("#results-title").html('<h3>' + movie + '</h3>');
    try {
        $("#results-table").html(makeTable(mvdb[movie]));
    } catch (e) {
        console.log('No source table information');
        $("#results-table").html('')
    }
}

$(document).ready(function(){
    populatePosters();
    $("#searchbox").attr({'placeholder': 'Search ' + mvls.length + ' Movies'});
    $("#searchbutton").click(function() {searchMovies($("#searchbox").val())});
    $("#randombutton").click(function() {searchMovies(mvls[Math.floor(Math.random() * mvls.length)])});
    $('img').click(function() {searchMovies(this.id)})
});