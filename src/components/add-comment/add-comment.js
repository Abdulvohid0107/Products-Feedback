import { Button } from "../button/button"
import "./add-comment.scss"

export const AddComment = () => {
  return <div className="add-comment">
    <h3 className="add-comment__title">Add comment</h3>
    <input placeholder="Type your comment here" className="add-comment__input"></input>
    <div className="add-comment__button-wrapper">
      <p className="add-comment__characters"><span className="add-comment__span">250</span> Characters left</p>
      <Button>
        Post Comment
      </Button>
    </div>
  </div>
}