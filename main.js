$(document).ready(function(){
    const movies = {
        '42': 'http://assets.sbnation.com/assets/2139717/42-poster.jpg',
        '17 Again': 'http://1.bp.blogspot.com/-Z1rZCMWJMS4/UQMCnDHrcGI/AAAAAAAAATs/k7IP7W6VCe8/s640/17_again_poster_11.jpg',
        'A Knight\'s Tale': 'https://www.highlandernews.org/wp-content/uploads/2013/02/A-Knights-Tale-2001-movie-poster.jpg',
        'A Quiet Place': 'http://iheartthetalkies.com/wp-content/uploads/2018/06/A-Quiet-Place-Poster-711x1024.jpg',
        'Alice in Wonderland': 'https://palethunder.files.wordpress.com/2010/03/alice-in-wonderland-movie-poster1.jpg',
        'An Inconvenient Truth': 'http://cdn.collider.com/wp-content/uploads/2016/12/an-inconvenient-truth-poster.jpeg',
        'Anastasia': 'https://www.dvdsreleasedates.com/posters/800/A/Anastasia-1997-movie-poster.jpg',
        'Angels and Demons': 'https://fanart.tv/fanart/movies/13448/movieposter/angels--demons-53a44bee4c8c8.jpg',
        'Apollo 13': 'http://4.bp.blogspot.com/_GIchwvJ-aNk/SlflD2y7UEI/AAAAAAAAJEM/vRYtCQrBP-w/s800/Apollo+13+movie+poster.jpg',
        'Aquaman': 'https://i2.wp.com/aftercredits.com/wp-content/uploads/2018/12/AquamanPoster.jpg',
        'Avatar': 'https://brianbantum.files.wordpress.com/2010/01/avatar-movie-poster.jpg',
        'Avengers Age of Ultron': 'http://vignette2.wikia.nocookie.net/marvelcinematicuniverse/images/c/c7/Avengers_Age_Of_Ultron-poster1.jpg/revision/latest?cb=20150224202250',
        'Avengers Infinity War': 'https://vignette.wikia.nocookie.net/marveldatabase/images/8/8b/Avengers_Infinity_War_poster_002.jpg/revision/latest?cb=20180318160428',
        'Back to the Future': 'http://static.rogerebert.com/uploads/movie/movie_poster/back-to-the-future-1985/large_pTpxQB1N0waaSc3OSn0e9oc8kx9.jpg',
        'Batman (1989)': 'https://thefilmeditorial.files.wordpress.com/2016/02/40771317.jpg',
        'Batman and Mr Freeze Subzero': 'http://image.tmdb.org/t/p/original/tG4ZFIOj4lA7GNZYvsjnMNfQGlh.jpg',
        'Batman Begins': 'https://i.jeded.com/i/batman-begins.11277.jpg',
        'Batman Beyond: Return of the Joker': 'https://bubbawheat.files.wordpress.com/2016/07/batman-beyond-return-of-the-joker.jpg?w=800',
        'Batman V Superman Dawn of Justice': 'https://trashfilmguru.files.wordpress.com/2016/03/batman-vs-superman-poster.jpg',
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