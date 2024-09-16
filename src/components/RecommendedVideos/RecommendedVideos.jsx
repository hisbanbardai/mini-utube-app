import RecommendedVideo from "../RecommendedVideo/RecommendedVideo";
import "./RecommendedVideos.css";
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";
import { useRecoilState, useRecoilValue } from "recoil";
import { recommendedVideosAtom } from "../../atoms/recommendedVideosAtom";
import { useEffect } from "react";
import axios from "axios";
import { categoryIdAtom } from "../../atoms/categoryIdAtom";
const apiKey = import.meta.env.VITE_API_KEY;

export default function RecommendedVideos() {
  const [data, setData] = useRecoilState(recommendedVideosAtom);
  const categoryId = useRecoilValue(categoryIdAtom);

  useEffect(() => {
    async function fetchRecommendedVideosData() {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${apiKey}`
      );
      setData(res.data.items);
    }
    fetchRecommendedVideosData();
  }, [categoryId, setData]);

  // const data = useRecoilValue(categoryBasedVideosAtomFamily(categoryId));

  return (
    <div className="recommended-videos-container">
      {data.length > 0 &&
        data.map((item) => <RecommendedVideo key={item.id} item={item} />)}
    </div>
  );
}
