import lamp from "../../assets/images/lamp.svg";
import "./feedback-header.css";

export const FeedbackHeader = ({ children }) => {

  return (
    <header className="site-header">
      <div className="site-header__container">
        <div className="site-header__title-sort-wrapper">
          <div className="site-header__title-wrapper">
            <img src={lamp} alt="Lamp" />
            <h3 className="site-header__title">
              <span className="site-header__title-span">6</span>
              Suggestions
            </h3>
          </div>
          <div className="site-header__sort-wrapper">
            <p className="site-header__sort">Sort by : </p>
            <h4 className="site-header__sort-title"> Most Upvotes</h4>
            <button className="site-header__sort-button">
              <span className="visually-hidden">
                There is a button for pop-up
              </span>
            </button>

            {/* <ul className="site-header-sort__wrapper">
            <li className="site-header__sort-item">
              <p className="site-header__sort-text">Most Upvotes</p>
            </li>
            <li className="site-header__sort-item">
              <p className="site-header__sort-text">Least Upvotes</p>
            </li>
            <li className="site-header__sort-item">
              <p className="site-header__sort-text">Most Comments</p>
            </li>
            <li className="site-header__sort-item">
              <p className="site-header__sort-text">Least Comments</p>
            </li>
          </ul> */}
          </div>
        </div>
        {children}
        {/* <button>  add</button> */}
        {/* {login ? onclick(() => navigate("/add")) : onclick(() => navigate("/login"))} */}
      </div>
    </header>
  );
};

// const elButton = document.querySelector(".site-header__sort-button")
// console.log(elButton);
// elButton.addEventListener("click", () => {
//   elButton.classList.toggle("site-header__sort-button--opened")
// })
