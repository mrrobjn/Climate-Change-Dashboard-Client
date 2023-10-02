import Sidebar from "../components/Sidebar";
import { Outlet} from "react-router-dom";
import "../assets/scss/pages/DataAccessPage.scss";
const DataAccessPage = () => {
  
  return (
    <>
      <div className="data-page-container">
        <Sidebar />
        <div className="outlet-container">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DataAccessPage;
