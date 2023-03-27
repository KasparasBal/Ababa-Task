"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getYears = void 0;
const fs_1 = require("fs");
const getYears = () => {
    return new Promise((resolve, reject) => {
        (0, fs_1.readFile)("src/db/years.json", (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                const years = JSON.parse(data.toString());
                resolve(years);
            }
        });
    });
};
exports.getYears = getYears;
//# sourceMappingURL=years.service.js.map