import "./feedbacks.css";
import { Feedback } from "../feedback/feedback";
import { useContext } from "react";
import { NewsContext } from "../../App";

export const Feedbacks = () => {
  const { userfeedbacks } = useContext(NewsContext);
  return (
    <ul className="feedbacks">
      {userfeedbacks.map((feedback) => (
        <Feedback key={feedback.id} feedback={feedback} />
      ))}
    </ul>
  );
};
