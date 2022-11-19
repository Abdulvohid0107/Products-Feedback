import { createContext, useEffect, useState } from "react";
import "./assets/css/main.css";
import "./assets/css/normalize.css";
import { Routes, UnAuthRoutes } from "./routes";
import { API_URL } from "./consts";

export const NewsContext = createContext();
export const AuthContext = createContext();

function App() {
  const [userfeedbacks, setFeedbacks] = useState();
  const [login, setLogin] = useState();

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setFeedbacks(data);
        console.log(data.title);
        console.log(data);
      });
  }, []);

  return (
    <AuthContext.Provider value={{ login, setLogin }}>
      <NewsContext.Provider value={{ userfeedbacks, setFeedbacks }}>
        {login ? <Routes /> : <UnAuthRoutes />}
        {/* <Routes /> */}
      </NewsContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
