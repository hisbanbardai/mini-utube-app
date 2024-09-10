import { useRecoilValue } from "recoil";
import Comment from "../Comment/Comment";
import "./Comments.css";
import { videoDataAtom } from "../../atoms/videoDataAtom";
import { converter } from "../../utility";

export default function Comments() {
  const data = useRecoilValue(videoDataAtom);

  return (
    <div className="comments-container">
      <p className="comments-number">
        {converter(data?.statistics.commentCount)} Comments
      </p>
      <div className="comments-section">
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  );
}
