import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useSelector } from "react-redux";

const useNowPlayingMovies = () => {
  //Fetch now playing movies from TMDB API and store in redux store
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((state) => state.movies.nowPlayingMovies); 


  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      API_OPTIONS,
    );
    const jsonData = await data.json();
    dispatch(addNowPlayingMovies(jsonData.results));
  };

  useEffect(() => {
    if(!nowPlayingMovies || nowPlayingMovies.length === 0) {
      getNowPlayingMovies();
    }
  }, []);
};

export default useNowPlayingMovies;
