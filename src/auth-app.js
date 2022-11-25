import { createContext, useState } from "react";
import { Routes } from "./routes";

export const NewsContext = createContext();

export const AuthApp = () => {
  const [userfeedbacks, setFeedbacks] = useState();
 

  return (
    <NewsContext.Provider value={{ userfeedbacks, setFeedbacks }}>
      <Routes />
    </NewsContext.Provider>
  );
};
