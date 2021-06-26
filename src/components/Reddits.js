import React from "react";
import { useSelector } from "react-redux";
import Articles from "./Articles";
import { v4 as uuidv4 } from "uuid";
import Preloader from "./Preloader";

function Reddits() {
  const redditsPosts = useSelector((state) => state.reddits.posts);
  const isLoading = useSelector((state) => state.reddits.isLoading);
  const isError = useSelector((state) => state.reddits.error);
  console.log(redditsPosts);
  return (
    <div className={`reddits`}>
      {isError && <h4 className="error">Please check your connection.</h4>}
      {isLoading ? (
        <>
          <Preloader />
          <Preloader />
          <Preloader />
          <Preloader />
        </>
      ) : (
        redditsPosts.map(
          ({
            title,
            ups,
            downs,
            url,
            permalink,
            author,
            created,
            created_utc,
            num_comments,
          }) => (
            <Articles
              key={uuidv4()}
              id={uuidv4()}
              ups={ups}
              downs={downs}
              image={url}
              title={title}
              permalink={permalink}
              author={author}
              created={created}
              created_utc={created_utc}
              num_comments={num_comments}
            />
          )
        )
      )}
    </div>
  );
}

export default Reddits;
