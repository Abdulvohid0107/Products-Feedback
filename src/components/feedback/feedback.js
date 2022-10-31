import "./feedback.css"

export const Feedback = (props) => {
  const {feedback: {likes, feedback, reason, type, comments}} = props

  return (
    <li className="feedback">
      <div className="feedback__content-wrapper">
        <p className="feedback__like">{likes}</p>
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