import React, { useEffect } from "react";
import Banner from "../components/Banner";
import Sidebar from "../components/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import "../assets/scss/pages/DataAccessPage.scss";
const DataAccessPage = () => {
  // const navigate = useNavigate()
  // useEffect(()=>{
  //   navigate("/dataaccess/weatherforcast")
  // },[])
  return (
    <>
      <Banner />
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
