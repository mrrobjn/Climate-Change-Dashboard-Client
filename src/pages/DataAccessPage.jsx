import Sidebar from "../components/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import "../assets/scss/pages/DataAccessPage.scss";
import { useEffect } from "react";
const DataAccessPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/dataaccess/weatherforecast");
  }, []);
  return (
    <>
      <div className="data-page-container">
        <Sidebar />
        <div className="outlet-container">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DataAccessPage;
