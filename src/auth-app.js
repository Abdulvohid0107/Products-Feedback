import { createContext, useEffect, useState } from "react";
import { Routes } from "react-router-dom";
import { API_URL } from "./consts";

export const NewsContext = createContext();

export const AuthApp = () => {
  const [userfeedbacks, setFeedbacks] = useState();
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
    <NewsContext.Provider
      value={{ userfeedbacks, setFeedbacks }}
    >
      <Routes/>
    </NewsContext.Provider>
  );
};
