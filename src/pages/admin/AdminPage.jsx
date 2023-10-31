import React from "react";
import { Outlet } from "react-router-dom";
import '../../assets/scss/pages/admin/AdminPage.scss'

const AdminPage = () => {
  return (
    <div className="admin-content">
      <Outlet />
    </div>
  );
};

export default AdminPage;
