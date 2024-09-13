import { Link } from "react-router-dom";
import "./Card.css";
import { converter, date, time } from "../../utility";
import moment from "moment";
import { useRecoilValue } from "recoil";
import { categoryIdAtom } from "../../atoms/categoryIdAtom";

export default function Card({ item }) {
  return (
    <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card">
      <div className="thumbnail-container">
        <img
          className="card-image"
          src={item.snippet.thumbnails.medium.url}
          alt=""
        />
        <span className="video-duration">
          {time(item.contentDetails.duration)}
        </span>
      </div>
      <div className="card-text">
        <p className="card-title">{item.snippet.title}</p>
        <p className="channel-name">{item.snippet.channelTitle}</p>
        <div className="video-stats">
          <p className="views">{converter(item.statistics.viewCount)} Views</p>
          <p>&bull;</p>
          <p className="date">{moment(item.snippet.publishedAt).fromNow()} </p>
        </div>
      </div>
    </Link>
  );
}
