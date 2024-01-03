import HeadLine from "../../components/HeadLine";
import TextInput from "../../components/TextInput";
import TimeRangePicker from "../../components/TimeRangePicker";
import CSVButton from "../../components/CSVButton";
import CheckBox from "../../components/CheckBox";
import { useState } from "react";
import { useSelector } from "react-redux";
import { climateDataForm } from "../../redux/selector";
import { toast } from "react-toastify";
import axios from "../../api/axios";
import Plot from "react-plotly.js";
import "../../assets/scss/pages/NestedPages/HistoricalPage.scss";
import ChartSelect from "../../components/ChartSelect";

const checkBoxData = [
  { label: "Temperature (2 m)", value: "temperature_2m" },
  { label: "Relative Humidity (2 m)", value: "relativehumidity_2m" },
  { label: "Dewpoint (2 m)", value: "dewpoint_2m" },
  { label: "Apparent Temperature", value: "apparent_temperature" },
  { label: "Precipitation", value: "precipitation" },
  { label: "Rain", value: "rain" },
  { label: "Snowfall", value: "snowfall" },
  { label: "Weathercode", value: "weathercode" },
  { label: "Sealevel Pressure", value: "pressure_msl" },
  { label: "Surface Pressure", value: "surface_pressure" },
  { label: "Cloudcover Total", value: "cloudcover" },
  { label: "Cloudcover Low", value: "cloudcover_low" },
  { label: "Cloudcover Mid", value: "cloudcover_mid" },
  { label: "Cloudcover High", value: "cloudcover_high" },
  {
    label: "Reference Evapotranspiration (ET₀)",
    value: "et0_fao_evapotranspiration",
  },
  { label: "Vapor Pressure Deficit", value: "vapor_pressure_deficit" },
  { label: "Wind Speed (10 m)", value: "windspeed_10m" },
  { label: "Wind Speed (100 m)", value: "windspeed_100m" },
  { label: "Wind Direction (10 m)", value: "winddirection_10m" },
  { label: "Wind Direction (100 m)", value: "winddirection_100m" },
  { label: "Wind Gusts (10 m)", value: "windgusts_10m" },
  { label: "Soil Temperature (0-7 cm)", value: "soil_temperature_0_to_7cm" },
  { label: "Soil Temperature (7-28 cm)", value: "soil_temperature_7_to_28cm" },
  {
    label: "Soil Temperature (28-100 cm)",
    value: "soil_temperature_28_to_100cm",
  },
  {
    label: "Soil Temperature (100-255 cm)",
    value: "soil_temperature_100_to_255cm",
  },
  { label: "Soil Moisture (0-7 cm)", value: "soil_moisture_0_to_7cm" },
  { label: "Soil Moisture (7-28 cm)", value: "soil_moisture_7_to_28cm" },
  { label: "Soil Moisture (28-100 cm)", value: "soil_moisture_28_to_100cm" },
  { label: "Soil Moisture (100-255 cm)", value: "soil_moisture_100_to_255cm" },
];

const checkBoxData2 = [
  { label: "Weathercode", value: "weathercode" },
  { label: "Maximum Temperature (2 m)", value: "temperature_2m_max" },
  { label: "Minimum Temperature (2 m)", value: "temperature_2m_min" },
  { label: "Mean Temperature (2 m)", value: "temperature_2m_mean" },
  {
    label: "Maximum Apparent Temperature (2 m)",
    value: "apparent_temperature_max",
  },
  {
    label: "Minimum Apparent Temperature (2 m)",
    value: "apparent_temperature_min",
  },
  {
    label: "Mean Apparent Temperature (2 m)",
    value: "apparent_temperature_mean",
  },
  { label: "Sunrise", value: "sunrise" },
  { label: "Sunset", value: "sunset" },
  { label: "Precipitation Sum", value: "precipitation_sum" },
  { label: "Rain Sum", value: "rain_sum" },
  { label: "Snowfall Sum", value: "snowfall_sum" },
  { label: "Precipitation Hours", value: "precipitation_hours" },
  { label: "Maximum Wind Speed (10 m)", value: "windspeed_10m_max" },
  { label: "Maximum Wind Gusts (10 m)", value: "windgusts_10m_max" },
  {
    label: "Dominant Wind Direction (10 m)",
    value: "winddirection_10m_dominant",
  },
  { label: "Shortwave Radiation Sum", value: "shortwave_radiation_sum" },
  {
    label: "Reference Evapotranspiration (ET₀)",
    value: "et0_fao_evapotranspiration",
  },
];

const HistoricalWeatherPage = () => {
  const [locations, setLocations] = useState([]);
  const dataForm = useSelector(climateDataForm);
  const [jsonPlot, setJsonPlot] = useState([]);

  const requestData = async () => {
    const { currentLocation, hourly, daily, startDate, endDate, chartType } =
      dataForm;
    if (currentLocation.name !== "") {
      try {
        const res = await axios.get("historical/get", {
          params: {
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
            hourly: hourly.join(","),
            daily: daily.join(","),
            start_date: startDate,
            end_date: endDate,
            chart_type: chartType,
          },
        });
        setJsonPlot(res.data);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    } else {
      toast.error("PLEASE SELECT LOCATION");
    }
  };
  return (
    <div className="historical-container">
      <HeadLine text={"Select Location"} />
      <div className="single-input-field">
        <TextInput
          placeholder={"Search for location"}
          locations={locations}
          setLocations={setLocations}
        />
      </div>
      <HeadLine text={"Hourly Weather Variables"} />
      <CheckBox data={checkBoxData} type={"hourly"} />
      <HeadLine text={"Daily Weather Variables"} />
      <CheckBox data={checkBoxData2} type={"daily"} />
      <HeadLine text={"Setting"} />
      <TimeRangePicker />
      <ChartSelect />
      <HeadLine text={"Preview Chart"} />
      <button onClick={() => requestData()} className="primary-btn light">
        Reload Chart
      </button>
      <div>
        <Plot data={jsonPlot} layout={{ width: 1000, height: 600 }} />
      </div>
      <CSVButton url={"historical/download"} />
    </div>
  );
};

export default HistoricalWeatherPage;
