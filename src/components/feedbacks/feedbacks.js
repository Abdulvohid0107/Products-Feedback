import "./feedbacks.css"
import {Feedback} from "../feedback/feedback"
import {feedbacks} from "../../data/feedbacks-data"

export const Feedbacks = () => {
  // const feedbacks = [
  //   {
  //     id: 1,
  //     feedback: "Add tags for solutions",
  //     reason: "Easier to search for solutions based on a specific stack.",
  //     type: "Enhancement",
  //     likes: 112,
  //     comments: 2,
  //   },
  //   {
  //     id: 2,
  //     feedback: "Add a dark theme option",
  //     reason: "It would help people with light sensitivities and who prefer dark mode.",
  //     type: "Feature",
  //     likes: 99,
  //     comments: 4,
  //   },
  //   {
  //     id: 3,
  //     feedback: "Q&A within the challenge hubs",
  //     reason: "Challenge-specific Q&A would make for easy reference.",
  //     type: "Feature",
  //     likes: 65,
  //     comments: 1,
  //   },
  //   {
  //     id: 4,
  //     feedback: "Allow image/video upload to feedback",
  //     reason: "Images and screencasts can enhance comments on solutions.",
  //     type: "Enhancement", 
  //     likes: 51,
  //     comments: 2,
  //   },
  //   {
  //     id: 5,
  //     feedback: "Ability to follow others",
  //     reason: "Stay updated on comments and solutions other people post.",
  //     type: "Feature",
  //     likes: 42,
  //     comments: 3,
  //   },
  //   {
  //     id: 6,
  //     feedback: "Preview images not loading",
  //     reason: "Challenge preview images are missing when you apply a filter.",
  //     type: "Bug",
  //     likes: 3,
  //     comments: 0,
  //   },
  // ]

  return <ul className="feedbacks">
    {feedbacks.map(feedback => <Feedback key={feedback.id} feedback={feedback}/>)}
  </ul>
}