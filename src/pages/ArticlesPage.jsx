import { Link } from "react-router-dom";
import "../assets/scss/pages/ArticlesPage.scss";
import { useEffect, useState } from "react";
import getInitialTheme from "../utility/getInitialTheme";
import { getArticles } from "../api";
import { formatDate } from "../utility/formatDateTime";
const ArticlesPage = () => {
  const [theme, setTheme] = useState(getInitialTheme);
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    window.addEventListener("storage", () => {
      setTheme(JSON.parse(localStorage.getItem("darkTheme")) || false);
    });
    const fetchData = async () => {
      setArticles(await getArticles());
    };
    fetchData();
  }, []);
  return (
    <div className={`container-news ${theme ? "dark" : "light"}`}>
      <div className="heading">
        <div className="search-bar">
          <input type="s" className="input-type" placeholder="Search"></input>
          <button type="button">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
      <div className="block-news">
        {articles?.map((article, i) => {
          return (
            <div className="news-card" key={i}>
              <Link to={`/articles_list/` + article._id}>
                <div className="img-container">
                  <img src={article.img_url} alt="image-news" />
                </div>
              </Link>
              <div className="information">
                <div>
                  <Link className="title-news">{article.title}</Link>
                  <p className="content">{article.desc || ""}</p>
                </div>
                <div className="date">{formatDate(article.date_created)}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArticlesPage;
