import { post, get, del } from "../shared/methods";
import { MovieSaveMovie, MovieResponse } from "./types";

export async function postMovieSave(
  movie: MovieSaveMovie
): Promise<MovieResponse> {
  const token = localStorage.getItem("TOKEN");
  const config = {
    headers: {
      Authorization: `JWT ${token}`,
      "Content-Type": "application/json",
    },
  };

  const { data } = await post<MovieSaveMovie, MovieResponse>(
    "personal-movies",
    movie,
    config
  );
  return data;
}

export async function fetchPersonalMovies(): Promise<MovieSaveMovie[]> {
  const token = localStorage.getItem("TOKEN");
  const config = {
    headers: {
      Authorization: `JWT ${token}`,
      "Content-Type": "application/json",
    },
  };

  const { data } = await get<MovieSaveMovie[]>("personal-movies", config);
  return data;
}

export async function deleteMovie(id: string): Promise<MovieResponse> {
  const token = localStorage.getItem("TOKEN");
  const config = {
    headers: {
      Authorization: `JWT ${token}`,
      "Content-Type": "application/json",
    },
  };

  const { data } = await del<MovieResponse>(`personal-movies/${id}`, config);
  return data;
}
