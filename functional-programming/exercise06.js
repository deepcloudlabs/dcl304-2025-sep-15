const movies = require("./resources/movies.json");
// genre histogram
const group_by_genre_and_count = (histogram, genre_name) => {
    histogram[genre_name] = (histogram[genre_name] || 0) + 1;
    return histogram;
};
const to_genre_name = genre => genre.name;
const to_genres = movie => movie.genres;
// one-liner
const genreHistogram = movies.map(to_genres).flat().map(to_genre_name).reduce(group_by_genre_and_count, {});
for (const genre in genreHistogram) {
    console.log(`${genre}: ${genreHistogram[genre]}`);
}
for (const [genre, count] of Object.entries(genreHistogram)) {
    console.log(`${genre}: ${count}`);
}