import express from "express";
import * as genresService from "../services/genres.service";

const getGenres = async (_req: express.Request, res: express.Response) => {
  try {
    const genres = await genresService.getGenres();
    res.send(genres);
  } catch (error) {
    res.status(500).send("Error retrieving genres from the database");
  }
};

export { getGenres };
