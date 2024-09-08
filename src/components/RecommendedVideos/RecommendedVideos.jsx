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

export default function RecommendedVideos() {
  return (
    <div className="recommended-videos-container">
      <RecommendedVideo image={thumbnail1} />
      <RecommendedVideo image={thumbnail2} />
      <RecommendedVideo image={thumbnail3} />
      <RecommendedVideo image={thumbnail4} />
      <RecommendedVideo image={thumbnail5} />
      <RecommendedVideo image={thumbnail6} />
      <RecommendedVideo image={thumbnail7} />
      <RecommendedVideo image={thumbnail8} />
    </div>
  );
}
