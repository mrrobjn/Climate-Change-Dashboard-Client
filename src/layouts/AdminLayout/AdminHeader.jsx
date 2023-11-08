import { useAuthState } from "react-firebase-hooks/auth";
import "../../assets/scss/layout/AdminHeader.scss";
import ThemeToggle from "../../components/ThemeToggle";
import { auth } from "../../config/firebase";
const AdminHeader = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="admin-header">
      <div className="left-nav">
        {/* <input type="text" placeholder="Type something" /> */}
      </div>
      <div className="right-nav">
        <ThemeToggle />
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
      </div>
    </div>
  );
};

export default AdminHeader;
