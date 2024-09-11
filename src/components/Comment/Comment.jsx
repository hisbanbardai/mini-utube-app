import "./Comment.css";

import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import { converter } from "../../utility";
import moment from "moment";

export default function Comment({ comment }) {
  return (
    <div className="comment">
      <img
        className="comment-image"
        src={comment?.snippet.topLevelComment.snippet.authorProfileImageUrl}
        alt=""
      />
      <div className="comment-text">
        <div className="comment-info">
          <p className="comment-username">
            {comment?.snippet.topLevelComment.snippet.authorDisplayName}
          </p>
          <p className="comment-time">
            {moment(
              comment?.snippet.topLevelComment.snippet.publishedAt
            ).fromNow()}
          </p>
        </div>
        <div className="comment-description">
          {comment?.snippet.topLevelComment.snippet.textDisplay}
        </div>
        <div className="comment-action-buttons">
          <div className="comment-action-button">
            <img src={like} alt="" />
            <span>
              {converter(comment?.snippet.topLevelComment.snippet.likeCount)}
            </span>
          </div>
          <div className="comment-action-button">
            <img src={dislike} alt="" />
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
