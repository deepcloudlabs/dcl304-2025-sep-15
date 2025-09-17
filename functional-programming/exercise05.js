const movies = require("./resources/movies.json");
// 70's Drama Movies
const if_70s = movie => movie.year >= 1970 && movie.year < 1980;
const if_drama = movie => movie.genres.map(genre => genre.name).includes("Drama")
const movie_print_imdb_url = movie => console.log(`https://www.imdb.com/title/${movie.imdb}`);
movies.filter(if_70s)
      .filter(if_drama)
      .forEach(movie_print_imdb_url);