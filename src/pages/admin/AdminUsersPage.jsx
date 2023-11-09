import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AdminUsersPage = () => {
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

export default AdminUsersPage;
