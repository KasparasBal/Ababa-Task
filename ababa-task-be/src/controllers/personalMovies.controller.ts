import express from "express";
import * as personalMoviesService from "../services/personalMovies.service";

const savePersonalMovies = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<void> => {
  try {
    await personalMoviesService.savePersonalMovies(
      req.body,
      req.currentUserEmail
    );
    res.json({ status: "success" });
  } catch (error) {
    next(error);
  }
};

const getPersonalMovies = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<void> => {
  try {
    const movies = await personalMoviesService.getPersonalMovies(
      req.currentUserEmail
    );
    res.send(movies);
  } catch (error) {
    next(error);
  }
};

const deletePersonalMovies = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const id = parseInt(req.params.id);
    await personalMoviesService.deletePersonalMovies(id, req.currentUserEmail);
    res.json({ status: "success" });
  } catch (error) {
    next(error);
  }
};

export { savePersonalMovies, getPersonalMovies, deletePersonalMovies };
