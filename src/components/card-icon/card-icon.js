import plus from "../../assets/images/plus.svg"
import pencil from "../../assets/images/pencil.svg"

export const CardICon = ({pencilicon, className = ""}) => {
  if (pencilicon) 
    return (
      <img src={pencil} alt="Pencil" className={className} />
    );
    return (
      <img src={plus} alt="plus" className={className}/>
    )
}