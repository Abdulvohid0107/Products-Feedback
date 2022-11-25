import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components";
import { AddEditCard } from "../../components/add-edit-card/add-edit-card";
import { Button } from "../../components";
import { CardICon } from "../../components";
import { Container } from "../../components";

import { GoBack } from "../../components";
import { TitleAddEdit } from "../../components";

import { API_URL } from "../../consts";
import { feedbacksActions } from "../../store";

import "./add-page.scss";

export const AddPage = ({ loading }) => {
  const navigate = useNavigate();

  const feedbackRef = useRef();
  const reasonRef = useRef();

  const dispatch = useDispatch();

  const [isLoading, setLoading] = useState(false);

  const months = ["UX", "UI", "Enhancement", "Bug", "All", "Feature"];
  const random = Math.floor(Math.random() * months.length);
  const featureRandom = (random, months[random]);

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const feedbackValue = feedbackRef.current.value;
    const reasonValue = reasonRef.current.value;

    const newFeedback = {
      title: feedbackValue,
      description: reasonValue,
      type: featureRandom,
      likes: 112,
      commentsCount: 2,
      status: "planned",
      comments: [],
    };

    setLoading(true);
    fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(newFeedback),
      headers: { "Content-type": "Application/json" },
    })
      .then((res) => {
        if (res.status === 201) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then((data) => {
        dispatch(feedbacksActions.addFeedbacksItem(data));
        navigate("/");
      })
      .finally(() => {
        setLoading(false);
      });
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
          <form loading={isLoading} onSubmit={handleFormSubmit}>
            <Input ref={feedbackRef} title />
            <Input ref={reasonRef} />
            <div className="add-edit-card__button-wrapper">
              <Button className="button__cancel" to={"/"}>
                Cancel
              </Button>
              <Button disabled={loading}>Add Feedback</Button>
            </div>
          </form>
        </div>
      </AddEditCard>
    </Container>
  );
};
