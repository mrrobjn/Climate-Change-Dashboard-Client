import { Link } from "react-router-dom";
import "../assets/scss/pages/ArticlesPage.scss";
import { useEffect, useState } from "react";
import getInitialTheme from "../utility/getInitialTheme";
const fakeData = [
  {
    img: "https://www.noaa.gov/sites/default/files/styles/landscape_width_1275/public/legacy/image/2019/Jun/iStock-477110708%20(1).jpg?itok=wCLnw6I9",
    title: "Climate change going to be very bad for the global economy 1",
    content:
      "1 Lorem ipsum dolor sit amet, uis nostrariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    date: "23 Oct 2020",
  },
  {
    img: "https://www.noaa.gov/sites/default/files/styles/landscape_width_1275/public/legacy/image/2019/Jun/iStock-477110708%20(1).jpg?itok=wCLnw6I9",
    title:
      "Climate change going to be very bad for the global economy dipiscing elit, sed do eiusmod tempor incididunt ut labore  dipiscing elit, sed do eiusmod tempor incididunt ut labore  2",
    content:
      "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    date: "23 Oct 2020",
  },
  {
    img: "https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2018/1-whytheweathe.jpg",
    title: "Climate change going to be very bad for the global economy 3",
    content:
      "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    date: "23 Oct 2020",
  },
  {
    img: "https://preachitteachit.org/wp-content/uploads/2019/07/climate-change.jpeg",
    title: "Climate change going to be very bad for the global economy 4",
    content:
      "4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    date: "23 Oct 2020",
  },
];
const ArticlesPage = () => {
  const [theme, setTheme] = useState(getInitialTheme);
  useEffect(() => {
    window.addEventListener("storage", () => {
      setTheme(JSON.parse(localStorage.getItem("darkTheme")) || false);
    });
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
        {fakeData.map((data, i) => {
          return (
            <div className="news-card" key={i}>
              <div className="img-container">
                <img src={data.img} alt="image-news" />
              </div>
              <div className="information">
                <div>
                  <Link className="title-news">{data.title}</Link>
                  <p className="content">{data.content}</p>
                </div>
                <div className="date">{data.date}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArticlesPage;
