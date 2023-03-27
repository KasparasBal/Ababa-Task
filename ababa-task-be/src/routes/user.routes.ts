import express from "express";
import { validateUserLogin } from "../validators/login.validator";
import validateUserSignUp from "../validators/signup.validator";

import { login, signUp } from "../controllers/user.controller";

const router = express.Router();

router.route("/signup").post(validateUserSignUp, signUp);
router.route("/login").post(validateUserLogin, login);

export default router;
