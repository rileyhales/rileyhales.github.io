$(document).ready(function(){
    const movies = {


        'The Dark Knight Rises': 'https://is2-ssl.mzstatic.com/image/thumb/Video118/v4/f5/fb/5c/f5fb5cee-3cb9-84e3-5538-2ced6053a1e7/source/1200x630bb.jpg',
    };

    let i = 1;
    for (let movie in movies) {
        if (i === 1) {$("#1").append('<img class="poster" src=' + movies[movie] + '>');i = i + 1;}
        else if (i === 2) {$("#2").append('<img class="poster" src=' + movies[movie]['url'] + '>');i = i + 1;}
        else if (i === 3) {$("#3").append('<img class="poster" src=' + movies[movie]['url'] + '>');i = i + 1;}
        else if (i === 4) {$("#4").append('<img class="poster" src=' + movies[movie]['url'] + '>');i = i + 1;}
        else if (i === 5) {$("#5").append('<img class="poster" src=' + movies[movie]['url'] + '>');i = i + 1;}
        else if (i === 6) {$("#6").append('<img class="poster" src=' + movies[movie]['url'] + '>');i = 1;}
    }
});