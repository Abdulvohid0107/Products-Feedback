import arrowlike from "../../assets/images/arrow-like.svg";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { feedbacks } from "../../data/feedbacks-data";

export const Feedback = (props) => {
  // const {
    //   feedbacks: { feedback, reason, type, comments },
    // } = props;
  const { id } = useParams();
  const feedback = feedbacks.find((feedback) => feedback.id === +id);
  const [count, setCount] = useState(77);
  console.log(feedback);
  // return null;
  return (
    <div>
      <div className="feedback__content-wrapper">
        <button
          className="feedback__button-like"
          type="button"
          onClick={() => setCount(count + 1)}
        >
          <span className="feedback__button-span"></span>
          <img src={arrowlike} className="feedback__button-img" alt="" />
          <span id="clicks">{count}</span>
        </button>
        <div className="feedback__content">
          <Link to={`/comments-page/id`} className="feedback__item-title">
            {feedback}
          </Link>
          <p className="feedback__reason">{feedback.reason}</p>
          <p className="feedback__type">{feedback.type}</p>
        </div>
      </div>
      <p className="feedback__comment">{feedback.commentscomments}</p>
      </div>
    
  );
};
