import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useSelector } from "react-redux";

const usePopularMovies = () => {
  //Fetch popular movies from TMDB API and store in redux store
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.movies.popularMovies); 
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?&page=1",
      API_OPTIONS,
    );
    const jsonData = await data.json();
    dispatch(addPopularMovies(jsonData.results));
  };

  useEffect(() => {
    if(!popularMovies || popularMovies.length === 0) {
      getPopularMovies();
    }
  }, []);
};

export default usePopularMovies;
