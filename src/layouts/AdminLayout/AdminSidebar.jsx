import { NavLink } from "react-router-dom";
import "../../assets/scss/layout/AdminSidebar.scss";

const paths = [
  {
    url: "users",
    icon: "fa-regular fa-user",
  },
  {
    url: "create_article",
    icon: "fa-regular fa-newspaper",
  },
];

const AdminSidebar = () => {
  return (
    <div className="admin-side-bar">
      <div className="logo-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="63"
              height="43"
              viewBox="0 0 63 43"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.9946 20.7863V0.0403442H0.0426045C0.029604 0.280276 0.0106049 0.457702 0.0106049 0.634123C0.0106049 7.54272 -0.0203953 14.4513 0.0236053 21.3589C0.0401173 25.4931 1.30111 29.5245 3.63977 32.9202C4.3876 34.0289 5.2926 35.0249 6.1916 36.155L21.0366 21.1946"
                fill="#1BBAFD"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.9586 21.1956V42.1643C23.3589 42.2321 25.7496 41.8309 27.9986 40.9828C36.2682 38.0234 41.8185 30.1656 41.8876 21.3196C41.9566 14.4372 41.9086 7.5548 41.9106 0.672411C41.9106 0.504056 41.8896 0.334694 41.8686 0L20.9536 21.0433"
                fill="#FACA4A"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M41.8346 21.1956V42.1643C44.2349 42.2321 46.6256 41.8309 48.8746 40.9828C57.1438 38.0231 62.6936 30.1654 62.7626 21.3196C62.8316 14.4372 62.7836 7.5548 62.7856 0.672411C62.7856 0.504056 62.7646 0.334694 62.7436 0L41.8286 21.0433"
                fill="#F47690"
              />
            </svg>
          </div>
      {paths.map((path, i) => {
        return (
          <NavLink
            to={path.url}
            key={i}
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            <i className={path.icon}/>
          </NavLink>
        );
      })}
    </div>
  );
};

export default AdminSidebar;
