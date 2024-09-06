import "./Card.css";

export default function Card({ image }) {
  return (
    <div className="card">
      <img className="card-image" src={image} alt="" />
      <div className="card-text">
        <p className="card-title">
          Best channel to learn coding that helps you to be a web developer
        </p>
        <p className="channel-name">Greatstack</p>
        <div className="video-stats">
          <p className="views">15M Views </p>
          <p>&bull;</p>
          <p className="date">a day ago</p>
        </div>
      </div>
    </div>
  );
}
