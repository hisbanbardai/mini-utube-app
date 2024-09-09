import { Link } from "react-router-dom";
import "./Card.css";
import { converter, date } from "../../utility";
import moment from "moment";

export default function Card({ item }) {
  return (
    <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card">
      <img
        className="card-image"
        src={item.snippet.thumbnails.medium.url}
        alt=""
      />
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
