import moment from "moment";

const ReplyItem = ({reply}) => {
  return (
    <div className="reply-item">
      <div className="reply-content">
        <div className="avatar-container">
          <img
            src="https://static.vecteezy.com/system/resources/previews/001/840/618/original/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg"
            alt=""
          />
        </div>
        <div className="detail-right">
          <div className="top-detail">
            <p className="user-name">{reply.user.name||reply.user.email}</p>
            <p className="comment-date">
              {moment(reply.date.toDate()).fromNow()}
            </p>
          </div>
          <p>{reply.text}</p>
        </div>
      </div>
      <div className="interact-bar">
        <button type="button">
          <i className="fa-regular fa-thumbs-up fa-lg"></i>
        </button>
        <button type="button">
          <i className="fa-regular fa-thumbs-down fa-lg"></i>
        </button>
        <button type="button">Reply</button>
        <button type="button">Report</button>
      </div>
    </div>
  );
};

export default ReplyItem;
