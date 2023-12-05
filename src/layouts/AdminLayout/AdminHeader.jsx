import { useAuthState } from "react-firebase-hooks/auth";
import "../../assets/scss/layout/AdminHeader.scss";
import ThemeToggle from "../../components/ThemeToggle";
import { auth } from "../../config/firebase";
import { logout } from "../../auth/firebase";
import { Link } from "react-router-dom";

const urls = [{ label: "Home", path: "/" }];

const AdminHeader = () => {
  const [user] = useAuthState(auth);

  const handleLogOut = async () => {
    try {
      logout();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="admin-header">
      <div className="left-nav"></div>
      <div className="right-nav">
        <ThemeToggle />
        <div className="drop-down">
          <div className="user-avatar">
            <img
              src={
                user && user.photoURL !== null
                  ? user.photoURL
                  : "https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg"
              }
              alt=""
            />
          </div>
          <div className="dropdown-content">
            {urls.map((url, i) => {
              return (
                <Link className="dropdown-btn" to={url.path} key={i}>
                  {url.label}
                </Link>
              );
            })}
            <div className="dropdown-btn" onClick={handleLogOut}>
              Log out
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
