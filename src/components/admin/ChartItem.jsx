import { useState } from "react";
import { modifyGoal } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import {
  removeChart,
  updateChart,
  updateDesc,
} from "../../redux/slides/VisualizeFormSlice";
import "../../assets/scss/components/admin/ChartItem.scss";
import { dataSummary } from "../../redux/selector";

const ChartItem = ({ chart, index }) => {
  const [modify, setModify] = useState("");
  const [modifies, setModifies] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector(dataSummary);
  const { question, visualization, rationale } = chart;
  const handleGoalModify = async (goal, modify) => {
    const newBase64 = await modifyGoal(data.path, goal, [...modifies, modify]);
    setModifies((prevModify) => [...prevModify, modify]);
    dispatch(updateChart({ index, base64: newBase64 }));
  };
  const handleRemove = () => {
    dispatch(removeChart(index));
  };
  const handleInput=(desc)=>{
    dispatch(updateDesc({index,desc}))
  }
  return (
    <>
      <div className="chart-item">
        <div className="visualize-output">
          <div className="img-container">
            <img src={`data:image/jpeg;base64,${chart.base64}`} alt="" />
          </div>
          <div className="explain">
            <div className="control-bar">
              <button type="button" onClick={() => handleRemove()}>
                <i className="fa-solid fa-xmark fa-2xl"></i>
              </button>
            </div>
            <h3>Topic: {question}</h3>
            <p>Rationale: {rationale}</p>
            <p className="visualization">Visualization: {visualization}</p>
            <textarea
              cols="30"
              rows="10"
              placeholder="Describe chart visualized with your own language"
              onChange={(e)=>handleInput(e.target.value)}
            ></textarea>
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
        </div>
      </div>{" "}
    </>
  );
};

export default ChartItem;
