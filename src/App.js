import { createContext, useState } from "react";
import "./assets/css/main.css";
import "./assets/css/normalize.css";
import { AuthApp } from "./auth-app";
import { UnAuthRoutes } from "./routes";

export const AuthContext = createContext();

function App() {
  const [login, setLogin] = useState();
  

  return (
    <AuthContext.Provider value={{ login, setLogin }}>
        {login ? <AuthApp/> : <UnAuthRoutes />}
        {/* <Routes /> */}
    </AuthContext.Provider>
  );
}

export default App;
