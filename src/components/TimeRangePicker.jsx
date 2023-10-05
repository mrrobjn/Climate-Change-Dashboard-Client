import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import "../assets/scss/components/TimeRangePicker.scss";
import { useDispatch } from "react-redux";
import { addEndDate, addStartDate } from "../redux/slides/ClimateDataFormSlice";
const TimeRangePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const dispatch = useDispatch();
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
  function convertISOToYYYYMMDD(isoTimeString) {
    const date = new Date(isoTimeString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed in JavaScript
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  return (
    <div className="date-picker-container">
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
