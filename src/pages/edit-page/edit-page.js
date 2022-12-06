import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  Input,
  GoBack,
  AddEditCard,
  Button,
  CardICon,
  Container,
  TitleAddEdit,
} from "../../components";
import { API_URL } from "../../consts";
import { feedbacksActions } from "../../store";

export const EditPage = () => {
  const { id } = useParams();
  const [currentFeedbacksItem, setCurrentFeedbacksItem] = useState();
  const [isLoading, setLoading] = useState(false);
  const [isEditing, setEditing] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const feedbackRef = useRef();
  const reasonRef = useRef();

  useEffect(() => {
    // buyoda fetch qilinayotganini sababi aynan o'sha tanlangan elementni olib kelish uchun
    setLoading(true);
    fetch(API_URL + "/" + id)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then((data) => {
        setCurrentFeedbacksItem(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]); // id yozilganini sababi, agar ID o'zgaradigan bo'lsa boshidan fetch qiladi. Misol uchun 5-id li elementni
  // ma'lumotlari fetch qilingan lekin, biza 6-id li elementga o'tib qoldik shu payit boshidan fetch bo'lib 6-id li elementni ma'lumotlarini
  // chiqarib beradi
  if (isLoading) return <p>Loading ...</p>;
  if (!currentFeedbacksItem) return <h1>Hech narsa topilmadi</h1>;

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const feedbackValue = feedbackRef.current.value; // shuni destructure qilish kerak
    const reasonValue = reasonRef.current.value;

    const months = ["UX", "UI", "Enhancement", "Bug", "All", "Feature"];
    const random = Math.floor(Math.random() * months.length);
    const featureRandom = (random, months[random]);

    const editingFeedback = {
      title: feedbackValue,
      description: reasonValue,
      type: featureRandom,
      likes: 112,
      commentsCount: 2,
    };

    setEditing(true);
    fetch(API_URL + "/" + id, {
      // bu fetch aynan edit qilish uchun
      method: "PUT",
      body: JSON.stringify(editingFeedback),
      headers: {
        "Content-type": "Application/JSON",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then((data) => {
        dispatch(feedbacksActions.editFeedbacksItem(data));
        navigate("/");
      })
      .finally(() => {
        setEditing(false);
      });

    // deleting the feedbacks
  };

  const handleDeleteClick = () => {
    fetch(API_URL + "/" + id, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then(() => {
        dispatch(feedbacksActions.deleteFeedbacksItem(id));
        console.log(feedbacksActions.deleteFeedbacksItem(id));
      });
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
          <TitleAddEdit>Editing '{currentFeedbacksItem.title}'</TitleAddEdit>
          <form loading={isEditing} onSubmit={handleFormSubmit}>
            <Input
              ref={feedbackRef}
              title
              defaultFeedbackValue={currentFeedbacksItem.feedback}
            />
            <Input ref={reasonRef} />
            <div className="add-edit-card__all-btn-wrapper--edit">
              <Button onClick={handleDeleteClick} className="button__delete">
                Delete
              </Button>
              {/* <button onClick={handleDeleteClick}>delete</button> */}
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
