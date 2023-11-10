import React, { useState } from "react";
import "../assets/scss/components/CommentSection.scss";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [reply, setReply] = useState({});

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    setComments([...comments, { text: newComment, replies: [] }]);
    setNewComment("");
  };

  const handleReplyChange = (event, index) => {
    setReply({ ...reply, [index]: event.target.value });
  };

  const handleReplySubmit = (event, index) => {
    event.preventDefault();
    const newComments = [...comments];
    newComments[index].replies.push(reply[index]);
    setComments(newComments);
    setReply({ ...reply, [index]: "" });
  };

  return (
    <div className="comment-section">
      <h3>{comments.length} Comments</h3>
      <form onSubmit={handleCommentSubmit}>
        <div className="add-comment-field">
          <div className="avatar-container">
            <img
              src="https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg"
              alt=""
            />
          </div>
          <input
            type="text"
            value={newComment}
            onChange={handleCommentChange}
            placeholder="Add a comment"
            required
          />
          <div className="btn-container">
            <button type="submit">Comment</button>
          </div>
        </div>
      </form>
      <div className="comments-container">
        {comments.map((comment, index) => (
          <div key={index} className="comment-item">
            <div className="comment-detail">
              <div className="avatar-container">
                <img
                  src="https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg"
                  alt=""
                />
              </div>
              <div className="detail-right">
                <p>Nhac si mong mo</p>
                <p>{comment.text}</p>
              </div>{" "}
            </div>
            {comment.replies.map((reply, replyIndex) => (
              <p key={replyIndex} style={{ marginLeft: "20px" }}>
                {reply}
              </p>
            ))}
            <form onSubmit={(event) => handleReplySubmit(event, index)}>
              <input
                type="text"
                value={reply[index] || ""}
                onChange={(event) => handleReplyChange(event, index)}
                placeholder="Write a reply"
              />
              <button type="submit">Reply</button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
