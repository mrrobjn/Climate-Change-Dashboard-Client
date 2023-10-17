import { useDispatch } from "react-redux";

const ChartSelect = () => {
  const dispatch = useDispatch();
  const data = [
    { class: "fa-solid fa-chart-line", value: "Line" },
    { class: "fa-solid fa-chart-column", value: "Bar" },
  ];
  const handleSelect = (value) => {};
  return (
    <div>
      <ul>
        {data.map((d, i) => {
          return (
            <li key={i} onClick={() => handleSelect(d.value)}>
              <i className={d.class}></i>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ChartSelect;
