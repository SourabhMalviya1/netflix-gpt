import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { gptMovieResult, movieNames } = useSelector((state) => state.gpt);
    if (!gptMovieResult || !movieNames) {
        return null;
    }
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      {movieNames.map(movie => (
        <MovieList
          title={`${movie}`}
          movies={gptMovieResult?.[movieNames.indexOf(movie)]}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestion;
