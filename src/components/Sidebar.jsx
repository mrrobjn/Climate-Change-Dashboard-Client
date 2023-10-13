import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/scss/components/Sidebar.scss";
import { useDispatch } from "react-redux";
import { resetState } from "../redux/slides/ClimateDataFormSlice";
import getInitialTheme from "../utility/getInitialTheme";
const Sidebar = () => {
  const [isExpand, setIsExpand] = useState(true);
  const [theme, setTheme] = useState(getInitialTheme);
  const [initialTheme, setInitialTheme] = useState(getInitialTheme); // New state variable

  const dispatch = useDispatch();
  useEffect(() => {
    const currentTheme = getInitialTheme();
    setInitialTheme(currentTheme); // Update initialTheme state variable
    setTheme(currentTheme); // Update theme state variable
  }, [initialTheme]); 
  const datalist = [
    {
      name: "Weather Forecast",
      path: "weatherforecast",
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
    <div
      className={`data-access-side-bar ${theme ? "dark" : "light"} ${
        isExpand ? "expanded" : ""
      }`}
    >
      {datalist.map((data, i) => {
        return (
          <NavLink
            to={"/dataaccess/" + data.path}
            key={i}
            className={({ isActive }) => (isActive ? "link-active" : "link")}
            onClick={() => dispatch(resetState())}
          >
            <img src={data.icon} />
            <p>{data.name}</p>
          </NavLink>
        );
      })}
      <button
        className={`primary-btn light ${isExpand ? "expanded" : "collapse"}`}
        onClick={() => setIsExpand(!isExpand)}
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Sidebar;
