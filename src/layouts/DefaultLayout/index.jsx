import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import getInitialTheme from "../../utility/getInitialTheme";

const DefaultLayout = ({ children }) => {
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
      <Footer />
    </div>
  );
};

export default DefaultLayout;
