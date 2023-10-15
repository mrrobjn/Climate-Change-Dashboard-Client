import HeadLine from "../../components/HeadLine";
import TextInput from "../../components/TextInput";
import "../../assets/scss/pages/NestedPages/AirQualityPage.scss";
import CheckBox from "../../components/CheckBox";
import TimeRangePicker from "../../components/TimeRangePicker";

import CSVButton from "../../components/CSVButton";
import { useEffect, useState } from "react";
import { getAirQuality } from "../../api";
import { useSelector } from "react-redux";
import { climateDataForm } from "../../redux/selector";
import ChartContainer from "../../components/ChartContainer";
import getInitialTheme from "../../utility/getInitialTheme";

const checkBoxData = [
  { label: "Particulate Matter PM10", value: "pm10" },
  { label: "Particulate Matter PM2.5", value: "pm2_5" },
  { label: "Carbon Monoxide CO", value: "carbon_monoxide" },
  { label: "Nitrogen Dioxide NO2", value: "nitrogen_dioxide" },
  { label: "Sulphur Dioxide SO2", value: "sulphur_dioxide" },
  { label: "Ozone O3", value: "ozone" },
  { label: "Aerosol Optical Depth", value: "aerosol_optical_depth" },
  { label: "Dust", value: "dust" },
  { label: "UV Index", value: "uv_index" },
  { label: "UV Index Clear Sky", value: "uv_index_clear_sky" },
  { label: "Ammonia NH3 (*)", value: "ammonia" },
  { label: "Alder Pollen (*)", value: "alder_pollen" },
  { label: "Birch Pollen (*)", value: "birch_pollen" },
  { label: "Grass Pollen (*)", value: "grass_pollen" },
  { label: "Mugwort Pollen (*)", value: "mugwort_pollen" },
  { label: "Olive Pollen (*)", value: "olive_pollen" },
  { label: "Ragweed Pollen (*)", value: "ragweed_pollen" },
];
const AirQualityPage = () => {
  const [locations, setLocations] = useState([]);
  const [data, setData] = useState({});
  const dataForm = useSelector(climateDataForm);
  const [theme, setTheme] = useState(getInitialTheme);
  useEffect(() => {
    window.addEventListener("storage", () => {
      setTheme(JSON.parse(localStorage.getItem("darkTheme")) || false);
    });
  }, []);
  const requestData = async () => {
    const { currentLocation, hourly, startDate, endDate } = dataForm;
    if (currentLocation.name !== "") {
      setData(
        await getAirQuality(
          currentLocation.latitude,
          currentLocation.longitude,
          hourly.join(","),
          startDate,
          endDate
        )
      );
    } else {
      alert("PLEASE SELECT LOCATION");
    }
  };
  return (
    <div className="air-quality-container">
      <HeadLine text={"Select Location"} />
      <div className="single-input-field">
        <TextInput
          placeholder={"Search for location"}
          setLocations={setLocations}
          locations={locations}
        />
      </div>
      <HeadLine text={"Hourly Air Quality Variables"} />
      <CheckBox data={checkBoxData} type={"hourly"} />
      <HeadLine text={"Settings"} />
      <TimeRangePicker />
      <HeadLine text={"Preview Chart"} />
      <button
        onClick={() => requestData()}
        className={`primary-btn ${theme ? "dark" : "light"}`}
      >
        Reload Chart
      </button>
      <ChartContainer data={data} />
      <CSVButton data={{}} />
    </div>
  );
};

export default AirQualityPage;
