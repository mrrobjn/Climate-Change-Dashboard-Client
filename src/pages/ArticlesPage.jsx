import { Link } from "react-router-dom";
import "../assets/scss/pages/ArticlesPage.scss";
import { useEffect, useState } from "react";
import getInitialTheme from "../utility/getInitialTheme";
import { formatDate } from "../utility/formatDateTime";
import ReactPaginate from "react-paginate";
import axios from "../api/axios";
import Select from "react-select";

const options = [
  {
    value: "Date descending",
    label: "Date descending",
    field: "createdAt",
    order: "desc",
  },
  {
    value: "Date ascending",
    label: "Date ascending",
    field: "createdAt",
    order: "asc",
  },
  {
    value: "View descending",
    label: "View descending",
    field: "view",
    order: "desc",
  },
  {
    value: "View ascending",
    label: "View ascending",
    field: "view",
    order: "asc",
  },
];

const ArticlesPage = () => {
  const [theme, setTheme] = useState(getInitialTheme);
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState(options[0]);
  const [search, setSearch] = useState("");
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    window.addEventListener("storage", () => {
      setTheme(JSON.parse(localStorage.getItem("darkTheme")) || false);
    });
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `/articles/get?limit=4&page=${page}&field=${sort.field}&order=${sort.order}&search=${search}`
        );
        setArticles(res.data.articles);
        setPageCount(res.data.totalPages);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [page, sort, search]);
  const handlePageClick = (data) => {
    let selected = data.selected;
    setPage(selected + 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleIncreaseView = async (_id) => {
    try {
      const data={_id}
      const res = await axios.post(`articles/increase_view`, data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={`container-news ${theme ? "dark" : "light"}`}>
      <div className="heading">
        <div className="sort-bar">
          <Select
            options={options}
            placeholder="Sort by"
            value={sort}
            onChange={(e) => setSort(e)}
            className="select"
          />{" "}
        </div>
        <div className="search-bar">
          <input
            type="text"
            className="input-type"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          ></input>
          <div className="search-icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
      <div className="block-news">
        {articles?.map((article, i) => {
          return (
            <div className="news-card" key={i}>
              <Link
                onClick={() => handleIncreaseView(article._id)}
                to={`/articles_list/` + article._id}
              >
                <div className="img-container">
                  <img src={article.img_url} alt="image-news" />
                </div>
              </Link>
              <div className="information">
                <div>
                  <Link
                    onClick={() => handleIncreaseView(article._id)}
                    className="title-news"
                  >
                    {article.title}
                  </Link>
                  <p className="content">{article.desc || ""}</p>
                </div>
                <div className="date">
                  <p>{article.view} views</p>
                  <br />
                  {formatDate(article.date_created)}
                </div>
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
          pageCount={pageCount}
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
