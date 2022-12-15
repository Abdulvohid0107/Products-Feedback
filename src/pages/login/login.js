import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";
import "./login.scss";

export const Login = () => {
  const { setLogin } = useContext(AuthContext);

  const navigate = useNavigate();

  const userNameRef = useRef();
  const passwordRef = useRef();

  const handleLoginSubmit = (evt) => {
    evt.preventDefault();
    const user = {
      username: userNameRef.current.value,
      password: passwordRef.current.value,
    };
    setLogin(user);
    navigate("/");
  };

  return (
    <div className="login__body">
      <h1 className="login__title">Login</h1>
      <form className="login__form" onSubmit={handleLoginSubmit}>
        <div className="row">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            autoComplete="off"
            placeholder="email@example.com"
            ref={userNameRef}
            defaultValue="sunnatillaabdulvohid@gmail.com"
          />
        </div>
        <div className="row">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" ref={passwordRef} defaultValue="dontrepeatyourself" />
        </div>
        <button className="login__button" type="submit">Login</button>
      </form>
    </div>
  );
};
