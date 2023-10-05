import "../assets/scss/components/CheckBox.scss";
import { useDispatch } from "react-redux";
import { addHourly, deleteHourly } from "../redux/slides/ClimateDataFormSlice";
const CheckBox = ({ data }) => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    if (e.target.checked) {
      dispatch(addHourly(e.target.value))
    } else {
      dispatch(deleteHourly(e.target.value))
    }
  };

  return (
    <div className="check-box-container">
      {data.map((item, index) => (
        <div className="check-box-item" key={index}>
          <input
            type="checkbox"
            id={item.value}
            name={item.value}
            value={item.value}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor={item.value}>{item.label}</label>
        </div>
      ))}
    </div>
  );
};

export default CheckBox;
