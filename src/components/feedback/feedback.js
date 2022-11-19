import "./feedback.css";
import arrowlike from "../../assets/images/arrow-like.svg"
import { useState } from "react";
import { Link } from "react-router-dom";

export const Feedback = (props) => {
  const {feedback: {title, description, type, commentsCount, id}} = props
  const [count, setCount] = useState(77)
  return (
    <li className="feedback">
      <div className="feedback__content-wrapper">
        <button className="feedback__button-like" type="button" onClick={() => setCount(count + 1)}>
          <span className="feedback__button-span"></span>
          <img src={arrowlike} className="feedback__button-img" alt="" />
          <span id="clicks" >{count}</span>
        </button>
        <div className="feedback__content">
          <Link to={`/comments-page/${id}`} className="feedback__item-title">{title}</Link>
          <p className="feedback__reason">{description}</p>
          <p className="feedback__type">{type}</p>
        </div>
      </div>
    <p className="feedback__comment">{commentsCount}</p>
    </li>
  )
}