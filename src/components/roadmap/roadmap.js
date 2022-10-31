import "./roadmap.css"

export const Roadmap = ({children})  => {
  return <div className="roadmap">
    {children}
    <div className="roadmap__title-wrapper">
      <h3 className="roadmap__title">Roadmap</h3>
      <a target={"_blank"} rel="noreferrer" href="https://www.google.com"  className="roadmap__view-link">View</a>
    </div>
    <ul className="roadmap__list">
      <li className="roadmap__item roadmap__item--planned">
        <p className="roadmap__item-title">Planned</p>
        <p className="roadmap__item-number">2</p>
      </li>
      <li className="roadmap__item roadmap__item--progress">
        <p className="roadmap__item-title">In-Progress</p>
        <p className="roadmap__item-number">3</p>
      </li>
      <li className="roadmap__item roadmap__item--live">
        <p className="roadmap__item-title">Live</p>
        <p className="roadmap__item-number">1</p>
      </li>
    </ul>
  </div>
}