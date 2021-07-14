import React from "react";
import { useDispatch } from "react-redux";
import { fetchDataAction } from "../features/slicer/redditSlice";

function SubReddits() {
  const dispatch = useDispatch();
  const handleFetch = async (slug) => {
    window.scrollTo(0, 0);
    dispatch(fetchDataAction(slug));
  };

  return (
    <div className="sub-reddits">
      <div className="sub-reddits-container hide-for-tablet">
        <button onClick={() => handleFetch("/r/Home/.json")}>Home</button>
        <button onClick={() => handleFetch("/r/AskReddit/.json")}>
          AskReddit
        </button>
        <button onClick={() => handleFetch("/r/LivestreamFail/.json")}>
          LivestreamFail
        </button>
        <button onClick={() => handleFetch("/r/Minecraft/.json")}>
          Minecraft
        </button>
        <button onClick={() => handleFetch("/r/NoStupidQuestions/.json")}>
          NoStupidQuestions
        </button>
        <button onClick={() => handleFetch("/r/AskMen/.json")}>AskMen</button>
        <button onClick={() => handleFetch("/r/memes/.json")}>memes</button>
        <button onClick={() => handleFetch("/r/leagueoflegends/.json")}>
          leagueoflegends
        </button>
        <button onClick={() => handleFetch("/r/PublicFreakout/.json")}>
          PublicFreakout
        </button>
        <button onClick={() => handleFetch("/r/wallstreetbets/.json")}>
          wallstreetbets
        </button>
        <button onClick={() => handleFetch("/r/pics/.json")}>pics</button>
        <button onClick={() => handleFetch("/r/funny/.json")}>funny</button>
        <button onClick={() => handleFetch("/r/ffxiv/.json")}>ffxiv</button>
        <button onClick={() => handleFetch("/r/nba/.json")}>nba</button>
        <button onClick={() => handleFetch("/r/explainlikeimfive/.json")}>
          explainlikeimfive
        </button>
        <button onClick={() => handleFetch("/r/Genshin_Impact/.json")}>
          Genshin_Impact
        </button>
        <button onClick={() => handleFetch("/r/personalfinance/.json")}>
          personalfinance
        </button>
        <button onClick={() => handleFetch("/r/movies/.json")}>movies</button>
        <button onClick={() => handleFetch("/r/sex/.json")}>sex</button>
        <button onClick={() => handleFetch("/r/todayilearned/.json")}>
          todayilearned
        </button>
        <button onClick={() => handleFetch("/r/anime/.json")}>anime</button>
        <button onClick={() => handleFetch("/r/Unexpected/.json")}>
          Unexpected
        </button>
        <button onClick={() => handleFetch("/r/tifu/.json")}>tifu</button>
        <button onClick={() => handleFetch("/r/gaming/.json")}>gaming</button>
        <button onClick={() => handleFetch("/r/CryptoCurrency/.json")}>
          CryptoCurrency
        </button>
      </div>
    </div>
  );
}

export default SubReddits;
