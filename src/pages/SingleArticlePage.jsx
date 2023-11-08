import { useEffect, useState } from "react";
import { getArticleDetail, getSingleArticle } from "../api";
import { NavLink, useParams } from "react-router-dom";
import "../assets/scss/pages/SingleArticlePage.scss";
import { formatDate } from "../utility/formatDateTime";
import getInitialTheme from "../utility/getInitialTheme";
const SingleArticlePage = () => {
  const [article, setArticle] = useState({});
  const [detail, setDetail] = useState([]);
  const [theme, setTheme] = useState(getInitialTheme);
  const { article_id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      setArticle(await getSingleArticle(article_id));
      setDetail(await getArticleDetail(article_id));
    };
    fetchData();
  }, []);
  useEffect(() => {
    window.addEventListener("storage", () => {
      setTheme(JSON.parse(localStorage.getItem("darkTheme")) || false);
    });
  }, []);
  return (
    <div className={`single-article-container ${theme ? "dark" : "light"}`}>
      <div className="article-header">
        <div className="left">
          <div className="return-btn">
            <NavLink to={"/articles_list"}>
              <i className="fa-solid fa-angle-left"></i> Back to List
            </NavLink>
          </div>
          <h1>{article.title}</h1>
          <p className="desc">{article.desc}</p>
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
      <div className="article-content-container">
        {detail.map((d, i) => {
          return (
            <div className="chart-detail-item" key={i}>
              <h2>{"Topic " + (i + 1) + ": " + d.question}</h2>
              <p>Purpose: {d.rationale}</p>
              <div className="chart-img">
                <img src={d.chartURL} alt="" />
                <p className="img-desc">{d.visualization}</p>
              </div>
              <p>{d.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SingleArticlePage;
