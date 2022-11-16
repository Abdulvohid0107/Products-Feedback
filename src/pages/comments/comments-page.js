import "./comments-page.css"
import { useParams } from "react-router-dom"
import { feedbacks } from "../../data/feedbacks-data";
import { Link } from "react-router-dom";
import arrowlike from "../../assets/images/arrow-like.svg"
import { Container } from "../../components/container/container";
import { UserCommentSection } from "../../components/user-comment/user-comment-section";
import { CommentsItem } from "../../components/comments-item/comments-item";
import { GoBack } from "../../components/go-back/go-back";
import { AddComment } from "../../components/add-comment/add-comment";
import { Button } from "../../components/button/button";


export const CommentsPage = () => {
  const { id } = useParams();
  const feedbackItem = feedbacks.find((feedbackItem) => feedbackItem.id === +id)
  // console.log(id);

  return <Container className="user-comments-container">  

  <GoBack to={"/"}>
    <Button to={"edit"} className="button__edit">Edit Feedback</Button>
  </GoBack>

  <div className="feedback feedbacks__comments-page">
    <div className="feedback__content-wrapper">
      <button className="feedback__button-like" type="button">
        <span className="feedback__button-span"></span>
        <img src={arrowlike} className="feedback__button-img" alt="" />
        <span id="clicks" >{feedbackItem.count}65</span>
      </button>
      <div className="feedback__content">
        <Link to={`/comments-page/${id}`} className="feedback__item-title">{feedbackItem.feedback}</Link>
        <p className="feedback__reason">{feedbackItem.reason}</p>
        <p className="feedback__type">{feedbackItem.type}</p>
      </div>
    </div>
    <p className="feedback__comment">{feedbackItem.comments}</p>
  </div>
  <UserCommentSection>
    <CommentsItem></CommentsItem>
  </UserCommentSection>
  <AddComment>
    
  </AddComment>
  </Container>
}