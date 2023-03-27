"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const MovieSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        required: true,
    },
    id: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    studio: {
        type: String,
    },
    releaseDate: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
    genres: {
        type: Array,
    },
    voteCount: {
        type: Number,
    },
});
exports.MovieModel = mongoose_1.default.model("Movie", MovieSchema);
//# sourceMappingURL=movie.js.map