import { Link } from "react-router-dom";
import "../assets/scss/pages/ArticlesPage.scss";
import { useEffect, useState } from "react";
import getInitialTheme from "../utility/getInitialTheme";
import { formatDate } from "../utility/formatDateTime";
const Register = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    window.addEventListener("storage", () => {
      setTheme(JSON.parse(localStorage.getItem("darkTheme")) || false);
    });

  }, []);
  return (
    <div className={`container-register ${theme ? "dark" : "light"}`}>
      Register
    </div>
  );
};

export default Register;
