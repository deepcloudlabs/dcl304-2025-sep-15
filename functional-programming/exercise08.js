const cuntries = require("./resources/countries.json");
// movies with multiple directors
const if_movie_with_multiple_directors = movie => movie.directors.length > 1;
const movie_print_imdb_url = movie => console.log(`https://www.imdb.com/title/${movie.imdb}`);
movies.filter(if_movie_with_multiple_directors).forEach(movie_print_imdb_url);
