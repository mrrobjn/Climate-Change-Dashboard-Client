import { Line } from "react-chartjs-2";
import HeadLine from "../../components/HeadLine";
import TextInput from "../../components/TextInput";
import TimeRangePicker from "../../components/TimeRangePicker";
import CSVButton from "../../components/CSVButton";
import CheckBox from "../../components/CheckBox";

const HistoricalWeatherPage = () => {
  const checkBoxData = [
    {label: "Temperature (2 m)", value: "temperature_2m"},
    {label: "Relative Humidity (2 m)", value: "relative_humidity_2m"},
    {label: "Dewpoint (2 m)", value: "dewpoint_2m"},
    {label: "Apparent Temperature", value: "apparent_temperature"},
    {label: "Precipitation (rain + snow)", value: "total_precipitation"},
    {label: "Rain", value: "rain"},
    {label: "Snowfall", value: "snowfall"},
    {label: "Weathercode", value: "weathercode"},
    {label: "Sealevel Pressure", value: "sealevel_pressure"},
    {label: "Surface Pressure", value: "surface_pressure"},
    {label: "Cloudcover Total", value: "total_cloudcover"},
    {label: "Cloudcover Low", value: "low_cloudcover"},
    {label: "Cloudcover Mid", value: "mid_cloudcover"},
    {label: "Cloudcover High", value: "high_cloudcover"},
    {label: "Reference Evapotranspiration (ET₀)", value: "reference_evapotranspiration"},
    {label: "Vapor Pressure Deficit", value: "vapor_pressure_deficit"},
    {label: "Wind Speed (10 m)", value: "wind_speed_10m"},
    {label: "Wind Speed (100 m)", value: "wind_speed_100m"},
    {label: "Wind Direction (10 m)", value: "wind_direction_10m"},
    {label: "Wind Direction (100 m)", value: "wind_direction_100m"},
    {label: "Wind Gusts (10 m)", value: "wind_gusts_10m"},
    {label: "Soil Temperature (0-7 cm)", value: "soil_temperature_0_7cm"},
    {label: "Soil Temperature (7-28 cm)", value: "soil_temperature_7_28cm"},
    {label: "Soil Temperature (28-100 cm)", value: "soil_temperature_28_100cm"},
    {label: "Soil Temperature (100-255 cm)", value: "soil_temperature_100_255cm"},
    {label: "Soil Moisture (0-7 cm)", value: "soil_moisture_0_7cm"},
    {label: "Soil Moisture (7-28 cm)", value: "soil_moisture_7_28cm"},
    {label: "Soil Moisture (28-100 cm)", value: "soil_moisture_28_100cm"},
    {label: "Soil Moisture (100-255 cm)", value: "soil_moisture_100_255cm"}
  ]
  
  const checkBoxData2 = [
    { label: "Weathercode", value: "weathercode" },
    { label: "Maximum Temperature (2 m)", value: "max_temp_2m" },
    { label: "Minimum Temperature (2 m)", value: "min_temp_2m" },
    { label: "Mean Temperature (2 m)", value: "mean_temp_2m" },
    {
      label: "Maximum Apparent Temperature (2 m)",
      value: "max_apparent_temp_2m",
    },
    {
      label: "Minimum Apparent Temperature (2 m)",
      value: "min_apparent_temp_2m",
    },
    {
      label: "Mean Apparent Temperature (2 m)",
      value: "mean_apparent_temp_2m",
    },
    { label: "Sunrise", value: "sunrise" },
    { label: "Sunset", value: "sunset" },
    { label: "Precipitation Sum", value: "precipitation_sum" },
    { label: "Rain Sum", value: "rain_sum" },
    { label: "Snowfall Sum", value: "snowfall_sum" },
    { label: "Precipitation Hours", value: "precipitation_hours" },
    { label: "Maximum Wind Speed (10 m)", value: "max_wind_speed_10m" },
    { label: "Maximum Wind Gusts (10 m)", value: "max_wind_gusts_10m" },
    {
      label: "Dominant Wind Direction (10 m)",
      value: "dominant_wind_direction_10m",
    },
    { label: "Shortwave Radiation Sum", value: "shortwave_radiation_sum" },
    {
      label: "Reference Evapotranspiration (ET₀)",
      value: "reference_evapotranspiration",
    },
  ];

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
      <HeadLine text={"Specify Time Interval"} />
      <TimeRangePicker />
      <HeadLine text={"Hourly Weather Variables"} />
      <CheckBox data={checkBoxData} />
      <HeadLine text={"Daily Weather Variables"} />
      <CheckBox data={checkBoxData2} />
      <HeadLine text={"Setting"} />
      <HeadLine text={"Preview Chart"} />
      <div className="chart-container">
        <Line options={options} data={chartData} />
      </div>
      <CSVButton data={{}}/>
    </div>
  );
};

export default HistoricalWeatherPage;
