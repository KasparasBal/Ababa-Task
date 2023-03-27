"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_service_1 = __importDefault(require("../services/auth.service"));
const movie_validator_1 = __importDefault(require("../validators/movie.validator"));
const personalMovies_controller_1 = require("../controllers/personalMovies.controller");
const router = express_1.default.Router();
router
    .route("/")
    .post(auth_service_1.default, movie_validator_1.default, personalMovies_controller_1.savePersonalMovies);
router.route("/:id").delete(auth_service_1.default, personalMovies_controller_1.deletePersonalMovies);
router.route("/").get(auth_service_1.default, personalMovies_controller_1.getPersonalMovies);
exports.default = router;
//# sourceMappingURL=personalMovies.routes.js.map