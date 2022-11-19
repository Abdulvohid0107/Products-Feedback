import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";
import "./login.scss";

export const Login = () => {
  const { setLogin } = useContext(AuthContext);

  const navigate = useNavigate()

  const userNameRef = useRef();
  const passwordRef = useRef();

  const handleLoginSubmit = (evt) => {
    evt.preventDefault();
    const user = {
      username: userNameRef.current.value,
      password: passwordRef.current.value,
    };
    setLogin(user);
    navigate("/")
  };

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form autoComplete="off" className="login" onSubmit={handleLoginSubmit}>
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input
                ref={userNameRef}
                type="text"
                className="login__input"
                placeholder="User name / Email"
                name="username"
                required
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input
                ref={passwordRef}
                type="password"
                className="login__input"
                placeholder="Password"
                name="password"
                required
              />
            </div>
            <button className="button login__submit">
              <span className="button__text">Log In Now</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
          <div className="social-login">
            <h3>log in via</h3>
            {/* <div className="social-icons">
              <a hrefLang="https://bfecglobal.uz" className="social-login__icon fab fa-instagram"></a>
              <a hrefLang="https://bfecglobal.uz" className="social-login__icon fab fa-facebook"></a>
              <a hrefLang="https://bfecglobal.uz" className="social-login__icon fab fa-twitter"></a>
            </div> */}
          </div>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
};
