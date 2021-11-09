import React, { useState } from "react";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import CommentPreloader from "./CommentPreloader";
import axios from "./axios";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import Fade from "react-reveal/Fade";

function Comment({ author, permalink, created_utc, num_comments }) {
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [preloading, setPreloading] = useState(false);
  const [limit, setLimit] = useState([]);

  const noMore = comments.length === limit.length;

  const showMore = () => {
    const consecutive = 5;
    let lengthOfC = comments.length;
    let lengthOfL = limit.length;
    let remaining = lengthOfC - lengthOfL;
    const determine = remaining < consecutive ? remaining : consecutive;

    for (let i = limit.length; i < limit.length + determine; i++)
      setLimit((prev) => [...prev, comments[i]]);
  };

  const fetchComments = async () => {
    setPreloading(true);
    setComments([]);
    setLimit([]);

    await axios.get(`${permalink}.json`).then((data) => {
      const array = data.data;
      const popLastElement = array.pop().data.children;
      const extractsData = popLastElement.map(({ data }) => data);
      setPreloading(false);
      setShowComments(!showComments);
      setComments(extractsData);

      if (extractsData.length === 1) {
        setLimit([...limit, extractsData[0]]);
      } else if (extractsData.length === 2) {
        setLimit([...limit, extractsData[0], extractsData[1]]);
      } else if (extractsData.length >= 3) {
        setLimit([...limit, extractsData[0], extractsData[1], extractsData[2]]);
      }
    });
  };

  const dateContructor = (created_utc) => moment.unix(created_utc).fromNow();

  return (
    <div className="comments">
      <div className="bottom-comments">
        <h4>{author}</h4>
        <p>{dateContructor(created_utc)}</p>
        <div className="comments_icons">
          <ChatBubbleOutlineIcon
            className="icon-comment"
            onClick={fetchComments}
          />
          <p>{num_comments.toLocaleString()}</p>
        </div>
      </div>
      {showComments ? (
        <>
          <div>
            {comments.length !== 0 &&
              limit.map(({ id, body, author, created_utc }, index) => {
                const paragraph = (body) => {
                  return <ReactMarkdown key={index}>{body}</ReactMarkdown>;
                };

                return (
                  <Fade key={index} bottom>
                    <div className="comment" key={id}>
                      <div className="comment-header">
                        <h4>{author}</h4>
                        <p>{dateContructor(created_utc)}</p>
                      </div>
                      <div className="comment-paragraph">{paragraph(body)}</div>
                    </div>
                  </Fade>
                );
              })}
          </div>
          <Fade bottom>
            <div className="no-more-comment">
              {noMore ? (
                <button disabled={true}>No more.</button>
              ) : (
                <button onClick={showMore}>
                  {comments.length - limit.length} more left.
                </button>
              )}
            </div>
          </Fade>
        </>
      ) : (
        <Fade bottom>
          <>{preloading ? <CommentPreloader /> : ""}</>
        </Fade>
      )}
    </div>
  );
}

export default Comment;
