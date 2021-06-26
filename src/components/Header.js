import React, { useState } from "react";
import RedditIcon from "@material-ui/icons/Reddit";
import { createMuiTheme, Input, ThemeProvider } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../features/slicer/redditSlice";

function Header() {
  const [input, setInput] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [themeStatus, setThemeStatus] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(input));
  };

  const themes = () => (themeStatus ? "#ffff" : "#ff4500");
  const theme = createMuiTheme({
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
          <h6 className="hide-for-small-mobile">Reddit</h6>
        </div>
        <div className="header-search">
          <form onSubmit={handleSubmit}>
            <ThemeProvider theme={theme}>
              <Input
                placeholder="Search"
                variant="outlined"
                onChange={(e) => setInput(e.target.value)}
              />
              <SearchIcon onClick={handleSubmit} />
            </ThemeProvider>
          </form>
        </div>
      </div>
      <div
        className={`hide-for-desktop modal ${showModal ? "opened" : "closed"}`}
      ></div>
    </header>
  );
}

export default Header;
