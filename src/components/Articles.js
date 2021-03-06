import React, { useState } from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Comment from "./Comment";

function Articles({
  ups,
  title,
  image,
  permalink,
  author,
  created_utc,
  num_comments,
}) {
  const [vote, setVote] = useState(null);

  const kFormatter = (num) =>
    Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * Math.abs(num);

  let get = () => {
    if (!vote) return "";
    return "red";
  };
  return (
    <article>
      <div className={`container`}>
        <div className="left">
          <ArrowUpwardIcon
            onClick={() => setVote("green")}
            className={`icon ${vote === "green" ? "green" : ""}`}
          />
          <p className={`${vote === "green" ? "green" : get()}`}>
            {kFormatter(ups)}
          </p>
          <ArrowDownwardIcon
            onClick={() => setVote("red")}
            className={`icon ${vote === "red" ? "red" : ""}`}
          />
        </div>
        <div className="right">
          <h3>{title}</h3>
          <img loading="lazy" src={image} alt="" />
        </div>
      </div>
      <Comment
        permalink={permalink}
        author={author}
        created_utc={created_utc}
        num_comments={num_comments}
      />
    </article>
  );
}

export default Articles;
