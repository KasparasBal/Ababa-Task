import express from "express";

import { getYears } from "../controllers/years.controller";

const router = express.Router();

router.route("/years").get(getYears);

export default router;
