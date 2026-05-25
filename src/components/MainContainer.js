import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import SecondaryContainer from "./SecondaryContainer";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return null;

  const mainMovie = movies ? movies[0] : null;
  const { id, original_title, overview, backdrop_path } = mainMovie;

  return (
    <div className="main-container">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
