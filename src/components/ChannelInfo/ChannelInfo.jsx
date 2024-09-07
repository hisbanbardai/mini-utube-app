import "./ChannelInfo.css";
import jack from "../../assets/jack.png";

export default function ChannelInfo() {
  return (
    <div className="channel-info-container">
      <div className="channel-info-header">
        <div className="channel-info-wrapper">
          <img className="channel-image" src={jack} alt="" />
          <div className="channel-text">
            <p className="channel-name">Netflix</p>
            <p className="channel-subscribers">20M Subscribers</p>
          </div>
        </div>
        <button className="subscribe-button">Subscribe</button>
      </div>
      <div className="video-description">
        Mr. McMahon chronicles the rise and fall of Vince McMahon, controversial
        businessman and co-founder of WWE. From his transformation of the WWE
        from a small, regional business into a global entertainment powerhouse
        to the explosive sexual misconduct a
      </div>
      <hr />
    </div>
  );
}
