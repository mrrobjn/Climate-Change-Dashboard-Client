import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/scss/components/Sidebar.scss";
const Sidebar = () => {
  const [isExpand, setIsExpand] = useState(true);
  const datalist = [
    {
      name: "Weather Forecast",
      path: "weatherforcast",
      icon: "/assets/icon/cloudy.png",
    },
    {
      name: "Historical Weather",
      path: "historicalweather",
      icon: "/assets/icon/history.png",
    },
    {
      name: "Air quality",
      path: "airquality",
      icon: "/assets/icon/wind-sign.png",
    },
  ];
  return (
    <div className={`data-access-side-bar light ${isExpand ? "expanded" : ""}`}>
      {datalist.map((data, i) => {
        return (
          <NavLink
            to={"/dataaccess/" + data.path}
            key={i}
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            <img src={data.icon} />
            <p>{data.name}</p>
          </NavLink>
        );
      })}
      <button className={`primary-btn light ${isExpand ? "expanded" : "collapse"}`} onClick={() => setIsExpand(!isExpand)}>
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Sidebar;
