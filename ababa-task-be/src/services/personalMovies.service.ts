import { MovieModel } from "../models/movie";

export interface Movie {
  id: number;
  title: string;
  studio: string;
  releaseDate: string;
  imageUrl: string;
  genres: string[];
  voteCount: number;
}

const savePersonalMovies = async (
  movie: Movie,
  currentUserEmail: string | undefined
): Promise<void> => {
  if (currentUserEmail) {
    const movieWithEmail = new MovieModel({
      email: currentUserEmail,
      ...movie,
    });
    if (
      !(await MovieModel.findOne({
        id: movie.id,
        email: currentUserEmail,
      }))
    ) {
      await movieWithEmail.save();
    } else {
      throw new Error("Movie already exists!");
    }
  } else {
    throw new Error("User email is not provided");
  }
};

const getPersonalMovies = async (currentUserEmail: string | undefined) => {
  if (currentUserEmail) {
    const movies = await MovieModel.find({ email: currentUserEmail });
    return movies;
  } else {
    throw new Error("User email is not provided");
  }
};

const deletePersonalMovies = async (
  id: number,
  currentUserEmail: string | undefined
) => {
  if (currentUserEmail) {
    await MovieModel.deleteOne({ id: id, email: currentUserEmail });
  }
};

export { savePersonalMovies, getPersonalMovies, deletePersonalMovies };
