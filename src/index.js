import  fetchWithTimeout from "./services.js";

const movies = require('/data/movies.json');

export function fetchMovies(){

    let resolveFunction = () => movies;
     return fetchWithTimeout(1000)
}

moviePromise = fetchMovies();
moviePromise.then((results) => {
    console.log(results);
});
