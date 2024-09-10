import { useRecoilValue } from "recoil";
import ActionButtons from "../ActionButtons/ActionButtons";
import "./VideoDetails.css";
import { videoDataAtom } from "../../atoms/videoDataAtom";
import { converter } from "../../utility";
import moment from "moment";

export default function VideoDetails() {
  const data = useRecoilValue(videoDataAtom);

  return (
    <div className="video-details">
      <h3 className="video-title">{data?.snippet.title}</h3>
      <div className="video-stats">
        <div className="wrapper-stats">
          <p className="views">
            {converter(data?.statistics.viewCount)} Views{" "}
          </p>
          <p>&bull;</p>
          <p className="date">{moment(data?.snippet.publishedAt).fromNow()}</p>
        </div>
        <ActionButtons />
      </div>
      <hr />
    </div>
  );
}
