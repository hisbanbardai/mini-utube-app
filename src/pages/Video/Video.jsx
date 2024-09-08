import ChannelInfo from "../../components/ChannelInfo/ChannelInfo";
import Comments from "../../components/Comments/Comments";
import RecommendedVideos from "../../components/RecommendedVideos/RecommendedVideos";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import "./Video.css";

export default function Video() {
  return (
    <div className="video-container">
      <VideoPlayer />
      <RecommendedVideos />
      <VideoDetails />
      <ChannelInfo />
      <Comments />
    </div>
  );
}
