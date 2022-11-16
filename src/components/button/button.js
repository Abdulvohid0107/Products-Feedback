import "./button.css"
import { Link } from "react-router-dom";

export const Button = ({children, className = "", to}) => {
  if (to) 
    return (
      <Link className={"button " + className} to={to}>
        {children}
      </Link>
    );
    return (
      <button className={"button " + className}>
        {children}
      </button>
    )
}