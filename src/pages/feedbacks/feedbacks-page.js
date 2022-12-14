import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../../App";
import "../../assets/css/main.css";
import "../../assets/css/normalize.css";
import {
  Button,
  Container,
  FeedbackRoadmap,
  Intro,
  TypesFilter,
  Types,
  Roadmap,
} from "../../components";
import { FeedbackHeader } from "../../components/feedback-header/feedback-header";
import { FeedbackSection } from "../../components/feedbacks-section/feedback-section";
import { Feedbacks } from "../../components/feedbacks/feedbacks";
import { NoFeedback } from "../../components/no-feedback/no-feedback";
import { Wrapper } from "../../components/wrapper/wrapper";
import { API_URL } from "../../consts";
import "../../data/feedbacks-data";
import { feedbacksActions } from "../../store";

export const FeedBacksPage = () => {
  const dispatch = useDispatch(); // bozor o’zgarvotti degani
  const { login } = useContext(AuthContext);

  const { userfeedbacks, loading } = useSelector(
    (state) => state.userfeedbacks
  );

  useEffect(() => {
    if (!userfeedbacks) {
      dispatch(feedbacksActions.setLoading());
      fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
          dispatch(feedbacksActions.setFeedbacks(data));
        })
        .catch((err) => {
          dispatch(feedbacksActions.setError(err));
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <p>loading ...</p>;

  return (
    <Container>
      <Wrapper>
        <FeedbackRoadmap>
          <Intro></Intro>
          <TypesFilter>
            <Types></Types>
          </TypesFilter>
          <Roadmap></Roadmap>
        </FeedbackRoadmap>

        <FeedbackSection>
          <FeedbackHeader>
            <Button className="button__add" to={login ? "add" : "login"}>
              + Add Feedback
            </Button>
          </FeedbackHeader>
          <Feedbacks></Feedbacks>
          {userfeedbacks?.length === 0 ? <NoFeedback /> : ""}
        </FeedbackSection>
      </Wrapper>
    </Container>
  );
};
