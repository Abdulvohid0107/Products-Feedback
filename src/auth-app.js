import { createContext, useEffect, useState } from "react";

import { API_URL } from "./consts";
import { Routes } from "./routes";

export const NewsContext = createContext();

export const AuthApp = () => {
  const [userfeedbacks, setFeedbacks] = useState();
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setFeedbacks(data);
      })
      .finally(() => {
        setLoading(false)
      })
  }, []);

  if(isLoading) return <p>loading ...</p>

  return (
    <NewsContext.Provider value={{ userfeedbacks, setFeedbacks }}>
      <Routes />
    </NewsContext.Provider>
  );
};
