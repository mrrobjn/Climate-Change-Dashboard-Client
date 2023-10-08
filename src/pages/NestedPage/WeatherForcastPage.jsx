import { Line } from "react-chartjs-2";
import HeadLine from "../../components/HeadLine";
import TextInput from "../../components/TextInput";
import CSVButton from "../../components/CSVButton";
import CheckBox from "../../components/CheckBox";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { climateDataForm } from "../../redux/selector";
import { getWeatherForCast } from "../../api";
import {
  convertDailyMatchHourLy,
  convertToDate,
  groupByTimePeriod,
} from "../../utility/groupByTimePeriod";
import { resetState } from "../../redux/slides/ClimateDataFormSlice";
import colors from "../../utility/chartColor";

const checkBoxData = [
  { label: "Temperature (2 m)", value: "temperature_2m" },
  { label: "Relative Humidity (2 m)", value: "relativehumidity_2m" },
  { label: "Dewpoint (2 m)", value: "dewpoint_2m" },
  { label: "Apparent Temperature", value: "apparent_temperature" },
  { label: "Precipitation Probability", value: "precipitation_probability" },
  { label: "Precipitation", value: "precipitation" },
  { label: "Rain", value: "rain" },
  { label: "Showers", value: "showers" },
  { label: "Snowfall", value: "snowfall" },
  { label: "Snow Depth", value: "snow_depth" },
  { label: "Weathercode", value: "weathercode" },
  { label: "Sealevel Pressure", value: "pressure_msl" },
  { label: "Surface Pressure", value: "surface_pressure" },
  { label: "Cloudcover Total", value: "cloudcover" },
  { label: "Cloudcover Low", value: "cloudcover_low" },
  { label: "Cloudcover Mid", value: "cloudcover_mid" },
  { label: "Cloudcover High", value: "cloudcover_high" },
  { label: "Visibility", value: "visibility" },
  { label: "Evapotranspiration", value: "evapotranspiration" },
  {
    label: "Reference Evapotranspiration (ET₀)",
    value: "et0_fao_evapotranspiration",
  },
  { label: "Vapor Pressure Deficit", value: "vapor_pressure_deficit" },
  { label: "Wind Speed (10 m)", value: "windspeed_10m" },
  { label: "Wind Speed (80 m)", value: "windspeed_80m" },
  { label: "Wind Speed (120 m)", value: "windspeed_120m" },
  { label: "Wind Speed (180 m)", value: "windspeed_180m" },
  { label: "Wind Direction (10 m)", value: "winddirection_10m" },
  { label: "Wind Direction (80 m)", value: "winddirection_80m" },
  { label: "Wind Direction (120 m)", value: "winddirection_120m" },
  { label: "Wind Direction (180 m)", value: "winddirection_180m" },
  { label: "Wind Gusts (10 m)", value: "windgusts_10m" },
  { label: "Temperature (80 m)", value: "temperature_80m" },
  { label: "Temperature (120 m)", value: "temperature_120m" },
  { label: "Temperature (180 m)", value: "temperature_180m" },
  { label: "Soil Temperature (0 cm)", value: "soil_temperature_0cm" },
  { label: "Soil Temperature (6 cm)", value: "soil_temperature_6cm" },
  { label: "Soil Temperature (18 cm)", value: "soil_temperature_18cm" },
  { label: "Soil Temperature (54 cm)", value: "soil_temperature_54cm" },
  { label: "Soil Moisture (0-1 cm)", value: "soil_moisture_0_1cm" },
  { label: "Soil Moisture (1-3 cm)", value: "soil_moisture_1_3cm" },
  { label: "Soil Moisture (3-9 cm)", value: "soil_moisture_3_9cm" },
  { label: "Soil Moisture (9-27 cm)", value: "soil_moisture_9_27cm" },
  { label: "Soil Moisture (27-81 cm)", value: "soil_moisture_27_81cm" },
];
const checkBoxData2 = [
  { label: "Weathercode", value: "weathercode" },
  { label: "Maximum Temperature (2 m)", value: "temperature_2m_max" },
  { label: "Minimum Temperature (2 m)", value: "temperature_2m_min" },
  {
    label: "Maximum Apparent Temperature (2 m)",
    value: "apparent_temperature_max",
  },
  {
    label: "Minimum Apparent Temperature (2 m)",
    value: "apparent_temperature_min",
  },
  { label: "Sunrise", value: "sunrise" },
  { label: "Sunset", value: "sunset" },
  { label: "UV Index", value: "uv_index_max" },
  { label: "UV Index Clear Sky", value: "uv_index_clear_sky_max" },
  { label: "Precipitation Sum", value: "precipitation_sum" },
  { label: "Rain Sum", value: "rain_sum" },
  { label: "Showers Sum", value: "showers_sum" },
  { label: "Snowfall Sum", value: "snowfall_sum" },
  { label: "Precipitation Hours", value: "precipitation_hours" },
  {
    label: "Precipitation Probability Max",
    value: "precipitation_probability_max",
  },
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

const WeatherForcastPage = () => {
  const [locations, setLocations] = useState([]);
  const [data, setData] = useState({});
  const dataForm = useSelector(climateDataForm);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState());
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text:
          dataForm.currentLocation.name +
          " - " +
          dataForm.currentLocation.country,
      },
    },
  };
  const chartData = {
    labels: Object.keys(data).length > 0 ? data.hourly.time : [],
    datasets: [
      ...(Object.keys(data).length > 0
        ? dataForm.hourly.map((key, i) => {
            return {
              label: key + ` (${data.hourly_units[key]})`,
              data: data.hourly[key],
              borderColor: colors[i],
              backgroundColor: colors[i],
              pointRadius: 0,
              borderWidth: 1,
            };
          })
        : []),
      ...(Object.keys(data).length > 0
        ? dataForm.daily?.map((key, i) => {
            return {
              label: key + ` (${data.daily_units && data.daily_units[key]})`,
              data:
                data.daily &&
                convertDailyMatchHourLy(data.daily[key], data.hourly.time),
              borderColor: colors[i],
              backgroundColor: colors[i],
              pointRadius: 0,
              borderWidth: 1,
            };
          })
        : []),
    ],
  };
  const requestData = async () => {
    const { currentLocation, hourly, daily } = dataForm;
    if (currentLocation.name !== "") {
      setData(
        await getWeatherForCast(
          currentLocation.latitude,
          currentLocation.longitude,
          hourly.join(","),
          daily.join(",")
        )
      );
    } else {
      alert("PLEASE SELECT LOCATION");
    }
  };
  return (
    <div>
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
      <HeadLine text={"Preview Chart"} />
      <button onClick={() => requestData()} className="primary-btn light">
        Reload Chart
      </button>
      {Object.keys(data).length > 0 && (
        <>
          <div className="chart-container">
            <Line options={options} data={chartData} />
          </div>
          <CSVButton data={groupByTimePeriod(data.hourly, dataForm.hourly)} />
        </>
      )}
    </div>
  );
};

export default WeatherForcastPage;
