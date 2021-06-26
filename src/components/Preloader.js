import React from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

function Preloader() {
  return (
    <article className="pre-loader-articles">
      <div className="pre-loader-container">
        <div className="pre-loader-left">
          <ArrowUpwardIcon />
          <div className="num">
            <div className="pre-loader-loading" />
          </div>
          <ArrowDownwardIcon />
        </div>
        <div className="pre-loader-right">
          <div className="pre-loader-header">
            <div className="pre-loader-loading" />
          </div>
          <div className="pre-loader-body">
            <div className="pre-loader-loading" />
          </div>
        </div>
      </div>
    </article>
  );
}

export default Preloader;
