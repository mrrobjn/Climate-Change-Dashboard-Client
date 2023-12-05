import React, { useEffect, useState } from "react";
import "../assets/scss/components/CommentSection.scss";
import { useParams } from "react-router-dom";
import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
  orderBy,
} from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import CommentItem from "./CommentItem";
import { toast } from "react-toastify";

const CommentSection = ({authorId}) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const { article_id } = useParams();
  const [user] = useAuthState(auth);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const q = query(
      collection(db, "comments"),
      where("article_id", "==", article_id),
      orderBy("date", "desc")
    );
    const querySnapshot = await getDocs(q);
    const commentsData = await Promise.all(
      querySnapshot.docs.map(async (doc) => {
        const commentData = doc.data();
        commentData.comment_id = doc.id;
        commentData.user = (await getUser(commentData.user_uid)).data();
        commentData.replies = await getReplies(doc.id);
        if (commentData.replies) {
          await Promise.all(
            commentData.replies.map(async (reply) => {
              reply.user = (await getUser(reply.user_uid)).data();
            })
          );
        }
        return commentData;
      })
    );
    setComments(commentsData);
  };

  const getUser = async (uid) => {
    const userQuery = query(collection(db, "users"), where("uid", "==", uid));
    const userSnapshot = await getDocs(userQuery);
    if (!userSnapshot.empty) {
      return userSnapshot.docs[0];
    } else {
      return null;
    }
  };

  const getReplies = async (comment_id) => {
    const q = query(
      collection(db, "replies"),
      where("comment_id", "==", comment_id),
      orderBy("date", "desc")
    );
    const querySnapshot = await getDocs(q);
    const repliesData = querySnapshot.docs.map((doc) => doc.data());
    return repliesData;
  };

  const handleAddComment = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    if (user) {
      await addDoc(collection(db, "comments"), {
        article_id,
        date: serverTimestamp(),
        user_uid: user.uid,
        text: comment,
      });
      fetchData();
      setComment("");
    } else {
      toast.error("Please log in!");
    }
    setIsLoading(false);
  };
  
  return (
    <div className="comment-section">
      <h3>{comments.length} Comments</h3>
      <form onSubmit={handleAddComment}>
        <div className="add-comment-field">
          <div className="avatar-container">
            <img
              src="https://static.vecteezy.com/system/resources/previews/001/840/618/original/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg"
              alt=""
            />
          </div>
          <input
            type="text"
            placeholder="Add a comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            disabled={isLoading}
          />
          <div className="btn-container">
            <button type="submit" disabled={isLoading}>
              Comment
            </button>
          </div>
        </div>
      </form>
      <div className="comments-container">
        {comments.length > 0 &&
          comments.map((comment, index) => (
            <CommentItem authorId={authorId} comment={comment} key={index} fetchData={fetchData}/>
          ))}
      </div>
    </div>
  );
};

export default CommentSection;
