import Sidebar from "../components/Sidebar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "../assets/scss/pages/DataAccessPage.scss";
import { useEffect, useState } from "react";
import getInitialTheme from "../utility/getInitialTheme";
const DataAccessPage = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState(getInitialTheme);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("storage", () => {
      setTheme(JSON.parse(localStorage.getItem("darkTheme")) || false);
    });
  }, []);
  useEffect(() => {
    if (location.pathname === "/data") {
      navigate("forecast");
    }
  }, [navigate, location]);
  return (
    <>
      <div className="data-page-container">
        <Sidebar />
        <div className={"outlet-container " + (theme ? "dark" : "light")}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DataAccessPage;
