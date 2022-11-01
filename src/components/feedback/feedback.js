import "./feedback.css";
import arrowlike from "../../assets/images/arrow-like.svg"
// var clicks = 0;

// function onClick() {
//   clicks += 1;
//   document.getElementById("clicks").innerHTML = clicks;
// };

export const Feedback = (props) => {
  const {feedback: {likes, feedback, reason, type, comments}} = props

  return (
    <li className="feedback">
      <div className="feedback__content-wrapper">
        <button className="feedback__button-like" type="button">
          {/* <span className="feedback__button-span"></span> */}
          <img src={arrowlike} className="feedback__button-img" alt="" />
          <span id="clicks">{likes}</span>
        </button>
        <div className="feedback__content">
          <h3 className="feedback__item-title">{feedback}</h3>
          <p className="feedback__reason">{reason}</p>
          <p className="feedback__type">{type}</p>
        </div>
      </div>
      <p className="feedback__comment">{comments}</p>
    </li>
  )
}