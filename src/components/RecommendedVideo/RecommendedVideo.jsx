import "./RecommendedVideo.css";

export default function RecommendedVideo({ image }) {
  return (
    <div className="recommended-video">
      <img className="recommended-video-image" src={image} alt="" />
      <div className="recommended-video-text">
        <p className="recommended-video-title">
          This Japanese game looks like so much fun! (@gurukafa on IG) #shorts
          #japan
        </p>
        <div className="recommended-video-info">
          <p className="recommended-video-channel-name">JapanKlips</p>
          <p className="recommended-video-video-views">36M Views</p>
        </div>
      </div>
    </div>
  );
}
