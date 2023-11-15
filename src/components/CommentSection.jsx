import React, { useEffect, useState } from "react";
import "../assets/scss/components/CommentSection.scss";
import { useParams } from "react-router-dom";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../config/firebase";
import moment from "moment";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const q = query(
        collection(db, "comments"),
        where("article_id", "==", article_id)
      );
      onSnapshot(q, async (querySnapshot) => {
        const commentsData = await Promise.all(
          querySnapshot.docs.map(async (doc) => {
            const commentData = doc.data();
            commentData.user = (await getUser(commentData.user_id)).data();
            commentData.replies = await getReplies(doc.id);
            if (commentData.replies) {
              await Promise.all(commentData.replies.map(async (reply) => {
                reply.user = (await getUser(reply.user_id)).data();
              }));
            }
            return commentData;
          })
        );
        setComments(commentsData);
      });
    };
    fetchData();
  }, []);


  const getUser = async (id) => {
    const userRef = doc(db, "users", id);
    const docSnap = await getDoc(userRef);
    return docSnap;
  };

  const getReplies = async (comment_id, user_id) => {
    const q = query(
      collection(db, "replies"),
      where("comment_id", "==", comment_id)
    );
    const querySnapshot = await getDocs(q);
    const repliesData = querySnapshot.docs.map((doc) => doc.data());
    return repliesData;
  };

  return (
    <div className="comment-section">
      <h3>{comments.length} Comments</h3>
      <form>
        <div className="add-comment-field">
          <div className="avatar-container">
            <img
              src="https://static.vecteezy.com/system/resources/previews/001/840/618/original/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg"
              alt=""
            />
          </div>
          <input type="text" placeholder="Add a comment" required />
          <div className="btn-container">
            <button type="submit">Comment</button>
          </div>
        </div>
      </form>
      <div className="comments-container">
        {comments.length > 0 &&
          comments.map((comment, index) => (
            <div key={index} className="comment-item">
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
                <button type="button">Reply</button>
                <button type="button">Report</button>
              </div>
              {comment.replies &&
                comment.replies.map((reply, replyIndex) => (
                  <div className="reply-item" key={replyIndex}>
                    <div className="reply-content">
                      <div className="avatar-container">
                        <img
                          src="https://static.vecteezy.com/system/resources/previews/001/840/618/original/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg"
                          alt=""
                        />
                      </div>
                      <div className="detail-right">
                        <div className="top-detail">
                          <p className="user-name">{reply.user.name}</p>
                          <p className="comment-date">{moment(reply.date.toDate()).fromNow()}</p>
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
                ))}
              <form>
                <input type="text" placeholder="Write a reply" required />
                <button type="submit">Reply</button>
              </form>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CommentSection;
