import "./feedback.css";
import arrowlike from "../../assets/images/arrow-like.svg";
import { Link } from "react-router-dom";
// import { API_URL } from "../../consts";
// import { useState } from "react";

export const Feedback = (props) => {

  // const [like, setLike] = useState(likes)

  // const handleLikedClick = () => {

  //   const liked = {
  //     id: id,
  //     likes: setLike(like + 1)
  //   }

  //   fetch(API_URL, {
  //     method: "PATCH",
  //     body: JSON.stringify(liked),
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //   }).then(data => setLike(data.d));
  // };

  const {
    feedback: { title, description, type, commentsCount, id, likes },
  } = props;
  return (
    <li className="feedback">
      <div className="feedback__content-wrapper">
        <button
          className="feedback__button-like"
          type="button"
          // onClick={handleLikedClick}
        >
          <span className="feedback__button-span"></span>
          <img src={arrowlike} className="feedback__button-img" alt="" />
          <span id="clicks">{likes}</span>
        </button>
        <div className="feedback__content">
          <Link to={`/comments-page/${id}`} className="feedback__item-title">
            {title}
          </Link>
          <p className="feedback__reason">{description}</p>
          <p className="feedback__type">{type}</p>
        </div>
      </div>
      <p className="feedback__comment">{commentsCount}</p>
    </li>
  );
};
