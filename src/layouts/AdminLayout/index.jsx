import React, { useEffect, useState } from "react";
import getInitialTheme from "../../utility/getInitialTheme";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

const AdminLayout = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);
  useEffect(() => {
    window.addEventListener("storage", () => {
      setTheme(JSON.parse(localStorage.getItem("darkTheme")) || false);
    });
  }, []);
  return (
    <div
      className="admin-container"
      style={{ display: "flex", height: "100vh", width: "100%" }}
    >
      <AdminSidebar />
      <div
        className={`content ${theme ? "dark" : "light"}`}
        style={{ flex: 1 }}
      >
        <AdminHeader /> {children}
      </div>
    </div>
  );
};

export default AdminLayout;
