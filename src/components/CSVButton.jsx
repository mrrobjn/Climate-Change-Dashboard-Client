import "../assets/scss/components/Button.scss";
import { useEffect, useState } from "react";
import getInitialTheme from "../utility/getInitialTheme";
import axios from "../api/axios";
import { useSelector } from "react-redux";
import { climateDataForm } from "../redux/selector";
import { toast } from "react-toastify";

const CSVButton = ({ url }) => {
  const [theme, setTheme] = useState(getInitialTheme);
  const dataForm = useSelector(climateDataForm);

  useEffect(() => {
    window.addEventListener("storage", () => {
      setTheme(JSON.parse(localStorage.getItem("darkTheme")) || false);
    });
  }, []);

  const handleClick = async () => {
    const { currentLocation, hourly, startDate, endDate, daily } = dataForm;
    try {
      const res = await axios.get(url, {
        params: {
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          hourly: hourly.join(","),
          daily: daily.join(","),
          start_date: startDate,
          end_date: endDate,
        },
      });
      if (res.data.daily) downloadCSV(formatData(res.data.daily));
      else downloadCSV(formatData(res.data.hourly));
    } catch (error) {
      console.error(error);
      toast.error(error.message||error.response.data.message);
    }
  };

  const formatData = (data) => {
    let arr = [];
    let keys = Object.keys(data);
    let length = data[keys[0]]?.length;
    for (let i = 0; i < length; i++) {
      let newObj = {};
      newObj["time"] = data["time"][i]; // assign 'time' first
      for (let key of keys) {
        if (key !== "time") {
          // skip 'time' as it's already assigned
          newObj[key] = data[key][i];
        }
      }
      arr.push(newObj);
    }
    return arr;
  };

  const convertToCSV = (data) => {
    const csvRows = [];
    const headers = Object.keys(data[0]);
    csvRows.push(headers.join(","));

    for (const row of data) {
      const values = headers.map((header) => {
        const escaped = ("" + row[header]).replace(/"/g, '\\"');
        return `"${escaped}"`;
      });
      csvRows.push(values.join(","));
    }

    return csvRows.join("\n");
  };

  const downloadCSV = async (data) => {
    try {
      const csvData = convertToCSV(data);
      const blob = new Blob([csvData], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.download = "data.csv";
      link.href = url;
      link.click();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <button
      className={`primary-btn ${theme ? "dark" : "light"}`}
      onClick={handleClick}
      type="button"
    >
      Download CSV
    </button>
  );
};

export default CSVButton;
