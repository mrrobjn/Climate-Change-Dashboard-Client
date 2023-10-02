import HeadLine from "../../components/HeadLine";
import TextInput from "../../components/TextInput";
import "../../assets/scss/pages/NestedPages/AirQualityPage.scss";
import CheckBox from "../../components/CheckBox";
import TimeRangePicker from "../../components/TimeRangePicker";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import CSVButton from "../../components/CSVButton";
Chart.register(...registerables);

const AirQualityPage = () => {
  const checkBoxData = [
    { label: "Particulate Matter PM10", value: "pm10" },
    { label: "Particulate Matter PM2.5", value: "pm2_5" },
    { label: "Carbon Monoxide CO", value: "co" },
    { label: "Nitrogen Dioxide NO2", value: "no2" },
    { label: "Sulphur Dioxide SO2", value: "so2" },
    { label: "Ozone O3", value: "o3" },
    { label: "Aerosol Optical Depth", value: "aod" },
    { label: "Dust", value: "dust" },
    { label: "UV Index", value: "uv_index" },
    { label: "UV Index Clear Sky", value: "uv_index_clear_sky" },
    { label: "Ammonia NH3 (*)", value: "nh3" },
    { label: "Alder Pollen (*)", value: "alder_pollen" },
    { label: "Birch Pollen (*)", value: "birch_pollen" },
    { label: "Grass Pollen (*)", value: "grass_pollen" },
    { label: "Mugwort Pollen (*)", value: "mugwort_pollen" },
    { label: "Olive Pollen (*)", value: "olive_pollen" },
    { label: "Ragweed Pollen (*)", value: "ragweed_pollen" },
  ];
  const europeanAirQualityData = [
    {
      pollutant: "PM2.5",
      timespan: "24h",
      good: "0-10",
      fair: "10-20",
      moderate: "20-25",
      poor: "25-50",
      veryPoor: "50-75",
      extremelyPoor: "75-800",
    },
    {
      pollutant: "PM10",
      timespan: "24h",
      good: "0-20",
      fair: "20-40",
      moderate: "40-50",
      poor: "50-100",
      veryPoor: "100-150",
      extremelyPoor: "150-1200",
    },
    {
      pollutant: "NO2",
      timespan: "1h",
      good: "0-40",
      fair: "40-90",
      moderate: "90-120",
      poor: "120-230",
      veryPoor: "230-340",
      extremelyPoor: "340-1000",
    },
    {
      pollutant: "O3",
      timespan: "1h",
      good: "0-50",
      fair: "50-100",
      moderate: "100-130",
      poor: "130-240",
      veryPoor: "240-380",
      extremelyPoor: "380-800",
    },
    {
      pollutant: "SO2",
      timespan: "1h",
      good: "0-100",
      fair: "100-200",
      moderate: "200-350",
      poor: "350-500",
      veryPoor: "500-750",
      extremelyPoor: "750-1250",
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
    <div className="air-quality-container">
      <HeadLine text={"Select Location"} />
      <div className="single-input-field">
        <TextInput placeholder={"Search for location"} />
      </div>
      <HeadLine text={"Hourly Air Quality Variables"} />
      <CheckBox data={checkBoxData} />
      <HeadLine text={"Settings"} />
      <TimeRangePicker />
      <HeadLine text={"Preview Chart"} />
      <div className="chart-container">
        <Line options={options} data={chartData} />
      </div>
      <CSVButton />
    </div>
  );
};

export default AirQualityPage;
