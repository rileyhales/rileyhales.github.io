let database = {
    42: {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': 'http://assets.sbnation.com/assets/2139717/42-poster.jpg', 'uv': false},
    '17 Again': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': 'http://1.bp.blogspot.com/-Z1rZCMWJMS4/UQMCnDHrcGI/AAAAAAAAATs/k7IP7W6VCe8/s640/17_again_poster_11.jpg', 'uv': false},
    "A Knight's Tale": {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': 'https://www.highlandernews.org/wp-content/uploads/2013/02/A-Knights-Tale-2001-movie-poster.jpg', 'uv': true},
    'A Quiet Place': {'ma': false, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': true, 'url': 'http://iheartthetalkies.com/wp-content/uploads/2018/06/A-Quiet-Place-Poster-711x1024.jpg', 'uv': true},
    'Alice in Wonderland': {'ma': false, 'uhd': false, 'onlyon': false, 'dvd': true, 'bluray': false, 'url': 'https://palethunder.files.wordpress.com/2010/03/alice-in-wonderland-movie-poster1.jpg', 'uv': false},
    'An Inconvenient Truth': {'ma': false, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': 'http://cdn.collider.com/wp-content/uploads/2016/12/an-inconvenient-truth-poster.jpeg', 'uv': true},
    'Anastasia': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': true, 'bluray': false, 'url': 'https://www.dvdsreleasedates.com/posters/800/A/Anastasia-1997-movie-poster.jpg', 'uv': true},
    'Angels and Demons': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': 'https://fanart.tv/fanart/movies/13448/movieposter/angels--demons-53a44bee4c8c8.jpg', 'uv': true},
    'Apollo 13': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': 'http://4.bp.blogspot.com/_GIchwvJ-aNk/SlflD2y7UEI/AAAAAAAAJEM/vRYtCQrBP-w/s800/Apollo+13+movie+poster.jpg', 'uv': true},
    'Aquaman': {'ma': true, 'uhd': true, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': 'https://i2.wp.com/aftercredits.com/wp-content/uploads/2018/12/AquamanPoster.jpg', 'uv': false},
    'Avatar': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': true, 'bluray': true, 'url': 'https://brianbantum.files.wordpress.com/2010/01/avatar-movie-poster.jpg', 'uv': true},
    'Avengers 2 - Age of Ultron': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': 'http://vignette2.wikia.nocookie.net/marvelcinematicuniverse/images/c/c7/Avengers_Age_Of_Ultron-poster1.jpg/revision/latest?cb=20150224202250', 'uv': false},
    'Avengers: Infinity War': {'ma': true, 'uhd': true, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': 'https://vignette.wikia.nocookie.net/marveldatabase/images/8/8b/Avengers_Infinity_War_poster_002.jpg/revision/latest?cb=20180318160428', 'uv': false},
    'Back to the Future': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': 'http://static.rogerebert.com/uploads/movie/movie_poster/back-to-the-future-1985/large_pTpxQB1N0waaSc3OSn0e9oc8kx9.jpg', 'uv': true},
    'Batman (1989)': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': 'https://thefilmeditorial.files.wordpress.com/2016/02/40771317.jpg', 'uv': true},
    'Batman and Mr Freeze Subzero': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': 'http://image.tmdb.org/t/p/original/tG4ZFIOj4lA7GNZYvsjnMNfQGlh.jpg', 'uv': true},
    'Batman Begins': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': 'https://i.jeded.com/i/batman-begins.11277.jpg', 'uv': true},
    'Batman Beyond: Return of the Joker': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': 'https://bubbawheat.files.wordpress.com/2016/07/batman-beyond-return-of-the-joker.jpg?w=800', 'uv': false},
    'Batman V Superman Dawn of Justice': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': 'https://trashfilmguru.files.wordpress.com/2016/03/batman-vs-superman-poster.jpg', 'uv': false},
    'Batman: Mystery of the Batwoman': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': false},
    'Beauty and the Beast': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': false},
    'Beauty and the Beast (2017)': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': false},
    'Big Hero 6': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': false},
    'Black Panther': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': false},
    'Captain America: The First Avenger': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': true, 'bluray': true, 'url': '', 'uv': false},
    'Captain America: The Winter Soldier': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': false},
    'Captain America Civil War': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': false},
    'Carriers': {'ma': false, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': true},
    'Casino Royale': {'ma': false, 'uhd': false, 'onlyon': false, 'dvd': true, 'bluray': false, 'url': '', 'uv': false},
    'Cast Away': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': true},
    'Center Stage': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': false},


    'The Dark Knight': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': true, 'url': 'https://www.movieposter.com/posters/archive/main/69/MPW-34753', 'uv': true,},
    'The Dark Knight Rises': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': true, 'bluray': true, 'url': 'https://is2-ssl.mzstatic.com/image/thumb/Video118/v4/f5/fb/5c/f5fb5cee-3cb9-84e3-5538-2ced6053a1e7/source/1200x630bb.jpg', 'uv': true},
    'The Prestige': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': false},
    'I Am Legend': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': true},
    'The Lion King': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': false},
    'Spider-Man 3': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': true},
    'The Hunger Games': {
        'ma': false,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': true
    },
    'Divergent': {'ma': false, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': true},
    'Water World': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': true},
    'The Bourne Supremacy': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': true,
        'url': '',
        'uv': true
    },
    'The Greatest Showman': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': false
    },
    'The Bourne Identity': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': true,
        'url': '',
        'uv': true
    },
    'How to Train Your Dragon': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': true
    },
    'Mission Impossible Rogue Nation': {
        'ma': false,
        'uhd': false,
        'onlyon': false,
        'dvd': true,
        'bluray': true,
        'url': '',
        'uv': true
    },
    'Coco': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': false},
    'Harry Potter 7': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': false
    },
    'We Bought A Zoo': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': false
    },
    'Inception': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': true, 'bluray': true, 'url': '', 'uv': true},
    'Jimmy Neutron Boy Genius': {
        'ma': false,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': true
    },
    'Serenity': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': true},
    'Jack Reacher': {'ma': false, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': true, 'url': '', 'uv': true},
    'Mission Impossible': {
        'ma': false,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': true
    },
    'Warm Bodies': {'ma': false, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': true},
    'Wallace and Grommit The Curse of the Were-Rabbit': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': true
    },
    'The Polar Express\xa0': {
        'ma': false,
        'uhd': false,
        'onlyon': false,
        'dvd': true,
        'bluray': false,
        'url': '',
        'uv': false
    },
    'The Dark Knight Returns Deluxe Edition (part 1 + 2)': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': true
    },
    'Lord of the Rings: The Fellowship of the Ring': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': true
    },
    'Sherlock Holmes A Game Of Shadows': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': true
    },
    'Fate of the Furious F8': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': false
    },
    'Superman Returns': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': false
    },
    'The Iron Giant (Signiture Edition)': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': true
    },
    'Star Wars 7- The Force Awakens': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': true,
        'bluray': true,
        'url': '',
        'uv': false
    },
    'The Italian Job': {
        'ma': false,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': true
    },
    'Hidden Figures': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': true},
    'The Last Witch Hunter': {
        'ma': false,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': true
    },
    'Men in Black': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': true, 'url': '', 'uv': true},
    'Harry Potter 3': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': false
    },
    'Rememory': {'ma': false, 'uhd': false, 'onlyon': true, 'dvd': false, 'bluray': false, 'url': '', 'uv': false},
    'Megamind\xa0': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': true},
    'Taken 2': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': true, 'url': '', 'uv': true},
    'Contagion': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': false},
    'Jumper': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': true},
    'Now You See Me 2': {
        'ma': false,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': true
    },
    'Ice Age': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': false},
    'Kung Fu Panda': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': true},
    'Jack Ryan: Shadow Recruit': {
        'ma': false,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': true,
        'url': '',
        'uv': true
    },
    'Rango': {'ma': false, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': true},
    'Mr Peabody and Sherman': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': false
    },
    'Flushed Away': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': false},
    'Green Lantern': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': false},
    'Phantom of the Opera': {
        'ma': false,
        'uhd': false,
        'onlyon': false,
        'dvd': true,
        'bluray': false,
        'url': '',
        'uv': false
    },
    'The Maze Runner': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': false
    },
    'X-Men: Apocalypse': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': false
    },
    'Harry Potter 4': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': false
    },
    'Iron Man': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': false},
    'Split': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': true},
    'Star Trek Into Darkness': {
        'ma': false,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': true
    },
    'Iron Man 2': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': true, 'url': '', 'uv': false},
    'Mr. & Mrs. Smith': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': false
    },
    'The Lego Movie': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': false
    },
    'Percy Jackson and the Olympians: The Sea of Monsters': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': false
    },
    'The Great Mouse Detective': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': false
    },
    'Taken': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': true, 'url': '', 'uv': true},
    'Field of Dreams': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': false
    },
    'Transformers': {'ma': false, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': true},
    'The Incredibles': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': false
    },
    'Jason Bourne': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': true},
    'The Da Vinci Code': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': true
    },
    'Mulan': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': false},
    'Peter Pan': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': false},
    'Minions': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': true, 'bluray': true, 'url': '', 'uv': true},
    'Oceans 11': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': false},
    'Spider-Man 2': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': false},
    'Harry Potter 2': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': false
    },
    'Les Miserables': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': true},
    'Happy Feet': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': false},
    'Pitch Perfect': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': false},
    'Tommorrow Never Dies': {
        'ma': false,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': true
    },
    'Ghostbusters: Answer the call (2016 Extended)': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': false
    },
    'Lord of the Rings: The Two Towers': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': false
    },
    'The Amazing Spiderman 2': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': true
    },
    'The Bourne Ultimatum': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': true,
        'url': '',
        'uv': true
    },
    'Emperor': {'ma': false, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': true},
    'Skyfall': {'ma': false, 'uhd': false, 'onlyon': false, 'dvd': true, 'bluray': false, 'url': '', 'uv': false},
    'The Martian': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': true, 'url': '', 'uv': true},
    'The Amazing Spiderman': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': true,
        'bluray': true,
        'url': '',
        'uv': true
    },
    'The Peanuts Movie': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': true
    },
    'X-Men Origins Wolverine': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': true
    },
    'The Book of Life': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': true
    },
    'Justice League: Crisis on Two Earths': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': false
    },
    'Frozen': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': true, 'bluray': true, 'url': '', 'uv': false},
    'Rise of the Guardians': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': false
    },
    'The Karate Kid': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': true},
    'The Village': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': false},
    'Justice League': {'ma': true, 'uhd': true, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': false},
    'R.I.P.D.': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': true},
    'Die Another Day': {
        'ma': false,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': true
    },
    'Goldeneye': {'ma': false, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': true},
    'How to Train Your Dragon 2': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': true
    },
    'Jurrasic World': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': false
    },
    'Fanatastic Beasts: The Crimes of Grindelwald': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': false
    },
    'Robots': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': true},
    'Harry Potter 1': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': false
    },
    'Enders Game': {'ma': false, 'uhd': false, 'onlyon': false, 'dvd': true, 'bluray': true, 'url': '', 'uv': true},
    'Nephi and the Brass Plates': {
        'ma': false,
        'uhd': false,
        'onlyon': false,
        'dvd': true,
        'bluray': false,
        'url': '',
        'uv': false
    },
    'Indiana Jones: Raiders of the Lost Ark': {
        'ma': false,
        'uhd': false,
        'onlyon': true,
        'dvd': false,
        'bluray': true,
        'url': '',
        'uv': false
    },
    'Say Anything': {'ma': false, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': true},
    'Collateral Beauty': {
        'ma': true,
        'uhd': true,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': true
    },
    'The Lego Batman Movie': {
        'ma': true,
        'uhd': true,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': true
    },
    'The World is Not Enough': {
        'ma': false,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': true
    },
    'Percy Jackson and the Olympians: The Lightning Thief': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': false
    },
    'Rogue One': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': true, 'url': '', 'uv': false},
    'Transformers 3 Dark of the Moon': {
        'ma': false,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': true
    },
    'Men in Black 3': {
        'ma': false,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': true,
        'url': '',
        'uv': false
    },
    'Spectre\xa0': {'ma': false, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': true, 'url': '', 'uv': true},
    'Monsters vs Aliens': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': true
    },
    'Mission Impossible Ghost Protocol': {
        'ma': false,
        'uhd': false,
        'onlyon': false,
        'dvd': true,
        'bluray': true,
        'url': '',
        'uv': true
    },
    'Oceans 12': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': false},
    'Wonder Woman': {'ma': true, 'uhd': true, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': true},
    'Wrath of the Titans': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': false
    },
    'Harry Potter 8': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': false
    },
    'Madagascar': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': false},
    'Groundhog Day': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': true},
    'Thor 2': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': false},
    'Red': {'ma': false, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': true},

    'The Bourne Legacy': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': true,
        'url': '',
        'uv': true
    },
    'Superman: Brainiac Attacks': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': false
    },
    'Wreck It Ralph': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': false
    },
    'Ever After: A Cinderella Story': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': false
    },
    "The Zookeeper's Wife": {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': false
    },
    'Justice League: Doom': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': false
    },
    'Thor': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': false},
    'Gremlins': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': true},
    'The Prince of Egypt': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': true
    },
    'Edge of Tomorrow': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': true, 'bluray': true, 'url': '', 'uv': true},
    'Harry Potter 5': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': false
    },
    'Spider-Man': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': true},
    'Lord of the Rings: The Return of the King': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': false
    },
    'Mission Impossible 3': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': true
    },
    'Now You See Me': {'ma': false, 'uhd': false, 'onlyon': false, 'dvd': true, 'bluray': true, 'url': '', 'uv': true},
    'The Fault in our Stars': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': false
    },
    'Superman: The Movie': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': true
    },
    'Chicken Run': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': true},
    'The Pursuit of Happyness': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': true
    },
    'Moana': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': false},
    'October Sky': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': true},
    'Star Trek': {'ma': false, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': true},
    'Harry Potter 6': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': false
    },
    'Insurgent': {'ma': false, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': true},
    'The Imitation Game': {
        'ma': false,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': true
    },
    'The Blind Side': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': true},
    'Transformers 2 Revenge of the Fallen': {
        'ma': false,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': true
    },
    'Night at the Museum': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': false
    },
    'The Hunt for Red October': {
        'ma': false,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': true
    },
    'The Cold Light of Day': {
        'ma': false,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': true
    },
    'I, Robot': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': true},
    'Sherlock Holmes': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': true
    },
    'X-Men: Days of Future Past': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': false
    },
    'The Croods': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': true},
    'Eddie the Eagle': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': false
    },
    'Lion': {'ma': false, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': true},
    'Snow White and the 7 Dwarves': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': false
    },
    'Monsters Inc': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': false},
    'Jurassic Park': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': true},
    'Ready Player One': {
        'ma': true,
        'uhd': true,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': false
    },
    'Oceans 13': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': false},
    'Men in Black 2': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': true, 'url': '', 'uv': true},
    'School House Rock': {
        'ma': false,
        'uhd': false,
        'onlyon': false,
        'dvd': true,
        'bluray': false,
        'url': '',
        'uv': false
    },
    'Zootopia': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': true, 'bluray': true, 'url': '', 'uv': false},
    'Superman Doomsday': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': true
    },
    'Man on a Ledge': {
        'ma': false,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': true
    },
    'Despicable Me': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': true},
    'Sharknado': {'ma': false, 'uhd': false, 'onlyon': true, 'dvd': false, 'bluray': false, 'url': '', 'uv': false},
    'Man of Steel': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': true, 'bluray': true, 'url': '', 'uv': true},
    'Stripes': {'ma': true, 'uhd': false, 'onlyon': false, 'dvd': false, 'bluray': false, 'url': '', 'uv': true},
    'X-Men: First Class': {
        'ma': true,
        'uhd': false,
        'onlyon': false,
        'dvd': false,
        'bluray': false,
        'url': '',
        'uv': true
    },
}