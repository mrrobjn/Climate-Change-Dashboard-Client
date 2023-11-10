import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const AdminArticles = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/articles") {
      navigate("list");
    }
  }, [navigate, location]);
  return (
    <>
      <Outlet />
    </>
  );
};

export default AdminArticles;
