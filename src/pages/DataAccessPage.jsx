import React from "react";
import Banner from "../components/Banner";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const DataAccessPage = () => {
  return (
    <>
      <Banner />
      <div className="data-page-container">
        <Sidebar/>
        <Outlet/>
      </div>
    </>
  );
};

export default DataAccessPage;
