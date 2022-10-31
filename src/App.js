import "./assets/css/main.css"
import "./assets/css/normalize.css"
import { Container } from "./components/container/container";
import { FeedbackHeader } from "./components/feedback-header/feedback-header";
import { FeedbackRoadmap } from "./components/feedbacks-roadmap/feedback-roadmap";
import { FeedbackSection } from "./components/feedbacks-section/feedback-section";
import { Intro } from "./components/intro/intro";
import { Wrapper } from "./components/wrapper/wrapper";

function App() {
  return <Container>
    <Wrapper>
      <FeedbackSection>
        <FeedbackHeader>
    
        </FeedbackHeader>
      </FeedbackSection>
      <FeedbackRoadmap>
      <Intro introText="Frontend Mentor" introBoard="Feedback Board"></Intro>
      </FeedbackRoadmap>
    </Wrapper>
  </Container>
}

export default App;
