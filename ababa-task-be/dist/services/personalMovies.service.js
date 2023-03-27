"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePersonalMovies = exports.getPersonalMovies = exports.savePersonalMovies = void 0;
const movie_1 = require("../models/movie");
const savePersonalMovies = (movie, currentUserEmail) => __awaiter(void 0, void 0, void 0, function* () {
    if (currentUserEmail) {
        const movieWithEmail = new movie_1.MovieModel(Object.assign({ email: currentUserEmail }, movie));
        if (!(yield movie_1.MovieModel.findOne({
            id: movie.id,
            email: currentUserEmail,
        }))) {
            yield movieWithEmail.save();
        }
        else {
            throw new Error("Movie already exists!");
        }
    }
    else {
        throw new Error("User email is not provided");
    }
});
exports.savePersonalMovies = savePersonalMovies;
const getPersonalMovies = (currentUserEmail) => __awaiter(void 0, void 0, void 0, function* () {
    if (currentUserEmail) {
        const movies = yield movie_1.MovieModel.findOne({ email: currentUserEmail });
        return movies;
    }
    else {
        throw new Error("User email is not provided");
    }
});
exports.getPersonalMovies = getPersonalMovies;
const deletePersonalMovies = (id, currentUserEmail) => __awaiter(void 0, void 0, void 0, function* () {
    if (currentUserEmail) {
        yield movie_1.MovieModel.deleteOne({ movieId: id, email: currentUserEmail });
    }
});
exports.deletePersonalMovies = deletePersonalMovies;
//# sourceMappingURL=personalMovies.service.js.map