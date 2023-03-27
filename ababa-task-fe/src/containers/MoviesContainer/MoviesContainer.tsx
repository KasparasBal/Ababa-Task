import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import Loader from "../../components/Loader/Loader";
import MovieCard from "../../components/MovieCard/MovieCard";
import MoviesFilter from "../../components/MoviesFilter/MoviesFilter";

import styles from "./MoviesContainer.module.css";
import { FormikValues } from "formik";
import { fetchPersonalMovies } from "../../api/movies/movies";
import { ProfileContext } from "../../providers/ProfileProvider";

type Genre = {
  label: string;
  value: string;
};

type Movie = {
  id: number;
  title: string;
  studio: string;
  releaseDate: string;
  imageUrl: string;
  genres: string[];
  voteCount: number;
};

const MoviesContainer: React.FC = () => {
  const profileContext = useContext(ProfileContext);
  const [filterValues, setFilterValues] = useState({
    title: "",
    genre: [{ label: "", value: "" }],
    year: { label: "", value: "" },
  });

  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [personalMoviesArray, setPersonalMoviesArray] = useState([]);

  let fetchMovies: (movieFilter?: {
    title?: string;
    genre?: Genre[] | undefined;
    year?: { label: string; value: string };
  }) => Promise<Movie[]> = async (movieFilter = {}) => {
    let url = `${import.meta.env.VITE_REACT_APP_API_URL}/movies?`;
    if (movieFilter?.title) url += `search=${movieFilter.title}&`;
    if (movieFilter?.year) url += `year=${movieFilter.year.value}&`;
    if (movieFilter?.genre && movieFilter.genre.length) {
      const genreParams = movieFilter.genre
        .map((genre) => `${genre.value}`)
        .join(",");
      url += `genres=${genreParams}&`;
    }
    const { data } = await axios.get(url);
    return data;
  };

  const handleValues = (values: FormikValues) => {
    setFilterValues((prevValues) => ({
      ...prevValues,
      ...values,
    }));
  };

  useEffect(() => {
    const fetchFilteredMovies = async () => {
      const data = await fetchMovies({
        title: filterValues.title,
        genre: filterValues.genre,
        year: filterValues.year,
      });
      setFilteredMovies(data);
    };
    fetchFilteredMovies();
  }, [filterValues]);

  const { isLoading, error, data } = useQuery(["Movies"], () => fetchMovies());

  const { data: personalMovies, refetch } = useQuery(
    ["personal-movies"],
    () =>
      profileContext.isLoggedIn ? fetchPersonalMovies() : Promise.resolve([]),
    { enabled: profileContext.isLoggedIn }
  );

  const movieIds = personalMovies && personalMovies?.map((movie) => movie.id);

  const movieData =
    (filteredMovies.length > 0 ? filteredMovies : data) &&
    (filteredMovies.length > 0
      ? filteredMovies.map((movie: Movie) => (
          <MovieCard
            key={movie.id}
            {...movie}
            movieIds={movieIds}
            movieRefetch={refetch}
          />
        ))
      : data?.map((movie: Movie) => (
          <MovieCard
            key={movie.id}
            {...movie}
            movieIds={movieIds}
            movieRefetch={refetch}
          />
        )));
  return (
    <>
      <MoviesFilter handleValues={handleValues} />
      <div className={styles.container}>
        <>
          {error && <div>Oops something went wrong</div>}
          {isLoading && <Loader />}
          {data && movieData}
        </>
      </div>
    </>
  );
};

export default MoviesContainer;
