import styles from "./FavoriteButton.module.css";
import favorite from "../../assets/favorite.svg";
import unfavorite from "../../assets/unfavorite.svg";

type FavoriteProps = {
  onFavorite: () => void;
  movieIdMatch: boolean | undefined;
};

const FavoriteButton: React.FC<FavoriteProps> = ({
  onFavorite,
  movieIdMatch,
}) => {
  return (
    <div className={styles.button} onClick={onFavorite}>
      {movieIdMatch ? (
        <img src={unfavorite} alt="heart svg" />
      ) : (
        <img src={favorite} alt="heart svg" />
      )}
    </div>
  );
};

export default FavoriteButton;
