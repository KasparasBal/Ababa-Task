"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserLogin = void 0;
const express_validator_1 = require("express-validator");
const validateUserLogin = [
    (0, express_validator_1.body)("email").isEmail(),
    (0, express_validator_1.body)("password").notEmpty().isLength({ min: 8 }),
];
exports.validateUserLogin = validateUserLogin;
//# sourceMappingURL=login.validator.js.map