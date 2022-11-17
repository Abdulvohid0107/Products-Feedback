import { useContext, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NewsContext } from "../../App";
import { Input } from "../../components";
import { AddEditCard } from "../../components/add-edit-card";
import { Button } from "../../components/button";
import { CardICon } from "../../components/card-icon/card-icon";
import { Container } from "../../components/container/container";
import { GoBack } from "../../components/go-back/go-back";
import { TitleAddEdit } from "../../components/title-add-edit/title-add-edit";

export const EditPage = () => {
  const { id } = useParams();
  const { userfeedbacks, setFeedbacks } = useContext(NewsContext);

  const navigate = useNavigate();

  const feedbackRef = useRef();
  const reasonRef = useRef();

  const currentFeedbacksItem = userfeedbacks.find(
    (feedbacksItem) => feedbacksItem.id === +id
  );

  if (!currentFeedbacksItem) return <h1>Hech narsa topilmadi</h1>;

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const feedbackValue = feedbackRef.current.value; // shuni destructure qilish kerak
    const reasonValue = reasonRef.current.value;

    const editingFeedback = {
      id: Math.floor(Math.random() * 1000),
      feedback: feedbackValue,
      reason: reasonValue,
      // type: featureRandom,
      likes: 112,
      comments: 2,
    };

    const editingItemIndex = userfeedbacks.findIndex(
      (feedbacksItem) => feedbacksItem.id === +id
    );

    setFeedbacks([
      ...userfeedbacks.slice(0, editingItemIndex),
      editingFeedback,
      ...userfeedbacks.slice(editingItemIndex + 1),
    ]);

    // deleting the feedbacks

    navigate("/");
  };

  const handleDeleteClick = () => {
    const btnIndex = userfeedbacks.findIndex(
      (feedbacksItem) => feedbacksItem.id === +id
    );
    setFeedbacks([
      ...userfeedbacks.slice(0, btnIndex),
      ...userfeedbacks.slice(btnIndex + 1),
    ]);
    navigate("/");
  };

  return (
    <Container className="add-edit-page">
      <GoBack to={`/comments-page/${id}`}></GoBack>
      <AddEditCard>
        <div className="add-edit-card__container">
          <span className="add-edit-card__span--pencil">
            <CardICon pencilicon className="card-icon__pencil" />
          </span>
          <TitleAddEdit>Editing '{currentFeedbacksItem.feedback}'</TitleAddEdit>
          <form onSubmit={handleFormSubmit}>
            <Input
              ref={feedbackRef}
              title
              defaultFeedbackValue={currentFeedbacksItem.feedback}
            />
            <Input ref={reasonRef} />
            <div className="add-edit-card__all-btn-wrapper--edit">
              {/* <Button className="button__delete">
                Delete
              </Button> */}
              <button  onClick={handleDeleteClick}>delete</button>
              <div className="add-edit-card__button-wrapper--edit">
                <Button
                  to={"/"}
                  className="button__cancel button__cancel--edit"
                >
                  Cancel
                </Button>
                <Button>Edit Feedback</Button>
              </div>
            </div>
          </form>
        </div>
      </AddEditCard>
    </Container>
  );
};
