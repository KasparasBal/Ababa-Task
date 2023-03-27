import { readFile } from "fs";

type filterOptions = {
  search: string;
  genres: string[];
  year: string;
};

const getMovies = (filterOptions: filterOptions) => {
  return new Promise((resolve, reject) => {
    readFile("src/db/movies.json", (err, data) => {
      if (err) {
        reject(err);
      } else {
        const movies = JSON.parse(data.toString());

        let filteredMovies = movies;

        if (filterOptions.year) {
          filteredMovies = filteredMovies.filter(
            (movie: any) => movie.releaseDate === filterOptions.year
          );
        }

        if (filterOptions.search) {
          filteredMovies = filteredMovies.filter((movie: any) =>
            movie.title
              .toLowerCase()
              .includes(filterOptions.search.toLowerCase())
          );
        }

        if (filterOptions.genres.length > 0) {
          filteredMovies = filteredMovies.filter((movie: any) =>
            filterOptions.genres.every((genre: string) =>
              movie.genres.includes(genre)
            )
          );
        }

        if (filteredMovies.length > 0) {
          resolve(filteredMovies);
        } else {
          resolve(movies);
        }
      }
    });
  });
};

export { getMovies };
