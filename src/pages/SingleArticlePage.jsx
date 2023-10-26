import { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import { getArticleDetail, getSingleArticle } from "../api";
import { useParams } from "react-router-dom";
import "../assets/scss/pages/SingleArticlePage.scss";
import { formatDate } from "../utility/formatDateTime";
const SingleArticlePage = () => {
  const [article, setArticle] = useState({});
  const [detail, setDetail] = useState([]);
  const { article_id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      setArticle(await getSingleArticle(article_id));
      setDetail(await getArticleDetail(article_id));
    };
    fetchData();
  }, []);
  return (
    <div className="single-article-container">
      <div className="article-header">
        <div className="left">
          <h1>{article.title}</h1>
          <div className="side-info">
            <p>{formatDate(article.date_created)}</p>
            <p>
              <i className="fa-regular fa-eye"></i> {article.views}
            </p>
          </div>
        </div>
        <div className="article-bg">
          <img src={article.img_url} alt="" />
        </div>
      </div>
      <p>{article.description}</p>
      <div className="article-content-container"></div>
    </div>
  );
};

export default SingleArticlePage;
