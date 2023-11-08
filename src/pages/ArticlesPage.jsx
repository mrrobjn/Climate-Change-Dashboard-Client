import { Link } from "react-router-dom";
import "../assets/scss/pages/ArticlesPage.scss";
import { useEffect, useState } from "react";
import getInitialTheme from "../utility/getInitialTheme";
import { formatDate } from "../utility/formatDateTime";
import ReactPaginate from "react-paginate";
import axios from "../api/axios";

const ArticlesPage = () => {
  const [theme, setTheme] = useState(getInitialTheme);
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    window.addEventListener("storage", () => {
      setTheme(JSON.parse(localStorage.getItem("darkTheme")) || false);
    });
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/articles/get?limit=4&page=${page}`);
        setArticles(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [page]);
  const handlePageClick = (data) => {
    let selected = data.selected;
    setPage(selected + 1);
  };
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
      <div className={`paginate-container ${theme ? "dark" : null}`}>
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={10}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
};

export default ArticlesPage;
