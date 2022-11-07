import "./add-edit-card.scss"

export const AddEditCard = ({children}) => {
  return <div className="add-edit-card">
    <div className="add-edit-card__container">
      <span>
        {children}
      </span>
      <h1 className="add-edit-card__title">{children}</h1>
    </div>
  </div>
}