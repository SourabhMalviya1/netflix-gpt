import { BG_IMG } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BG_IMG} alt="Netflix Logo" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
