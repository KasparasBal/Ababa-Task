import express from "express";
import validateGenre from "../validators/genre.validator";
import validateYear from "../validators/years.validator";
import validateSearch from "../validators/search.validator";
import * as moviesService from "../services/movies.service";

const getMovies = async (req: express.Request, res: express.Response) => {
  const searchQuery = req.query.search || "";
  const genreQuery = req.query.genres;
  const yearQuery = req.query.year || "";

  const genresArray =
    validateGenre(`${genreQuery}`) && genreQuery
      ? `${genreQuery}`.split(",")
      : [];

  const year = validateYear(`${yearQuery}`) && yearQuery ? `${yearQuery}` : "";

  const search =
    validateSearch(`${searchQuery}`) && searchQuery ? `${searchQuery}` : "";

  const filterOptions = {
    search: search,
    genres: genresArray,
    year: year,
  };

  try {
    const movies = await moviesService.getMovies(filterOptions);
    res.send(movies);
  } catch (error) {
    res.status(500).send("Error retrieving movies from the database");
  }
};

export { getMovies };
