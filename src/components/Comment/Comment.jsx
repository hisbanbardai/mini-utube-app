import "./Comment.css";

import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import user from "../../assets/user_profile.jpg";

export default function Comment() {
  return (
    <div className="comment">
      <img className="comment-image" src={user} alt="" />
      <div className="comment-text">
        <div className="comment-info">
          <p className="comment-username">@theblackjaguar123</p>
          <p className="comment-time">33 minutes ago</p>
        </div>
        <div className="comment-description">
          I'm a latino and I don't know him But it looks like it's going to be
          an interesting documentary about this man
        </div>
        <div className="comment-action-buttons">
          <div className="comment-action-button">
            <img src={like} alt="" />
            <span>2</span>
          </div>
          <div className="comment-action-button">
            <img src={dislike} alt="" />
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  );
}
