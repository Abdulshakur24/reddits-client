import React, { useState } from "react";
import RedditIcon from "@material-ui/icons/Reddit";
import { Input, ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch } from "react-redux";
import { searchTerm } from "../features/slicer/redditSlice";
import { fetchDataAction } from "../features/slicer/redditSlice";
import CloseIcon from "@material-ui/icons/Close";

function Header() {
  const [openModal, setModal] = useState(undefined);
  const [input, setInput] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [themeStatus, setThemeStatus] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchTerm(input));
    setInput("");
  };

  const themes = () => (themeStatus ? "#ffff" : "#ff4500");
  const theme = createTheme({
    palette: {
      primary: {
        main: themes(),
      },
      secondary: {
        main: themes(),
      },
    },
  });

  const handleSettings = () => {
    setThemeStatus(!themeStatus);
    setShowModal(!showModal);
    window.localStorage.setItem("Theme", themeStatus);
  };

  const handleFetch = async (slug) => {
    dispatch(fetchDataAction(slug));
    setModal(false);
    window.scrollTo(0, 0);
  };

  const fadeOut = () => {
    if (openModal === undefined) return "noneModal";
    return "fadeOut";
  };

  return (
    <header className={`header ${themeStatus ? "dark" : "light"}`}>
      <div className="header-container">
        <div className="header-flex">
          <div
            onClick={handleSettings}
            className={`header-round ${themeStatus ? "dark" : "light"}`}
          >
            <RedditIcon />
          </div>
          <h6>Reddit</h6>
        </div>
        <div className="header-search hide-for-tablet">
          <form onSubmit={handleSubmit}>
            <ThemeProvider theme={theme}>
              <Input
                placeholder="Search"
                variant="outlined"
                onChange={(e) => setInput(e.target.value)}
              />
              <SearchIcon onClick={() => dispatch(searchTerm(input))} />
            </ThemeProvider>
          </form>
        </div>
      </div>
      <div className="header-menu hide-for-desktop">
        <div className="menu-bar">
          <ul
            onClick={() => setModal(!openModal)}
            className={`${openModal ? "opened" : "closed"}`}
          >
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div
          onClick={() => setModal(false)}
          className={`modal ${openModal ? "fadeIn" : fadeOut()}`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`modal-container ${openModal ? "opened" : "closed"}`}
          >
            <div className="modal-header">
              <form onSubmit={handleSubmit}>
                <CloseIcon onClick={() => setModal(false)} />
                <ThemeProvider theme={theme}>
                  <Input
                    className="input"
                    placeholder="Search"
                    variant="outlined"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />

                  <SearchIcon onClick={() => dispatch(searchTerm(input))} />
                </ThemeProvider>
              </form>
            </div>
            <div className="modal-body">
              <div className="sub-reddits-container">
                <button onClick={() => handleFetch("/r/Home/.json")}>
                  Home
                </button>
                <button onClick={() => handleFetch("/r/AskReddit/.json")}>
                  AskReddit
                </button>
                <button onClick={() => handleFetch("/r/LivestreamFail/.json")}>
                  LivestreamFail
                </button>
                <button onClick={() => handleFetch("/r/Minecraft/.json")}>
                  Minecraft
                </button>
                <button
                  onClick={() => handleFetch("/r/NoStupidQuestions/.json")}
                >
                  NoStupidQuestions
                </button>
                <button onClick={() => handleFetch("/r/AskMen/.json")}>
                  AskMen
                </button>
                <button onClick={() => handleFetch("/r/memes/.json")}>
                  memes
                </button>
                <button onClick={() => handleFetch("/r/leagueoflegends/.json")}>
                  leagueoflegends
                </button>
                <button onClick={() => handleFetch("/r/PublicFreakout/.json")}>
                  PublicFreakout
                </button>
                <button onClick={() => handleFetch("/r/wallstreetbets/.json")}>
                  wallstreetbets
                </button>
                <button onClick={() => handleFetch("/r/pics/.json")}>
                  pics
                </button>
                <button onClick={() => handleFetch("/r/funny/.json")}>
                  funny
                </button>
                <button onClick={() => handleFetch("/r/ffxiv/.json")}>
                  ffxiv
                </button>
                <button onClick={() => handleFetch("/r/nba/.json")}>nba</button>
                <button
                  onClick={() => handleFetch("/r/explainlikeimfive/.json")}
                >
                  explainlikeimfive
                </button>
                <button onClick={() => handleFetch("/r/Genshin_Impact/.json")}>
                  Genshin_Impact
                </button>
                <button onClick={() => handleFetch("/r/personalfinance/.json")}>
                  personalfinance
                </button>
                <button onClick={() => handleFetch("/r/movies/.json")}>
                  movies
                </button>
                <button onClick={() => handleFetch("/r/sex/.json")}>sex</button>
                <button onClick={() => handleFetch("/r/todayilearned/.json")}>
                  todayilearned
                </button>
                <button onClick={() => handleFetch("/r/anime/.json")}>
                  anime
                </button>
                <button onClick={() => handleFetch("/r/Unexpected/.json")}>
                  Unexpected
                </button>
                <button onClick={() => handleFetch("/r/tifu/.json")}>
                  tifu
                </button>
                <button onClick={() => handleFetch("/r/gaming/.json")}>
                  gaming
                </button>
                <button onClick={() => handleFetch("/r/CryptoCurrency/.json")}>
                  CryptoCurrency
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
