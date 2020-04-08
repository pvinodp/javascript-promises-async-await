const movies = require('./data/movies.json');
import { fetchWithTimeout }from "./services.js";
export function fetchMovies(){

    const resolveFunction = () => movies;
    return fetchWithTimeout(1000).then(resolveFunction);
}

const moviePromise = fetchMovies();
moviePromise.then((results) => {
    console.log(results);
});