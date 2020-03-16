$(document).ready(function(){
    let i = 1;
    for (let movie in moviedb) {
        console.log(movie);
        console.log(moviedb[movie]);
        if (moviedb[movie][1] !== '') {
            let pg = 'https://themoviedb.org/movie/' + moviedb[movie][0];
            let img = 'https://image.tmdb.org/t/p/w500' + moviedb[movie][1];
            if (i === 1) {$("#1").append('<a href=' + pg + '><img class="poster" src=' + img + '></a>');i = i + 1;}
            else if (i === 2) {$("#2").append('<a href=' + pg + '><img class="poster" src=' + img + '></a>');i = i + 1;}
            else if (i === 3) {$("#3").append('<a href=' + pg + '><img class="poster" src=' + img + '></a>');i = i + 1;}
            else if (i === 4) {$("#4").append('<a href=' + pg + '><img class="poster" src=' + img + '></a>');i = i + 1;}
            else if (i === 5) {$("#5").append('<a href=' + pg + '><img class="poster" src=' + img + '></a>');i = i + 1;}
            else if (i === 6) {$("#6").append('<a href=' + pg + '><img class="poster" src=' + img + '></a>');i = 1;}
        }
    }
});