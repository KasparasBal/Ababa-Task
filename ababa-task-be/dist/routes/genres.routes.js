"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const genres_controller_1 = require("../controllers/genres.controller");
const router = express_1.default.Router();
router.route("/genres").get(genres_controller_1.getGenres);
exports.default = router;
//# sourceMappingURL=genres.routes.js.map