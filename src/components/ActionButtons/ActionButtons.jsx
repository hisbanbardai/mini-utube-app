import "./ActionButtons.css";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";

export default function ActionButtons() {
  return (
    <div className="video-action-buttons">
      <div className="video-action-button">
        <img src={like} alt="" />
        <span>65K</span>
      </div>
      <div className="video-action-button">
        <img src={dislike} alt="" />
        <span>2K</span>
      </div>
      <div className="video-action-button">
        <img src={share} alt="" />
        <span>Share</span>
      </div>
      <div className="video-action-button">
        <img src={save} alt="" />
        <span>Save</span>
      </div>
    </div>
  );
}
