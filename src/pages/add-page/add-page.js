import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { NewsContext } from "../../App";
import { Input } from "../../components";
import { AddEditCard } from "../../components/add-edit-card/add-edit-card";
import { Button } from "../../components/button";
import { CardICon } from "../../components/card-icon/card-icon";
import { Container } from "../../components/container/container";
import { GoBack } from "../../components/go-back/go-back";
import { TitleAddEdit } from "../../components/title-add-edit/title-add-edit";
import "./add-page.scss";


export const AddPage = () => {
  const navigate = useNavigate();

  const feedbackRef = useRef();
  const reasonRef = useRef();
  const { userfeedbacks, setFeedbacks } = useContext(NewsContext);

  const months = ["UX", "UI", "Enhancement", "Bug", "All", "Feature"];
  const random = Math.floor(Math.random() * months.length);
  const featureRandom = (random, months[random])

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const feedbackValue = feedbackRef.current.value;
    const reasonValue = reasonRef.current.value;

    const newFeedback = {
      id: Math.floor(Math.random() * 1000),
      feedback: feedbackValue,
      reason: reasonValue,
      type: featureRandom,
      likes: 112,
      comments: 2,
    };
    setFeedbacks([...userfeedbacks, newFeedback]);
    navigate("/");
  };

  return (
    <Container className="add-edit-page">
      <GoBack to={"/"}></GoBack>
      <AddEditCard>
        <div className="add-edit-card__container">
          <span className="add-edit-card__span">
            <CardICon className="card-icon__plus" />
          </span>
          <TitleAddEdit>Create New Feedback</TitleAddEdit>
          <form onSubmit={handleFormSubmit}>
            <Input ref={feedbackRef} title />
            <Input ref={reasonRef} />
            <div className="add-edit-card__button-wrapper">
              <Button className="button__cancel" to={"/"}>
                Cancel
              </Button>
              <Button>Add Feedback</Button>
            </div>
          </form>
        </div>
      </AddEditCard>
    </Container>
  );
};
