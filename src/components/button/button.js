import "./button.css"
import { Link } from "react-router-dom";

export const Button = ({children, className = "", to, onClick, ...rest}) => {
  if (to) 
    return (
      <Link onClick={onClick} className={"button " + className} to={to}>
        {children}
      </Link>
    );
    return (
      <button onClick={onClick} {...rest} className={"button " + className}>
        {children}
      </button>
    )
}