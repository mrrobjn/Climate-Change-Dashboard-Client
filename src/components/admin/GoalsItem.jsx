import { useDispatch } from "react-redux";
import { postSingleGoal } from "../../api";
import { addChart } from "../../redux/slides/VisualizeFormSlice";
import "../../assets/scss/components/admin/GoalItem.scss";
import { toast } from "react-toastify";

const GoalsItem = ({ goal, index, filePath,setIsLoading,isLoading }) => {
  const dispatch = useDispatch();
  const handleGoalInput = async (goal) => {
    if (isLoading) {
      toast.error("Loading visualize, please wait");
    } else {
      setIsLoading(true);
      try {
        const res = await postSingleGoal(filePath, goal);
        dispatch(addChart(res));
      } catch (e) {
        toast.error(e.response.data.error);
      }
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="goal-item" onClick={() => handleGoalInput(goal.question)}>
        <h4>
          {index + 1}. {goal.question}
        </h4>
        <p className="visualization">{goal.visualization}</p>
        <p>{goal.rationale}</p>
      </div>
    </>
  );
};

export default GoalsItem;
