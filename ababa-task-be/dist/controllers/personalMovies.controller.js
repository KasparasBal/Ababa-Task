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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePersonalMovies = exports.getPersonalMovies = exports.savePersonalMovies = void 0;
const personalMoviesService = __importStar(require("../services/personalMovies.service"));
const savePersonalMovies = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield personalMoviesService.savePersonalMovies(req.body, req.currentUserEmail);
        res.json({ status: "success" });
    }
    catch (error) {
        next(error);
    }
});
exports.savePersonalMovies = savePersonalMovies;
const getPersonalMovies = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movies = yield personalMoviesService.getPersonalMovies(req.currentUserEmail);
        res.send(movies);
    }
    catch (error) {
        next(error);
    }
});
exports.getPersonalMovies = getPersonalMovies;
const deletePersonalMovies = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        yield personalMoviesService.deletePersonalMovies(id, req.currentUserEmail);
        res.json({ status: "success" });
    }
    catch (error) {
        next(error);
    }
});
exports.deletePersonalMovies = deletePersonalMovies;
//# sourceMappingURL=personalMovies.controller.js.map