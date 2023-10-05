import { useDispatch } from "react-redux";
import "../assets/scss/components/TextInput.scss";
import { getLocation } from "../redux/slides/ClimateDataFormSlice";
import { getLocations } from "../api";
const TextInput = ({ placeholder, locations, setLocations }) => {
  const dispatch = useDispatch();
  const handleChange = async (value) => {
    if (value === "") {
      setLocations([]);
    } else {
      setLocations(await getLocations(value));
    }
  };
  const handleClick = (index) => {
    const { name, latitude, longitude, country } = locations[index];
    dispatch(getLocation({ name, latitude, longitude, country }));
    setLocations([]);
  };
  return (
    <div className="search-location-input">
      <input
        className="input-text"
        type="search"
        placeholder={placeholder}
        onChange={(e) => handleChange(e.target.value)}
      />
      <div className="search-result">
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
