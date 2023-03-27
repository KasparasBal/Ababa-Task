"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const movies_controller_1 = require("../controllers/movies.controller");
const router = express_1.default.Router();
router.route("/").get(movies_controller_1.getMovies);
exports.default = router;
//# sourceMappingURL=movies.routes.js.map