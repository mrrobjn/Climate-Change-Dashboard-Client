import React, { useEffect, useState } from "react";
import getInitialTheme from "../../utility/getInitialTheme";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
import "../../assets/scss/pages/admin/AdminPage.scss";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";
import { toast } from "react-toastify";

const AdminLayout = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);
  const [user, loading] = useAuthState(auth);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener("storage", () => {
      setTheme(JSON.parse(localStorage.getItem("darkTheme")) || false);
    });
  }, []);
  useEffect(() => {
    const fetchUser = async () => {
      if (!loading) {
        if (user) {
          setIsLoading(true);
          const q = query(
            collection(db, "users"),
            where("uid", "==", user?.uid)
          );
          const querySnapshot = await getDocs(q);
          if (!querySnapshot.empty) {
            const docData = querySnapshot.docs[0].data();
            if (docData.role !== "admin") {
              navigate("/");
            }
          } else {
            toast.error("No user found");
            navigate("/");
          }
          setIsLoading(false);
        } else {
          navigate("/login");
        }
      }
    };
    fetchUser();
  }, [user, loading]);

  if (isLoading) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ReactLoading type="spin" color="#ccc" width={100} />
      </div>
    );
  } else {
    return (
      <div
        className="admin-container"
        style={{ height: "100vh", display: "flex" }}
      >
        <AdminSidebar />
        <div
          className={`content ${theme ? "dark" : "light"}`}
          style={{ height: "100vh", overflowY: "auto", flex: 1 }}
        >
          <AdminHeader />
          <div className="admin-content" style={{ display: "flex" }}>
            {children}
          </div>
        </div>
      </div>
    );
  }
};

export default AdminLayout;
