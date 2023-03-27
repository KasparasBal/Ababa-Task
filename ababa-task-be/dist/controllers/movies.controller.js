"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMovies = void 0;
const genre_validator_1 = __importDefault(require("../validators/genre.validator"));
const years_validator_1 = __importDefault(require("../validators/years.validator"));
const search_validator_1 = __importDefault(require("../validators/search.validator"));
const moviesService = __importStar(require("../services/movies.service"));
const getMovies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const searchQuery = req.query.search || "";
    const genreQuery = req.query.genres;
    const yearQuery = req.query.year || "";
    const genresArray = (0, genre_validator_1.default)(`${genreQuery}`) && genreQuery
        ? `${genreQuery}`.split(",")
        : [];
    const year = (0, years_validator_1.default)(`${yearQuery}`) && yearQuery ? `${yearQuery}` : "";
    const search = (0, search_validator_1.default)(`${searchQuery}`) && searchQuery ? `${searchQuery}` : "";
    const filterOptions = {
        search: search,
        genres: genresArray,
        year: year,
    };
    try {
        const movies = yield moviesService.getMovies(filterOptions);
        res.send(movies);
    }
    catch (error) {
        res.status(500).send("Error retrieving movies from the database");
    }
});
exports.getMovies = getMovies;
//# sourceMappingURL=movies.controller.js.map