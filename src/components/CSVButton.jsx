import { CSVLink } from "react-csv";
import "../assets/scss/components/Button.scss";
import { useEffect, useState } from "react";
import getInitialTheme from "../utility/getInitialTheme";
const CSVButton = ({ url }) => {
  const [theme, setTheme] = useState(getInitialTheme);
  const [data, setData] = useState([]);
  useEffect(() => {
    window.addEventListener("storage", () => {
      setTheme(JSON.parse(localStorage.getItem("darkTheme")) || false);
    });
  }, []);

  const formatData = (data) => {
    let arr = [];
    let keys = Object.keys(data);
    let length = data[keys[0]]?.length;
    for (let i = 0; i < length; i++) {
      let newObj = {};
      for (let key of keys) {
        newObj[key] = data[key][i];
      }
      arr.push(newObj);
    }
    return arr;
  };
  return (
    <CSVLink
      className={`primary-btn ${theme ? "dark" : "light"}`}
      data={formatData(data)}
      filename="archive"
    >
      Download CSV
    </CSVLink>
  );
};

export default CSVButton;
