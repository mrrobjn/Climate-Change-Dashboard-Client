import { useEffect, useState } from "react";
import "../../assets/scss/pages/admin/CreateArticlePage.scss";
import { modifyGoal, postSingleGoal, uploadCSV } from "../../api/index.js";
import FieldItem from "../../components/admin/FieldItem";
const CreateArticlePage = () => {
  const [data, setData] = useState({});
  const [goal, setGoal] = useState("");
  const [charts, setChart] = useState([]);
  const [modify, setModify] = useState("");
  const [modifies, setModifies] = useState([]);
  const handleCSVInput = async (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    setData(await uploadCSV(formData));
  };
  const handleGoalInput = async (goal) => {
    const currentChart = await postSingleGoal(data.path, goal);
    console.log(currentChart);
    setChart((prevChart) => [...prevChart, currentChart]);
  };
  const handleGoalModify = async (goal, modify) => {
    console.log(await modifyGoal(data.path, goal, [...modifies, modify]));
    setModifies((prevModify) => [...prevModify, modify]);
  };
  return (
    <div className="create-article-container">
      <div className="file-input">
        <input
          type="file"
          accept=".csv"
          id="csv_input"
          onChange={(e) => handleCSVInput(e)}
        />
        <label htmlFor="csv_input">
          <i className="fa-solid fa-arrow-up-from-bracket fa-2xl"></i>{" "}
          <p>Upload .csv file to generate visualization</p>
        </label>
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
                <div
                  className="goal-item"
                  key={i}
                  onClick={() => handleGoalInput(goal.question)}
                >
                  <h4>
                    {i + 1}. {goal.question}
                  </h4>
                  <p className="visualization">{goal.visualization}</p>
                  <p>{goal.rationale}</p>
                </div>
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
            const { question, visualization, rationale } = chart.goal;
            return (
              <div className="chart-item" key={i}>
                <div className="visualize-output">
                  <div className="explain">
                    <h3>Topic: {question}</h3>
                    <p>Rationale: {rationale}</p>
                    <p className="visualization">Visualization: {visualization}</p>
                    <textarea cols="30" rows="10"></textarea>
                  </div>
                  <div className="img-container">
                    <img
                      src={`data:image/jpeg;base64,${chart.base64}`}
                      alt=""
                    />
                  </div>
                </div>
                <div className="modify-input">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Modify chart with natural language commands."
                    onChange={(e) => setModify(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => handleGoalModify(chart.goal, modify)}
                  >
                    <i className="fa-solid fa-rotate-right"></i>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CreateArticlePage;
