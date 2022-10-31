import "./intro.css"

export const Intro = ({children, className = ""}) => {
  return <div className={"intro " + className}> {children}
    <h2 className="intro__mentor">Frontend Mentor</h2>
    <p className="intro__board">Feedback Board</p>
  </div>
}