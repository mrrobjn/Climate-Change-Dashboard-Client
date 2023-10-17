import { useDispatch, useSelector } from "react-redux";
import "../assets/scss/components/ChartSelect.scss";
import { climateDataForm } from "../redux/selector";
import { changeType } from "../redux/slides/ClimateDataFormSlice";
import getInitialTheme from "../utility/getInitialTheme";
import { useEffect, useState } from "react";
const data = [
  { class: "fa-solid fa-chart-line", value: "Line" },
  { class: "fa-solid fa-chart-column", value: "Bar" },
];
const ChartSelect = () => {
  const dispatch = useDispatch();
  const chartType = useSelector(climateDataForm).chartType;
  const [theme, setTheme] = useState(getInitialTheme);
  useEffect(() => {
    window.addEventListener("storage", () => {
      setTheme(JSON.parse(localStorage.getItem("darkTheme")) || false);
    });
  }, []);

  const handleSelect = (value) => {
    dispatch(changeType(value));
  };
  return (
    <div className={`chart-select-container ${theme ? "dark" : "light"}`}>
      <ul>
        {data.map((d, i) => {
          return (
            <li
              className={`${chartType === d.value && "active"}`}
              key={i}
              onClick={() => handleSelect(d.value)}
            >
              <i className={d.class}></i>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ChartSelect;
