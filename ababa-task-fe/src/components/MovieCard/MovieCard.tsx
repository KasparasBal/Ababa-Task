import { useContext, useState } from "react";
import { deleteMovie, postMovieSave } from "../../api/movies/movies";
import { ProfileContext } from "../../providers/ProfileProvider";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import styles from "./MovieCard.module.css";

type Movie = {
  id: number;
  title: string;
  studio: string;
  releaseDate: string;
  imageUrl: string;
  genres: string[];
  voteCount: number;
};

type MovieCardProps = Movie & {
  movieIds?: number[] | undefined;
  movieRefetch: () => void;
};

const MovieCard: React.FC<MovieCardProps> = (props) => {
  const profileContext = useContext(ProfileContext);

  const movieIdMatch = props.movieIds && props.movieIds.includes(props.id);

  const handleFavorite = async () => {
    movieIdMatch
      ? await deleteMovie(`${props.id}`)
      : await postMovieSave(props);
    props.movieRefetch();
  };

  return (
    <div className={styles.movieCard}>
      <div
        style={{ backgroundImage: `url(${props.imageUrl})` }}
        className={styles.imageContainer}
      />
      <div className={styles.releaseDate}>{props.releaseDate}</div>
      {profileContext.isLoggedIn && (
        <FavoriteButton
          onFavorite={handleFavorite}
          movieIdMatch={movieIdMatch}
        />
      )}
      <div className={styles.information}>
        <h1 className={styles.title}>{props.title}</h1>
        <div className={styles.genres}>
          {props.genres.map((genre, index) => (
            <span key={index} className={styles.genre}>
              {genre}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
