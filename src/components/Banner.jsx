import React from "react";
import "../assets/scss/components/Banner.scss";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="banner-container">
          <h1>
            CLIMATE CHANGE
            <br />
            DASHBOARD
          </h1>
          <p>
            "CCD" is a website to provide users with an easy way to understand
            and view the impacts of climate change. By providing clear and
            understandable information, the dashboard can help users understand
            the impacts of climate change.
          </p>
          <Link to="/">About Us</Link>
        </div>
      </div>
      <div className="access-section">
        <h1>View specific data</h1>
        <Link to="data">Data Access</Link>
      </div>
    </>
  );
};

export default Banner;
