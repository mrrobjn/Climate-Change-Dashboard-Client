import React, { useEffect, useState } from "react";
import "../assets/scss/components/HeadLine.scss";
import getInitialTheme from "../utility/getInitialTheme";
const HeadLine = ({ text }) => {
  const [theme, setTheme] = useState(getInitialTheme);
  useEffect(() => {
    window.addEventListener("storage", () => {
      setTheme(JSON.parse(localStorage.getItem("darkTheme")) || false);
    });
  }, []);
  return <h2 className={`${theme ? "dark" : "light"}`}>{text}</h2>;
};

export default HeadLine;
