import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import Slider from "react-slick";
import "../assets/scss/components/RelatedArticles.scss";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa-solid fa-arrow-left"></i>
      </button>
    </div>
  );
};
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  lazyLoad: true,
  //   autoplay: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const RelatedArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/articles/get?limit=10`);
        setArticles(res.data.articles);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {/* <div className="related-articles-container">
          <Slider {...settings}>
            {articles.map((article, i) => {
              return (
                <div className="related-item" key={i}>
                  {article.title}
                </div>
              );
            })}
          </Slider>
        </div> */}
    </>
  );
};

export default RelatedArticles;
