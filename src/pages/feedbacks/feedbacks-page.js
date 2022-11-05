import "../../assets/css/main.css"
import "../../assets/css/normalize.css"
import { Button } from "../../components/button/button"
import { Container } from "../../components/container/container"
import { FeedbackHeader } from "../../components/feedback-header/feedback-header"
import { FeedbackRoadmap } from "../../components/feedbacks-roadmap/feedback-roadmap"
import { FeedbackSection } from "../../components/feedbacks-section/feedback-section"
import { Feedbacks } from "../../components/feedbacks/feedbacks"
import { Intro } from "../../components/intro/intro"
import { Roadmap } from "../../components/roadmap/roadmap"
import { TypesFilter } from "../../components/types-filter/types-filter"
import { Types } from "../../components/types/types"
import { Wrapper } from "../../components/wrapper/wrapper"

export const FeedBacksPage = () => {
  return <Container>
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
        <Button></Button>
      </FeedbackHeader>
      <Feedbacks></Feedbacks>
    </FeedbackSection>
  </Wrapper>
</Container>
}