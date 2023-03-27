export type MovieSaveMovie = {
  id: number;
  title: string;
  studio: string;
  releaseDate: string;
  imageUrl: string;
  genres: string[];
  voteCount: number;
};

export type MovieResponse = {
  status: string;
};
