"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const user_1 = require("../models/user");
const validateUserSignUp = [
    (0, express_validator_1.body)("name").isLength({ min: 3, max: 50 }),
    (0, express_validator_1.body)("email")
        .isEmail()
        .normalizeEmail()
        .custom((email) => new Promise((resolve, reject) => {
        user_1.UserModel.findOne({ email })
            .then((emailExists) => {
            if (emailExists) {
                reject(new Error("Email exists!"));
            }
            else {
                resolve(true);
            }
        })
            .catch((err) => reject(err));
    })),
    (0, express_validator_1.body)("password")
        .isLength({ min: 8 })
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/),
];
exports.default = validateUserSignUp;
//# sourceMappingURL=signup.validator.js.map