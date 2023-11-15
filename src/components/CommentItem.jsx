import moment from "moment";
import ReplyItem from "./ReplyItem";
import { useState } from "react";

const CommentItem = ({ comment }) => {
  const [replyExpand, setReplyExpand] = useState(false);

  return (
    <div className="comment-item">
      <div className="comment-detail">
        <div className="avatar-container">
          <img
            src={
              comment.user.avatar ||
              "https://static.vecteezy.com/system/resources/previews/001/840/618/original/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg"
            }
            alt=""
          />
        </div>
        <div className="detail-right">
          <div className="top-detail">
            <p className="user-name">{comment.user.name}</p>
            <p className="comment-date">
              {moment(comment.date.toDate()).fromNow()}
            </p>
          </div>
          <p>{comment.text}</p>
        </div>
      </div>
      <div className="interact-bar">
        <button type="button">
          <i className="fa-regular fa-thumbs-up fa-lg"></i>
        </button>
        <button type="button">
          <i className="fa-regular fa-thumbs-down fa-lg"></i>
        </button>
        <button type="button" onClick={() => setReplyExpand(!replyExpand)}>
          Reply
        </button>
        <button type="button">Report</button>
      </div>
      {replyExpand && (
        <form className="reply-form" onSubmit={() => alert("ok")}>
          <input type="text" placeholder={`Reply ${comment.user.name}`} />
        </form>
      )}
      {comment.replies &&
        comment.replies.map((reply, replyIndex) => (
          <ReplyItem reply={reply} key={replyIndex} />
        ))}
      {/* <form>
        <input type="text" placeholder="Write a reply" required />
        <button type="submit">Reply</button>
      </form> */}
    </div>
  );
};

export default CommentItem;
