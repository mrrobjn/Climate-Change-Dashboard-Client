import { useState } from "react";
import "../../assets/scss/pages/admin/CreateArticlePage.scss";
import { uploadCSV } from "../../api/index.js";
import FieldItem from "../../components/admin/FieldItem";
import ChartItem from "../../components/admin/ChartItem";
import GoalsItem from "../../components/admin/GoalsItem";
import { useDispatch, useSelector } from "react-redux";
import { getSummary } from "../../redux/slides/DataSummarySlice";
import { dataSummary, visualizeForm } from "../../redux/selector";
const CreateArticlePage = () => {
  const [goal, setGoal] = useState("");
  const [isLoading, setIsLoadin] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector(dataSummary);
  const charts = useSelector(visualizeForm).charts;
  const handleCSVInput = async (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    const res = await uploadCSV(formData);
    dispatch(getSummary(res));
  };

  return (
    <div className="create-article-container">
      <div className="file-input">
        {/* <input
          type="file"
          accept=".csv"
          id="csv_input"
          onChange={(e) => handleCSVInput(e)}
        />
        <label htmlFor="csv_input">
          <i className="fa-solid fa-arrow-up-from-bracket fa-2xl"></i>{" "}
          <p>Upload .csv file to generate visualization</p>
        </label> */}
      </div>
      <div className="title">
        <i className="fa-regular fa-clipboard fa-lg"></i> <h2>Data Summary</h2>
      </div>
      <div className="summary-header">
        <i className="fa-solid fa-angle-up"></i> data summary | filename.csv
      </div>
      <div className="summary-container">
        {data && data.summary
          ? data.summary.fields.map((field, i) => {
              return <FieldItem field={field} key={i} />;
            })
          : null}
      </div>
      <div className="title">
        <i className="fa-regular fa-lightbulb fa-lg"></i>{" "}
        <h2>Goals Exploration</h2>
      </div>
      <div className="goals-header">
        <i className="fa-solid fa-angle-up"></i> Goals (
        {data && data.goals ? data.goals?.length : 0})
      </div>
      <div className="goals-container">
        {data && data.goals
          ? data.goals.map((goal, i) => {
              return (
                <GoalsItem goal={goal} key={i} index={i} filePath={data.path} />
              );
            })
          : ""}
      </div>
      <div className="title">
        <i className="fa-solid fa-chart-pie fa-lg"></i>
        <h2>Visualization</h2>
      </div>
      <div className="visualize-container">
        <div className="custom-goal-input">
          <input
            type="text"
            name=""
            id=""
            onChange={(e) => setGoal(e.target.value)}
            placeholder="Describe a new visualization goal to generate a visualization"
          />
          <button type="button" onClick={() => handleGoalInput(goal)}>
            <i className="fa-solid fa-angles-right"></i> Generate
          </button>
        </div>
        <div className="goal-visualized">
          {charts.map((chart, i) => {
            return <ChartItem chart={chart} key={i} index={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CreateArticlePage;
