import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/scss/components/Sidebar.scss";
const Sidebar = () => {
  const datalist = [
    {
      name: "Weather Forcast",
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
    <div className="data-access-side-bar">
      {datalist.map((data, i) => {
        return (
          <NavLink to={"/dataaccess/" + data.path} key={i}>
            <img src={data.icon} /> <p>{data.name}</p>{" "}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Sidebar;
