import "../assets/scss/components/CheckBox.scss";
import { useDispatch } from "react-redux";
import {
  addDaily,
  addHourly,
  deleteDaily,
  deleteHourly,
} from "../redux/slides/ClimateDataFormSlice";
const CheckBox = ({ data, type }) => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    if (type === "hourly") {
      if (e.target.checked) {
        dispatch(addHourly(e.target.value));
      } else {
        dispatch(deleteHourly(e.target.value));
      }
    } else {
      if (e.target.checked) {
        dispatch(addDaily(e.target.value));
      } else {
        dispatch(deleteDaily(e.target.value));
      }
      
    }
  };

  return (
    <div className="check-box-container">
      {data.map((item, index) => (
        <div className="check-box-item" key={index}>
          <input
            type="checkbox"
            value={item.value}
            onChange={(e) => handleChange(e)}
            name={item.label}
          />
          <label>{item.label}</label>
        </div>
      ))}
    </div>
  );
};

export default CheckBox;
