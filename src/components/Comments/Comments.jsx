import Comment from "../Comment/Comment";
import "./Comments.css";

export default function Comments() {
  return (
    <div className="comments-container">
      <p className="comments-number">5K Comments</p>
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
