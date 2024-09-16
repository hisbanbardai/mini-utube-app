import "./RecommendedVideo.css";
import { converter, time } from "../../utility";
import { Link } from "react-router-dom";

export default function RecommendedVideo({ item }) {
  return (
    <div className="recommended-video">
      <Link to={`/video/${item.snippet.categoryId}/${item.id}`}>
        <div className="thumbnail-container">
          <img
            className="recommended-video-image"
            src={item?.snippet.thumbnails.medium.url}
            alt=""
          />
          <span>{time(item?.contentDetails.duration)}</span>
        </div>
      </Link>
      <div className="recommended-video-text">
        <p className="recommended-video-title">{item?.snippet.title}</p>
        <div className="recommended-video-info">
          <p className="recommended-video-channel-name">
            {item?.snippet.channelTitle}
          </p>
          <p className="recommended-video-video-views">
            {converter(item?.statistics.viewCount)} Views
          </p>
        </div>
      </div>
    </div>
  );
}
