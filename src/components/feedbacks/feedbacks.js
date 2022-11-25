import { useSelector } from "react-redux";
import { Feedback } from "../feedback/feedback";
import "./feedbacks.css";

export const Feedbacks = () => {
  const { userfeedbacks } = useSelector((state) => state.userfeedbacks);
  return (
    <ul className="feedbacks">
      {userfeedbacks?.map((feedback) => (
        <Feedback key={feedback.id} feedback={feedback} />
      ))}
    </ul>
  );
};
