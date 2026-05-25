import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { client } from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
import { useDispatch } from "react-redux";

const GptSearchBar = () => {
  const getLanguage = useSelector((state) => state.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const gptQuery =
    "Act as a movie recommendation system and suggest some movies for the query: " +
    searchText.current?.value +
    ". Only give me names of 5 movies , comma separated like the example result given ahead. Example Result: Gadar, Don,Golmal";
  const handleGptSearchClick = async () => {
    const response = await client.responses.create({
      model: "gpt-5.2",
      instructions: gptQuery,
      input: searchText.current.value,
    });
    const gptMovieList = response.output_text.split(",");
    // console.log(gptMovieList);
    const data = gptMovieList.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(data);
    dispatch(
      addGptMovieResult({
        movieNames: gptMovieList,
        movieResults: tmdbResults,
      }),
    );
    // console.log(tmdbResults);
  };

  const searchMovieTMDB = async (movieName) => {
    // console.log(movieName);
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&page=1`,
      API_OPTIONS,
    );
    const data = await response.json();
    // console.log(data);
    return data.results;
  };

  return (
    <div className="pt-[10%] flex justify-center ">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[getLanguage].gptSearchPlaceholder}
          ref={searchText}
        />
        <button
          type="submit"
          className="py-2 px-4 m-4
           bg-red-500 text-white rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[getLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
