import "./feedbacks.css";
import { Feedback } from "../feedback/feedback";
//  
import { useNews } from "../hooks";

export const Feedbacks = () => {
  const { userfeedbacks } = useNews();
  return (
    <ul className="feedbacks">
      {userfeedbacks?.map((feedback) => (
        <Feedback key={feedback.id} feedback={feedback} />
      ))}
    </ul>
  );
};
