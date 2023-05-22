import { useContext } from "react";
import MoviesContext from "../context/movies-context";

const useMovies = () => {
  return useContext(MoviesContext);
};

export default useMovies;
