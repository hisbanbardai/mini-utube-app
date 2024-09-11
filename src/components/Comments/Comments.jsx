import { useRecoilState, useRecoilValue } from "recoil";
import Comment from "../Comment/Comment";
import "./Comments.css";
import { videoDataAtom } from "../../atoms/videoDataAtom";
import { converter } from "../../utility";
import { commentsDataAtom } from "../../atoms/commentsDataAtom";
import { useEffect } from "react";
import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

export default function Comments({ videoId }) {
  const data = useRecoilValue(videoDataAtom);
  const [comments, setComments] = useRecoilState(commentsDataAtom);

  useEffect(() => {
    async function fetchComments() {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${apiKey}`
      );
      setComments(res.data.items);
    }
    fetchComments();
  }, [setComments, videoId]);

  return (
    <div className="comments-container">
      <p className="comments-number">
        {converter(data?.statistics.commentCount)} Comments
      </p>
      <div className="comments-section">
        {comments.length > 0 &&
          comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
      </div>
    </div>
  );
}
