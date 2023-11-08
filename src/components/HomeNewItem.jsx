import React from "react";
import "../assets/scss/components/HomeNewItem.scss";
import { Link } from "react-router-dom";
import { formatDate } from "../utility/formatDateTime";
const HomeNewItem = ({ d }) => {
  return (
    <Link className="feed" to={`articles_list/${d._id}`}>
      <img className="feed-image" src={d.img_url} alt="" />
      <div className="feed-information">
        <div className="date">{formatDate(d.createAt)}</div>
        <div className="title">{d.title}</div>
      </div>
    </Link>
  );
};

export default HomeNewItem;
