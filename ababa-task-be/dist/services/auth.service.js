"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = require("../models/user");
const authenticate = (req, res, next) => {
    if (req.headers &&
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0] === "JWT") {
        jsonwebtoken_1.default.verify(req.headers.authorization.split(" ")[1], `${process.env.API_SECRET_KEY}`, function (err, decode) {
            if (err || !decode) {
                req.currentUserEmail = undefined;
                next();
            }
            else {
                user_1.UserModel.findOne({
                    email: decode.email,
                })
                    .then((user) => {
                    req.currentUserEmail = user === null || user === void 0 ? void 0 : user.email;
                    next();
                })
                    .catch((error) => {
                    res.status(500).send({ message: error });
                });
            }
        });
    }
    else {
        req.currentUserEmail = undefined;
        next();
    }
};
exports.default = authenticate;
//# sourceMappingURL=auth.service.js.map