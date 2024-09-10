import "./VideoPlayer.css";
import video from "../../assets/video.mp4";
import { useRecoilValue } from "recoil";
import { videoDataAtom } from "../../atoms/videoDataAtom";

export default function VideoPlayer({ videoId }) {
  const data = useRecoilValue(videoDataAtom);

  return (
    <div className="video-player">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullscreen
      ></iframe>
      {/* <video className="video" src={video} controls autoPlay muted></video> */}
    </div>
  );
}
