import "./ActionButtons.css";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import { useRecoilValue } from "recoil";
import { videoDataAtom } from "../../atoms/videoDataAtom";
import { converter } from "../../utility";

export default function ActionButtons() {
  const data = useRecoilValue(videoDataAtom);

  return (
    <div className="video-action-buttons">
      <div className="video-action-button">
        <img src={like} alt="" />
        <span>{converter(data?.statistics.likeCount)}</span>
      </div>
      <div className="video-action-button">
        <img src={dislike} alt="" />
        <span></span>
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
