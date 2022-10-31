import "./intro.css"

export const Intro = ({children, introText, introBoard, className = ""}) => {
  return <div className={"intro " + className}> {children}
    <p className="intro__mentor">{introText}</p>
    <p className="intro__board">{introBoard}</p>
  </div>
}