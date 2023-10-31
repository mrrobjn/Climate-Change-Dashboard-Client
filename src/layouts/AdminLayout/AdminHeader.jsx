import { DarkModeToggle } from "react-dark-mode-toggle-2";
import "../../assets/scss/layout/AdminHeader.scss";
import { useState } from "react";
const AdminHeader = () => {
  const [theme, setTheme] = useState(false);
  return (
    <div className="admin-header">
      <div className="logo"></div>
      <div className="right-nav">
        <DarkModeToggle
          size={50}
          onChange={(e) => setTheme(!theme)}
          isDarkMode={theme}
        />
        <div className="user-avatar">
          <img src="https://static.primorske.si/foto/highres/GnWeb/CRISTIANO-1.jpg" alt=""/>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
