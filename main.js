$(document).ready(function(){
    let i = 1;
    for (let movie in database) {
        if (database[movie]['url'] !== '') {
            if (i === 1) {$("#1").append('<img class="poster" src=' + database[movie]['url'] + '>');i = i + 1;}
            else if (i === 2) {$("#2").append('<img class="poster" src=' + database[movie]['url'] + '>');i = i + 1;}
            else if (i === 3) {$("#3").append('<img class="poster" src=' + database[movie]['url'] + '>');i = i + 1;}
            else if (i === 4) {$("#4").append('<img class="poster" src=' + database[movie]['url'] + '>');i = i + 1;}
            else if (i === 5) {$("#5").append('<img class="poster" src=' + database[movie]['url'] + '>');i = i + 1;}
            else if (i === 6) {$("#6").append('<img class="poster" src=' + database[movie]['url'] + '>');i = 1;}
        }
    }
});