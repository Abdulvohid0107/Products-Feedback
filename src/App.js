import { createContext, useState } from "react";

import "./assets/css/main.css";
import "./assets/css/normalize.css";
import { feedbacks } from "./data/feedbacks-data";
import { Routes } from "./routes/config-routes";

export const NewsContext = createContext();

function App() {
  const [userfeedbacks, setFeedbacks] = useState(feedbacks);
  return (
    <NewsContext.Provider value={{ userfeedbacks, setFeedbacks }}>
      <Routes />
    </NewsContext.Provider>
  );
}

export default App;
