import "../assets/scss/pages/ArticlesPage.scss";
const fakeData = [
  {
    img: "https://1.bp.blogspot.com/-4ulYHLowiCQ/V8Vo9Sp7MgI/AAAAAAAA4NQ/o9XEgGOsb0whCVg-TnmrPaSnGEf-hzUAwCLcB/s1600/Temperature.gif",
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
const renderNews = () => {
  let xhtml = [];
  for (let data of fakeData) {
    xhtml.push(
      <div className="news-card">
        <img className="feed-image" src={data.img} alt="image-news" />
        <div className="information">
          <div className="title-news">{data.title}</div>
          <div className="content">{data.content}</div>
          <div className="date">{data.date}</div>
        </div>
      </div>
    );
  }
  return xhtml;
};
const ArticlesPage = () => {
  return (
    <div className="container-news">
      <div className="heading">
        <div className="title">News</div>
        <div className="input-search">
          <input
            type="text"
            className="input-type"
            placeholder="Search"
          ></input>
          <svg
            className="search-icon"
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="block-news">{renderNews()}</div>
    </div>
  );
};

export default ArticlesPage;
