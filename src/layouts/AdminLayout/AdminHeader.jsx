import "../../assets/scss/layout/AdminHeader.scss";
import ThemeToggle from "../../components/ThemeToggle";
const AdminHeader = () => {
  return (
    <div className="admin-header">
      <div className="left-nav">
        <input type="text" />
      </div>
      <div className="right-nav">
        <ThemeToggle />
        <div className="user-avatar">
          <img
            src="https://th.bing.com/th/id/OIP.LtawM41T1wQdDmNquDaAVgHaEK?w=307&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
