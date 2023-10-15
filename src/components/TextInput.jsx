import { useDispatch } from "react-redux";
import "../assets/scss/components/TextInput.scss";
import { getLocation } from "../redux/slides/ClimateDataFormSlice";
import { getLocations } from "../api";
import { useEffect, useState } from "react";
import getInitialTheme from "../utility/getInitialTheme";
const TextInput = ({ placeholder, locations, setLocations }) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const [theme, setTheme] = useState(getInitialTheme);
  useEffect(() => {
    window.addEventListener("storage", () => {
      setTheme(JSON.parse(localStorage.getItem("darkTheme")) || false);
    });
  }, []);
  const handleChange = async (value) => {
    setInput(value);
    if (input === "") {
      setLocations([]);
    } else {
      setLocations(await getLocations(input));
    }
  };
  const handleClick = (index) => {
    const { name, latitude, longitude, country } = locations[index];
    dispatch(getLocation({ name, latitude, longitude, country }));
    setInput(locations[index].name + " - " + locations[index].country);
    setLocations([]);
  };
  return (
    <div className="search-location-input">
      <input
        className={`input-text ${theme ? "dark" : "light"}`}
        type="search"
        value={input}
        placeholder={placeholder}
        onChange={(e) => handleChange(e.target.value)}
      />
      <div className={`search-result ${theme ? "dark" : "light"}`}>
        {locations?.map((location, index) => {
          return (
            <p key={index} onClick={() => handleClick(index)}>
              {location.name + " - " + location.country}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default TextInput;
