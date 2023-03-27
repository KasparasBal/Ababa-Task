"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const validatePersonalMovies = [
    (0, express_validator_1.body)("movieId").exists().isInt(),
    (0, express_validator_1.body)("title").exists(),
    (0, express_validator_1.body)("releaseDate").exists().isDate(),
];
exports.default = validatePersonalMovies;
//# sourceMappingURL=movie.validator.js.map