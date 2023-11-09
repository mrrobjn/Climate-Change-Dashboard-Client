import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AdminArticles = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("list");
  }, []);
  return (
    <>
      <Outlet />
    </>
  );
};

export default AdminArticles;
