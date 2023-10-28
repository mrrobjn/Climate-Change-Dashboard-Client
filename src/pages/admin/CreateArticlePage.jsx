import { useEffect, useState } from "react";
import "../../assets/scss/pages/admin/CreateArticlePage.scss";
import { uploadCSV } from "../../api/index.js";
const CreateArticlePage = () => {
  const [data, setData] = useState({});
  const handleCSVInput = async (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    setData(await uploadCSV(formData));
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
              return (
                <div className="field-item" key={i}>
                  <h4>#{field.column}</h4>
                  <p>Type: {field.properties.dtype}</p>
                  <p># Unique value: {field.properties.num_unique_values}</p>
                  <div className="samples-list">
                    {field.properties.samples.map((sample, i) => {
                      return (
                        <div className="sample-item" key={i}>
                          {sample}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })
          : ""}
      </div>
      <div className="title">
        <i className="fa-regular fa-lightbulb fa-lg"></i>{" "}
        <h2>Goals Exploration</h2>
      </div>
      <div className="goals-header">
        <i className="fa-solid fa-angle-up"></i> Goals (
        {data && data.goal ? data.goals?.length : 0})
      </div>
      <div className="goals-container">
        {data && data.goals
          ? data.goals.map((goal, i) => {
              return (
                <div className="goal-item" key={i}>
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
    </div>
  );
};

export default CreateArticlePage;
