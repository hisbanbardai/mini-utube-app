import ActionButtons from "../ActionButtons/ActionButtons";
import ChannelInfo from "../ChannelInfo/ChannelInfo";
import "./VideoDetails.css";

export default function VideoDetails() {
  return (
    <div className="video-details">
      <h3 className="video-title">Mr. McMahon | Official Trailer | Netflix</h3>
      <div className="video-stats">
        <div className="wrapper-stats">
          <p className="views">15M Views </p>
          <p>&bull;</p>
          <p className="date">a day ago</p>
        </div>
        <ActionButtons />
      </div>
      <hr />
    </div>
  );
}
