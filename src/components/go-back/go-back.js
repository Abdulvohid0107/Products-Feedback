import { Link } from "react-router-dom"
import "./go-back.scss"


export const GoBack = ({children}) => {
  return <div className="go-back__wrapper">
    <Link to={"/"} className="go-back">Go Back</Link>
    {children}
  </div>
}