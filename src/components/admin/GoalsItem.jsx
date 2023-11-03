import { useDispatch } from "react-redux";
import { postSingleGoal } from "../../api";
import { addChart } from "../../redux/slides/VisualizeFormSlice";
import '../../assets/scss/components/admin/GoalItem.scss'

const GoalsItem = ({ goal, index, filePath }) => {
  const dispatch = useDispatch();
  const handleGoalInput = async (goal) => {
    const currentChart = await postSingleGoal(filePath, goal);
    dispatch(addChart(currentChart))
  };

  return (
    <div className="goal-item" onClick={() => handleGoalInput(goal.question)}>
      <h4>
        {index + 1}. {goal.question}
      </h4>
      <p className="visualization">{goal.visualization}</p>
      <p>{goal.rationale}</p>
    </div>
  );
};

export default GoalsItem;
