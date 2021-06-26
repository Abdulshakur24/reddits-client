import React from "react";

function CommentPreloader() {
  return (
    <div className="comment-preloader">
      <div className="author-comment-preloader">
        <div>
          <div className="comment-pre-loader-loading"></div>
        </div>
        <div>
          <div className="comment-pre-loader-loading"></div>
        </div>
      </div>
      <div className="body-comment-preloader">
        <div className="comment-pre-loader-loading"></div>
      </div>
    </div>
  );
}

export default CommentPreloader;
