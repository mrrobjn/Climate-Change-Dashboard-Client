import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { useEffect, useState } from "react";
import "../assets/scss/components/TimeRangePicker.scss";
import { useDispatch } from "react-redux";
import { addEndDate, addStartDate } from "../redux/slides/ClimateDataFormSlice";
import { convertISOToYYYYMMDD } from "../utility/convertISO";
import getInitialTheme from "../utility/getInitialTheme";
const TimeRangePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const dispatch = useDispatch();
  const [theme, setTheme] = useState(getInitialTheme);
  useEffect(() => {
    window.addEventListener("storage", () => {
      setTheme(JSON.parse(localStorage.getItem("darkTheme")) || false);
    });
  }, []);
  const onChangeStartDate = (date) => {
    setStartDate(date);
    dispatch(addStartDate(convertISOToYYYYMMDD(date)));
    if (date > endDate) {
      setEndDate(date);
    }
  };
  const onChangeEndDate = (date) => {
    if (date >= startDate) {
      setEndDate(date);
      dispatch(addEndDate(convertISOToYYYYMMDD(date)));
    }
  };

  return (
    <div className={`date-picker-container ${theme ? "dark" : "light"}`}>
      <div className="date-picker-item">
        <label>Start Date:</label>
        <DatePicker value={startDate} onChange={onChangeStartDate} />
      </div>
      <div className="date-picker-item">
        <label>End Date:</label>
        <DatePicker
          value={endDate}
          onChange={onChangeEndDate}
          minDate={startDate}
        />
      </div>
    </div>
  );
};

export default TimeRangePicker;
