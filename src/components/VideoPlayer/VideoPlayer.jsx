import "./VideoPlayer.css";
import video from "../../assets/video.mp4";

export default function VideoPlayer() {
  return (
    <div className="video-player">
      <video className="video" src={video} controls autoPlay muted></video>
    </div>
  );
}
