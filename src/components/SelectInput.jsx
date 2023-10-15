import { useEffect, useState } from 'react';
import '../assets/scss/components/SelectInput.scss'
import getInitialTheme from '../utility/getInitialTheme';
const SelectInput = ({ data, setValue }) => {
  const [theme, setTheme] = useState(getInitialTheme);
  useEffect(() => {
    window.addEventListener("storage", () => {
      setTheme(JSON.parse(localStorage.getItem("darkTheme")) || false);
    });
  }, []);
  return (
    <select className="select-input dark" name="" id="" onChange={(e) => setValue(e.target.value)}>
      {data.map((d, i) => {
        return (
          <option key={i} value={d.value}>
            {d.label}
          </option>
        );
      })}
    </select>
  );
};

export default SelectInput;
