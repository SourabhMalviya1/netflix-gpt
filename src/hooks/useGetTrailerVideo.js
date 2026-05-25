import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const useGetTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((state) => state.movies.trailerVideo);
  const getMovieVideo = async (movieId) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS,
    );
    const data = await response.json();
    const trailerVideo = data.results.find((video) => video.type === "Trailer");
    dispatch(addTrailerVideo(trailerVideo));
  };

  useEffect(() => {
    if (!trailerVideo || trailerVideo.id !== movieId) {
      getMovieVideo(movieId);
    }
  }, []);
};

export default useGetTrailerVideo;
