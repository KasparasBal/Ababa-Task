"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGenres = void 0;
const fs_1 = require("fs");
const getGenres = () => {
    return new Promise((resolve, reject) => {
        (0, fs_1.readFile)("src/db/genres.json", (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                const genres = JSON.parse(data.toString());
                resolve(genres);
            }
        });
    });
};
exports.getGenres = getGenres;
//# sourceMappingURL=genres.service.js.map