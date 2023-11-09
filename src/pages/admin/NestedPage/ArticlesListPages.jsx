import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../assets/scss/pages/admin/ArticlesListPage.scss";
import Select from "react-select";
import { convertISOToYYYYMMDD } from "../../../utility/convertISO";
import axios from "../../../api/axios";
import ReactPaginate from "react-paginate";
import ReactLoading from "react-loading";
import { toast } from "react-toastify";

const options = [
  { value: "Date descending", label: "Date descending" },
  { value: "Date ascending", label: "Date ascending" },
  { value: "View descending", label: "View descending" },
  { value: "View descending", label: "View descending" },
];

const ArticlesListPages = () => {
  const [articles, setArticles] = useState([]);
  const [sort, setSort] = useState(options[0]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`/articles/get?limit=10&page=${page}`);
        setArticles(res.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [page]);
  const handlePageClick = (data) => {
    let selected = data.selected;
    setPage(selected + 1);
  };
  const handleDeleteBtn = async (id) => {
    try {
      const res = await axios.delete(`/articles/delete`, { data: { _id: id } });
      toast.success(res.data.message)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="articles-list-container">
        <div className="control-container">
          <div className="left-control">
            <div style={{ width: 200 }}>
              <Select
                options={options}
                placeholder="Sort by"
                value={sort}
                onChange={(e) => setSort(e.value)}
              />
            </div>
            <input
              className="search-input"
              type="text"
              placeholder="Search for articles"
            />
          </div>
          <div className="right-control">
            <Link to={"/articles/create"} className="primary-btn">
              <i className="fa-solid fa-plus"></i>Create
            </Link>
          </div>
        </div>
        <div
          className={`articles-table-container ${isLoading ? "loading" : null}`}
        >
          {isLoading ? (
            <ReactLoading type="bars" color="#f2f2f2" />
          ) : (
            <table>
              <thead>
                <tr>
                  <th>title</th>
                  <th>date created</th>
                  <th>view</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                {articles.length > 0 &&
                  articles.map((article, i) => {
                    return (
                      <tr key={i}>
                        <td>{article.title}</td>
                        <td>{convertISOToYYYYMMDD(article.createdAt)}</td>
                        <td>{article.view}</td>
                        <td>
                          <button className="edit-btn" type="button">
                            <i className="fa-solid fa-pen-to-square"></i>
                          </button>{" "}
                          <button
                            className="delete-btn"
                            type="button"
                            onClick={() => handleDeleteBtn(article._id)}
                          >
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          )}
        </div>
        <div className="paginate-container">
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
    </>
  );
};

export default ArticlesListPages;
