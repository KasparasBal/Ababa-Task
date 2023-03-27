"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.signUp = void 0;
const user_1 = require("../models/user");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const js_sha256_1 = require("js-sha256");
const signUp = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new user_1.UserModel(Object.assign(Object.assign({}, userData), { password: (0, js_sha256_1.sha256)(userData.password) }));
    yield user.save();
});
exports.signUp = signUp;
const login = (userLogin) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(userLogin);
    const user = yield user_1.UserModel.findOne({ email: userLogin.email });
    console.log(user);
    if (!user) {
        throw new Error("User not found");
    }
    if ((0, js_sha256_1.sha256)(userLogin.password) === user.password) {
        const token = jsonwebtoken_1.default.sign({
            email: user.email,
        }, `${process.env.API_SECRET_KEY}`, {
            expiresIn: process.env.EXPIRE_TIME,
        });
        return token;
    }
    else {
        throw new Error("Invalid password");
    }
});
exports.login = login;
//# sourceMappingURL=user.service.js.map