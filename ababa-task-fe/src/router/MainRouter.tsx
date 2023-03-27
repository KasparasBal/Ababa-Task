import { Routes, Route } from "react-router-dom";
import MoviesContainer from "../containers/MoviesContainer/MoviesContainer";
import MyMoviesContainer from "../containers/MyMoviesContainer/MyMoviesContainer";

import { routes } from "./routes";

const MainRouter: React.FC = () => {
  return (
    <Routes>
      <Route element={<MoviesContainer />} path={routes.index}>
        Index
      </Route>
      <Route element={<MyMoviesContainer />} path={routes.myMovies}>
        MyMovies
      </Route>
    </Routes>
  );
};

export default MainRouter;
