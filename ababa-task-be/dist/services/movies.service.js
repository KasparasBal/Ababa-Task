"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMovies = void 0;
const fs_1 = require("fs");
const getMovies = (filterOptions) => {
    return new Promise((resolve, reject) => {
        (0, fs_1.readFile)("src/db/movies.json", (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                const movies = JSON.parse(data.toString());
                let filteredMovies = movies;
                if (filterOptions.year) {
                    filteredMovies = filteredMovies.filter((movie) => movie.releaseDate === filterOptions.year);
                }
                if (filterOptions.search) {
                    filteredMovies = filteredMovies.filter((movie) => movie.title
                        .toLowerCase()
                        .includes(filterOptions.search.toLowerCase()));
                }
                if (filterOptions.genres.length > 0) {
                    filteredMovies = filteredMovies.filter((movie) => filterOptions.genres.every((genre) => movie.genres.includes(genre)));
                }
                if (filteredMovies.length > 0) {
                    resolve(filteredMovies);
                }
                else {
                    resolve(movies);
                }
            }
        });
    });
};
exports.getMovies = getMovies;
//# sourceMappingURL=movies.service.js.map