import { readFile } from "fs";

const getGenres = () => {
  return new Promise((resolve, reject) => {
    readFile("src/db/genres.json", (err, data) => {
      if (err) {
        reject(err);
      } else {
        const genres = JSON.parse(data.toString());
        resolve(genres);
      }
    });
  });
};

export { getGenres };
