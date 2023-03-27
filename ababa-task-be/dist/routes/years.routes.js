"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const years_controller_1 = require("../controllers/years.controller");
const router = express_1.default.Router();
router.route("/years").get(years_controller_1.getYears);
exports.default = router;
//# sourceMappingURL=years.routes.js.map