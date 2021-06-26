import React, { useState } from "react";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import CommentPreloader from "./CommentPreloader";
import axios from "./axios";
import moment from "moment";

function Comment({ author, permalink, created_utc, num_comments }) {
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [preloading, setPreloading] = useState(false);

  const fetchComments = async () => {
    setPreloading(true);
    setComments([]);

    const response = await axios.get(`${permalink}.json`).then((data) => {
      const array = data.data;
      const popLastElement = array.pop().data.children;
      const extractsData = popLastElement.map(({ data }) => data);
      setPreloading(false);
      setShowComments(!showComments);
      return extractsData;
    });
    setComments(response);
  };

  return (
    <div className="comments">
      <div className="bottom-comments">
        <h4>{author}</h4>
        <p>{moment.unix(created_utc).fromNow()}</p>
        <div className="comments_icons">
          <ChatBubbleOutlineIcon
            className="icon-comment"
            onClick={fetchComments}
          />
          <p>{num_comments.toLocaleString()}</p>
        </div>
      </div>
      {showComments ? (
        <div>
          {comments.length
            ? comments.map(({ id, body, author, created_utc }) => {
                const paragraph = (body) => {
                  return body;
                };
                return (
                  <div className="comment" key={id}>
                    <div>
                      <h4>{author}</h4>
                      <p>{moment.unix(created_utc).fromNow()}</p>
                    </div>
                    <div>
                      <p>{paragraph(body)}</p>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      ) : (
        <>{preloading ? <CommentPreloader /> : ""}</>
      )}
    </div>
  );
}

export default Comment;
