import { Line } from "react-chartjs-2";
import HeadLine from "../../components/HeadLine";
import TextInput from "../../components/TextInput";
import TimeRangePicker from "../../components/TimeRangePicker";
import CSVButton from "../../components/CSVButton";
import CheckBox from "../../components/CheckBox";
const WeatherForcastPage = () => {
  const checkBoxData = [
    { label: "Temperature (2 m)", value: "temperature_2m" },
    { label: "Relative Humidity (2 m)", value: "relative_humidity_2m" },
    { label: "Dewpoint (2 m)", value: "dewpoint_2m" },
    { label: "Apparent Temperature", value: "apparent_temperature" },
    { label: "Precipitation Probability", value: "precipitation_probability" },
    {
      label: "Precipitation (rain + showers + snow)",
      value: "total_precipitation",
    },
    { label: "Rain", value: "rain" },
    { label: "Showers", value: "showers" },
    { label: "Snowfall", value: "snowfall" },
    { label: "Snow Depth", value: "snow_depth" },
    { label: "Weathercode", value: "weathercode" },
    { label: "Sealevel Pressure", value: "sealevel_pressure" },
    { label: "Surface Pressure", value: "surface_pressure" },
    { label: "Cloudcover Total", value: "total_cloudcover" },
    { label: "Cloudcover Low", value: "low_cloudcover" },
    { label: "Cloudcover Mid", value: "mid_cloudcover" },
    { label: "Cloudcover High", value: "high_cloudcover" },
    { label: "Visibility", value: "visibility" },
    { label: "Evapotranspiration", value: "evapotranspiration" },
    {
      label: "Reference Evapotranspiration (ET₀)",
      value: "reference_evapotranspiration",
    },
    { label: "Vapor Pressure Deficit", value: "vapor_pressure_deficit" },
    { label: "Wind Speed (10 m)", value: "wind_speed_10m" },
    { label: "Wind Speed (80 m)", value: "wind_speed_80m" },
    { label: "Wind Speed (120 m)", value: "wind_speed_120m" },
    { label: "Wind Speed (180 m)", value: "wind_speed_180m" },
    { label: "Wind Direction (10 m)", value: "wind_direction_10m" },
    { label: "Wind Direction (80 m)", value: "wind_direction_80m" },
    { label: "Wind Direction (120 m)", value: "wind_direction_120m" },
    { label: "Wind Direction (180 m)", value: "wind_direction_180m" },
    { label: "Wind Gusts (10 m)", value: "wind_gusts_10m" },
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
    {label: "Weathercode", value: "weathercode"},
    {label: "Maximum Temperature (2 m)", value: "max_temp_2m"},
    {label: "Minimum Temperature (2 m)", value: "min_temp_2m"},
    {label: "Maximum Apparent Temperature (2 m)", value: "max_apparent_temp_2m"},
    {label: "Minimum Apparent Temperature (2 m)", value: "min_apparent_temp_2m"},
    {label: "Sunrise", value: "sunrise"},
    {label: "Sunset", value: "sunset"},
    {label: "UV Index", value: "uv_index"},
    {label: "UV Index Clear Sky", value: "uv_index_clear_sky"},
    {label: "Precipitation Sum", value: "precipitation_sum"},
    {label: "Rain Sum", value: "rain_sum"},
    {label: "Showers Sum", value: "showers_sum"},
    {label: "Snowfall Sum", value: "snowfall_sum"},
    {label: "Precipitation Hours", value: "precipitation_hours"},
    {label: "Precipitation Probability Max", value: "precipitation_probability_max"},
    {label: "Maximum Wind Speed (10 m)", value: "max_wind_speed_10m"},
    {label: "Maximum Wind Gusts (10 m)", value: "max_wind_gusts_10m"},
    {label: "Dominant Wind Direction (10 m)", value: "dominant_wind_direction_10m"},
    {label: "Shortwave Radiation Sum", value: "shortwave_radiation_sum"},
    {label: "Reference Evapotranspiration (ET₀)", value: "reference_evapotranspiration"}
  ]
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      // title: {
      //   display: currentCity !== "null" && !isLoading,
      //   text: `Average temperature of ${currentCity} (°C) in ${
      //     monthNames[month - 1]
      //   }`,
      // },
    },
  };
  const chartData = {
    labels: [2016, 2017, 2018, 2019, 2020, 2021, 2022],
    datasets: [
      {
        label: `test`,
        data: [25, 23, 24, 23, 26, 27, 29],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <div>
      <HeadLine text={"Select Location"} />
      <div className="single-input-field">
        <TextInput placeholder={"Search for location"} />
      </div>
      <HeadLine text={"Hourly Weather Variables"} />
      <CheckBox data={checkBoxData} />
      <HeadLine text={"Daily Weather Variables"} />
      <CheckBox data={checkBoxData2} />
      <HeadLine text={"Setting"} />
      <TimeRangePicker />
      <HeadLine text={"Preview Chart"} />
      <div className="chart-container">
        <Line options={options} data={chartData} />
      </div>
      <CSVButton />
    </div>
  );
};

export default WeatherForcastPage;
