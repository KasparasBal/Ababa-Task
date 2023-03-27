import { useQuery } from "react-query";
import { fetchPersonalMovies } from "../../api/movies/movies";
import Loader from "../../components/Loader/Loader";
import MovieCard from "../../components/MovieCard/MovieCard";

import styles from "./MyMoviesContainer.module.css";

type Movie = {
  id: number;
  title: string;
  studio: string;
  releaseDate: string;
  imageUrl: string;
  genres: string[];
  voteCount: number;
};

const MyMoviesContainer: React.FC = () => {
  const {
    isLoading,
    error,
    data: personalMovies,
    refetch,
  } = useQuery(["personal-movies"], fetchPersonalMovies);
  const movieIds = personalMovies && personalMovies?.map((movie) => movie.id);

  const movieData = personalMovies?.map((movie: Movie) => (
    <MovieCard
      key={movie.id}
      {...movie}
      movieIds={movieIds}
      movieRefetch={refetch}
    />
  ));
  return (
    <div className={styles.container}>
      <>
        {error && <div>Oops something went wrong</div>}
        {isLoading && <Loader />}
        {personalMovies && movieData}
      </>
    </div>
  );
};

export default MyMoviesContainer;
