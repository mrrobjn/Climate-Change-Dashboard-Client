import { Bar, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { useSelector } from "react-redux";
import { climateDataForm } from "../redux/selector";
import colors from "../utility/chartColor";
import SelectInput from "./SelectInput";
import { useState } from "react";
Chart.register(...registerables);
const ChartContainer = ({ data }) => {
  const [chartType, setChartType] = useState("Line");
  const dataForm = useSelector(climateDataForm);
  const components = {
    Line: Line,
    Bar: Bar
  };

  const ChartComponent = components[chartType];
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
    datasets:
      Object.keys(data).length > 0
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
        : [],
  };
  const chartList = [
    { label: "Line chart", value: "Line" },
    { label: "Bar chart", value: "Bar" },
  ];
  return (
    <>
      <SelectInput data={chartList} setValue={setChartType} />
      <div className="chart-container">
        {Object.keys(data).length > 0 && (
          <ChartComponent options={options} data={chartData} />
        )}
      </div>
    </>
  );
};

export default ChartContainer;
