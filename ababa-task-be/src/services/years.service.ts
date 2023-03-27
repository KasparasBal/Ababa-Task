import { readFile } from "fs";

const getYears = () => {
  return new Promise((resolve, reject) => {
    readFile("src/db/years.json", (err, data) => {
      if (err) {
        reject(err);
      } else {
        const years = JSON.parse(data.toString());
        resolve(years);
      }
    });
  });
};

export { getYears };
