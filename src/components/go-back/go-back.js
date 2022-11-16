import { Link } from "react-router-dom"
import "./go-back.scss"


export const GoBack = ({children, ...otherlink}) => {
  return <div className="go-back__wrapper">
    <Link {...otherlink} className="go-back">Go Back</Link>
    {children}
  </div>
}