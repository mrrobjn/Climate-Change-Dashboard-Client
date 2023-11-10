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
import { toast } from "react-toastify";

const ChartItem = ({ chart, index }) => {
  const [modify, setModify] = useState("");
  const [modifies, setModifies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector(dataSummary);

  const { question, visualization, rationale } = chart;

  const handleGoalModify = async (goal) => {
    setIsLoading(true);
    try {
      const newBase64 = await modifyGoal(data.path, goal, [
        ...modifies,
        modify,
      ]);
      setModifies((prevModify) => [...prevModify, modify]);
      dispatch(updateChart({ index, base64: newBase64 }));
      setModify("")
    } catch (error) {
      toast.error(error.response.data.message);
      setIsLoading(false);
    }
    setIsLoading(false);
  };
  const handleRemove = () => {
    dispatch(removeChart(index));
  };
  const handleInput = (desc) => {
    dispatch(updateDesc({ index, desc }));
  };
  
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
              onChange={(e) => handleInput(e.target.value)}
              disabled={isLoading}
            ></textarea>
            <div className="modify-input">
              <input
                type="text"
                name=""
                id=""
                placeholder="Modify chart with natural language commands."
                onChange={(e) => setModify(e.target.value)}
                disabled={isLoading}
                value={modify}
              />
              <button
                type="button"
                onClick={() => handleGoalModify(chart.question)}
                disabled={isLoading}
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
