// import { CardICon } from "../card-icon/card-icon";
// import { Input } from "../../components";
import "./add-edit-card.scss";
// import { Button } from "../button/button";

export const AddEditCard = ({ children }) => {
  return (
    <div className="add-edit-card">
      {children}
      {/* <div className="add-edit-card__container">
        <span className="add-edit-card__span">
          <CardICon className="card-icon__plus" />
        </span>
        {children}
        <Input title/>
        <Input/>
        <div className="add-edit-card__button-wrapper">
          <Button className="button__cancel">Cancel</Button>
          <Button>Add Feedback</Button>
        </div>
      </div> */}
    </div>
  );
};
