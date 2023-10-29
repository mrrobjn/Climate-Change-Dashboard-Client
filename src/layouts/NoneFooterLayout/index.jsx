import React, { useEffect, useState } from "react";
import Header from "../DefaultLayout/Header/Header";
import getInitialTheme from "../../utility/getInitialTheme";

const NoneFooterLayout = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);
  useEffect(() => {
    window.addEventListener("storage", () => {
      setTheme(JSON.parse(localStorage.getItem("darkTheme")) || false);
    });
  }, []);
  return (
    <div>
      <Header />
      <div className="container">
        <div className={`content ${theme ? "dark" : "light"}`}>{children}</div>
      </div>
    </div>
  );
};

export default NoneFooterLayout;
