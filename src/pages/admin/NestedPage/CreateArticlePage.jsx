import { useState } from "react";
import "../../../assets/scss/pages/admin/CreateArticlePage.scss";
import { uploadCSV } from "../../../api/index.js";
import FieldItem from "../../../components/admin/FieldItem.jsx";
import ChartItem from "../../../components/admin/ChartItem.jsx";
import GoalsItem from "../../../components/admin/GoalsItem.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  getSummary,
  resetSummary,
} from "../../../redux/slides/DataSummarySlice.js";
import { dataSummary, visualizeForm } from "../../../redux/selector.js";
import ReactLoading from "react-loading";
import { resetCharts } from "../../../redux/slides/VisualizeFormSlice.js";
import CreateArticleForm from "../../../components/admin/CreateArticleForm.jsx";

const CreateArticlePage = () => {
  const [goal, setGoal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector(dataSummary);
  const charts = useSelector(visualizeForm).charts;
  const handleCSVInput = async (e) => {
    setIsLoading(true);
    dispatch(resetSummary());
    dispatch(resetCharts());
    try {
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      const res = await uploadCSV(formData);
      dispatch(getSummary(res));
    } catch (e) {
      console.error(e);
    }
    setIsLoading(false);
  };

  return (
    <div className="create-article-container">
      <div className="file-input">
        <input
          type="file"
          accept=".csv"
          id="csv_input"
          onChange={(e) => handleCSVInput(e)}
          disabled={isLoading}
        />
        <label htmlFor="csv_input" className={`${isLoading ? "loading" : ""}`}>
          {!isLoading ? (
            <>
              <i className="fa-solid fa-arrow-up-from-bracket fa-2xl"></i>{" "}
              <p>Upload .csv file to generate visualization</p>
            </>
          ) : (
            <ReactLoading type="bars" color="#ccc" />
          )}
        </label>
      </div>
      {data.summary.fields.length > 0 ? (
        <>
          <div className="title">
            <i className="fa-regular fa-clipboard fa-lg"></i>{" "}
            <h2>Data Summary</h2>
          </div>
          <div className="summary-header">
            <i className="fa-solid fa-angle-up"></i> data summary | filename.csv
          </div>
          <div className="summary-container">
            {data.summary.fields.map((field, i) => {
              return <FieldItem field={field} key={i} />;
            })}
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
                    <GoalsItem
                      goal={goal}
                      key={i}
                      index={i}
                      filePath={data.path}
                    />
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
          <div className="title">
            <i className="fa-solid fa-forward-step fa-lg"></i>
            <h2>Final Steps</h2>
          </div>
          <CreateArticleForm />
        </>
      ) : null}
    </div>
  );
};

export default CreateArticlePage;
