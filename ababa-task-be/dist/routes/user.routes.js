"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const login_validator_1 = require("../validators/login.validator");
const signup_validator_1 = __importDefault(require("../validators/signup.validator"));
const user_controller_1 = require("../controllers/user.controller");
const router = express_1.default.Router();
router.route("/signup").post(signup_validator_1.default, user_controller_1.signUp);
router.route("/login").post(login_validator_1.validateUserLogin, user_controller_1.login);
exports.default = router;
//# sourceMappingURL=user.routes.js.map