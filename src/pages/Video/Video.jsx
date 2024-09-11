import { useParams } from "react-router-dom";
import ChannelInfo from "../../components/ChannelInfo/ChannelInfo";
import Comments from "../../components/Comments/Comments";
import RecommendedVideos from "../../components/RecommendedVideos/RecommendedVideos";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import "./Video.css";
import { useEffect } from "react";
import axios from "axios";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { videoDataAtom } from "../../atoms/videoDataAtom";
import { categoryIdAtom } from "../../atoms/categoryIdAtom";
const apiKey = import.meta.env.VITE_API_KEY;

export default function Video() {
  const { categoryId, videoId } = useParams();
  const setVideoData = useSetRecoilState(videoDataAtom);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    async function fetchVideoData() {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${apiKey}`
      );

      setVideoData(res.data.items[0]);
    }

    fetchVideoData();
  }, [videoId, setVideoData]);

  return (
    <div className="video-container">
      <VideoPlayer videoId={videoId} />
      <RecommendedVideos categoryId={categoryId} />
      <VideoDetails />
      <ChannelInfo />
      <Comments videoId={videoId} />
    </div>
  );
}
