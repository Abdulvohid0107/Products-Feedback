import "./no-feedback.scss"
import Search from "../../assets/images/search.svg"
import { useContext } from "react"
import { AuthContext } from "../../App"
import { Button } from "../button"


export const NoFeedback = () => {
  const {login} = useContext(AuthContext)
  return (
    <div className="no-feedback">
      <img src={Search} alt="" />
      <h1 className="no-feedback__title">There is no feedback yet.</h1>
      <p className="no-feedback__text">Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
      <Button to={login ? "add" : "login"} className="no-feedback__button" children={" +  Add Feedbacks"}/>
    </div>
  )
}