$(document).ready(function(){
    const movies = {
        '42': 'http://assets.sbnation.com/assets/2139717/42-poster.jpg',
        '17 Again': 'http://1.bp.blogspot.com/-Z1rZCMWJMS4/UQMCnDHrcGI/AAAAAAAAATs/k7IP7W6VCe8/s640/17_again_poster_11.jpg',
        'A Knight\'s Tale': 'https://www.highlandernews.org/wp-content/uploads/2013/02/A-Knights-Tale-2001-movie-poster.jpg',
        'A Quiet Place': 'http://iheartthetalkies.com/wp-content/uploads/2018/06/A-Quiet-Place-Poster-711x1024.jpg',
        'Alice in Wonderland': 'https://palethunder.files.wordpress.com/2010/03/alice-in-wonderland-movie-poster1.jpg',
        'Anastasia': 'https://www.dvdsreleasedates.com/posters/800/A/Anastasia-1997-movie-poster.jpg',
        'The Dark Knight Rises': 'https://is2-ssl.mzstatic.com/image/thumb/Video118/v4/f5/fb/5c/f5fb5cee-3cb9-84e3-5538-2ced6053a1e7/source/1200x630bb.jpg',
        'The Dark Knight': 'https://www.movieposter.com/posters/archive/main/69/MPW-34753',
    };

    let i = 1;
    for (let movie in movies) {
        if (i === 1) {$("#1").append('<img class="poster" src=' + movies[movie] + '>');i = i + 1;}
        else if (i === 2) {$("#2").append('<img class="poster" src=' + movies[movie] + '>');i = i + 1;}
        else if (i === 3) {$("#3").append('<img class="poster" src=' + movies[movie] + '>');i = i + 1;}
        else if (i === 4) {$("#4").append('<img class="poster" src=' + movies[movie] + '>');i = i + 1;}
        else if (i === 5) {$("#5").append('<img class="poster" src=' + movies[movie] + '>');i = i + 1;}
        else if (i === 6) {$("#6").append('<img class="poster" src=' + movies[movie] + '>');i = 1;}
    }
});