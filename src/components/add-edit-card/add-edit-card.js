import { CardICon } from "../card-icon/card-icon"
import "./add-edit-card.scss"

export const AddEditCard = ({children}) => {
  return <div className="add-edit-card">
    <div className="add-edit-card__container">
      <span className="add-edit-card__span">
        <CardICon className="card-icon__plus"/>
      </span>
      .
        {children}
    </div>
  </div>
}