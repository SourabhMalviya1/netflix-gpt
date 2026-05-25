import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "./GptSearch";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((state) => state.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
