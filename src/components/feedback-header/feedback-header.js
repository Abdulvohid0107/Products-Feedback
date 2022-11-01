import "./feedback-header.css"
import lamp from "../../assets/images/lamp.svg"

export const FeedbackHeader = ({children}) => {
  return <header className="site-header">
    <div className="site-header__container">
      <div className="site-header__title-sort-wrapper">
        <div className="site-header__title-wrapper">
          <img src={lamp} alt="Lamp"/>
          <h3 className="site-header__title">
            <span className="site-header__title-span">6</span>Suggestions
          </h3>
        </div>
        <div className="site-header__sort-wrapper">
          <p className="site-header__sort">Sort by : </p>
          <h4 className="site-header__sort-title"> Most Upvotes</h4>
        </div>
      </div>
    {children}
    </div>
  </header>
}