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
    <div className="admin-container" style={{ height: "100vh",display:"flex" }}>
      <AdminSidebar />
      <div
        className={`content ${theme ? "dark" : "light"}`}
        style={{ height: "100vh",overflowY:"scroll",flex:1 }}
      >
        <AdminHeader />
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;