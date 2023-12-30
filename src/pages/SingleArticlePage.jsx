import { useEffect, useState } from "react";
import { getArticleDetail, getSingleArticle } from "../api";
import { NavLink, useParams } from "react-router-dom";
import "../assets/scss/pages/SingleArticlePage.scss";
import { formatDate } from "../utility/formatDateTime";
import getInitialTheme from "../utility/getInitialTheme";
import CommentSection from "../components/CommentSection";
import RelatedArticles from "../components/RelatedArticles";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebase";
const SingleArticlePage = () => {
  const [article, setArticle] = useState({});
  const [detail, setDetail] = useState([]);
  const [theme, setTheme] = useState(getInitialTheme);
  const [authorName, setAuthorName] = useState(null);
  const { article_id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setArticle(await getSingleArticle(article_id));
      setDetail(await getArticleDetail(article_id));
      if (article.author_id) await getAuthor();
    };

    const getAuthor = async () => {
      const q = query(
        collection(db, "users"),
        where("uid", "==", article.author_id)
      );
      const querySnapshot = await getDocs(q);
      let author;
      querySnapshot.forEach((doc) => {
        author = doc.data().name || doc.data().email;
      });
      setAuthorName(author);
    };

    fetchData();
  }, [article.author_id]);

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
              <i className="fa-regular fa-eye"></i> {article.view}
            </p>
          </div>
          <p>By: {authorName}</p>
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
      <RelatedArticles />
      <CommentSection authorId={article.author_id} />
    </div>
  );
};

export default SingleArticlePage;
