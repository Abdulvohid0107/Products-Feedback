import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../App";
import arrowlike from "../../assets/images/arrow-like.svg";
import { AddComment } from "../../components/add-comment/add-comment";
import { Button } from "../../components/button/button";
import { CommentsItem } from "../../components/comments-item/comments-item";
import { Container } from "../../components";

import { GoBack } from "../../components";
import { UserCommentSection } from "../../components/user-comment/user-comment-section";
import { API_URL } from "../../consts";
import "./comments-page.css";

export const CommentsPage = () => {
  const { id } = useParams();
  // const feedbackItem = userfeedbacks?.find(
  //   (feedbackItem) => feedbackItem.id === +id
  // );
  const [currentFeedbacks, setCurrentFeedbacksItem] = useState();
  const { login } = useContext(AuthContext);

  useEffect(() => {
    fetch(API_URL + "/" + id)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then((data) => {
        setCurrentFeedbacksItem(data);
      });
  }, [id]);

  if (!currentFeedbacks) {
    // fetch bo'lgunicha qanchadur ham vaqt ketadi, o'sha vaqt mobaynida currentFeedbacks undefined'ga teng bo'ladi. sababi useState'ni boshlang'ich xolati undefined
    return <p>Feedback not found </p>;
  }

  return (
    <Container className="user-comments-container">
      <GoBack to={"/"}>
        <Button to={login ? "edit" : "login"} className="button__edit">
          Edit Feedback
        </Button>
      </GoBack>

      <div className="feedback feedbacks__comments-page">
        <div className="feedback__content-wrapper">
          <button className="feedback__button-like" type="button">
            <span className="feedback__button-span"></span>
            <img src={arrowlike} className="feedback__button-img" alt="" />
            <span id="clicks">{currentFeedbacks.likes}65</span>
          </button>
          <div className="feedback__content">
            <Link to={`/comments-page/${id}`} className="feedback__item-title">
              {currentFeedbacks.title}
            </Link>
            <p className="feedback__reason">{currentFeedbacks.description}</p>
            <p className="feedback__type">{currentFeedbacks.type}</p>
          </div>
        </div>
        <p className="feedback__comment">{currentFeedbacks.commentsCount}</p>
      </div>
      <UserCommentSection>
        <CommentsItem></CommentsItem>
      </UserCommentSection>
      <AddComment></AddComment>
    </Container>
  );
};
