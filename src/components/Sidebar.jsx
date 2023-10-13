import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/scss/components/Sidebar.scss";
import { useDispatch } from "react-redux";
import { resetState } from "../redux/slides/ClimateDataFormSlice";
import getInitialTheme from "../utility/getInitialTheme";
const Sidebar = () => {
  const [isExpand, setIsExpand] = useState(true);
  const [theme, setTheme] = useState(getInitialTheme);
  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener("storage", () => {
      setTheme(JSON.parse(localStorage.getItem("darkTheme")) || false);
    });
  }, []);
  const datalist = [
    {
      name: "Weather Forecast",
      path: "forecast",
      icon: "/assets/icon/cloudy.png",
    },
    {
      name: "Historical Weather",
      path: "historical",
      icon: "/assets/icon/history.png",
    },
    {
      name: "Air quality",
      path: "air-quality",
      icon: "/assets/icon/wind-sign.png",
    },
  ];
  return (
    <div
      className={`data-access-side-bar ${theme ? "dark" : "light"} ${
        isExpand ? "expanded" : ""
      }`}
    >
      {datalist.map((data, i) => {
        return (
          <NavLink
            to={"/data/" + data.path}
            key={i}
            className={({ isActive }) =>
              (isActive ? "link-active" : "link") +
              " " +
              (theme ? "dark" : "light")
            }
            onClick={() => dispatch(resetState())}
          >
            <img src={data.icon} />
            <p className={theme ? "dark" : "light"}>{data.name}</p>
          </NavLink>
        );
      })}
      <button
        className={`primary-btn ${theme ? "dark" : "light"} ${isExpand ? "expanded" : "collapse"}`}
        onClick={() => setIsExpand(!isExpand)}
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Sidebar;
