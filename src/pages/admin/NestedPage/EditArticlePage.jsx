import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "../../../api/axios";
import { useState } from "react";

const EditArticlePage = () => {
  const [article, setArticle] = useState({});
  const [detail, setDetail] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`articles/find?id=${article_id}`);
        setArticle(res.data);
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchData();
  }, []);

  return <div className="edit-article-container">{article._id && <>
  
  </>}</div>;
};

export default EditArticlePage;
