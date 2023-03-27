import express from "express";

import { getGenres } from "../controllers/genres.controller";

const router = express.Router();

router.route("/genres").get(getGenres);

export default router;
