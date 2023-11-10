import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const AdminUsersPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/users") {
      navigate("list");
    }
  }, [navigate, location]);
  return (
    <>
      <Outlet />
    </>
  );
};

export default AdminUsersPage;
