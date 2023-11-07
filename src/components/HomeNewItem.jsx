import React from "react";
import '../assets/scss/components/HomeNewItem.scss'
import { Link } from "react-router-dom";
const HomeNewItem = (props) => {
  const {id}= props
  return (
    <Link className="feed" to={""}>
      <img
        className="feed-image"
        src="https://image2.slideserve.com/5236252/climate-graphs-l.jpg"
        alt=""
      />
      <div className="feed-information">
        <div className="date"> 14 SEPTEMBER , 2021</div>
        <div className="title">
          Climate change is affecting Vietnam Climate change is affecting
          Vietnam Climate change is affecting Vietnam
        </div>
      </div>
    </Link>
  );
};

export default HomeNewItem;
