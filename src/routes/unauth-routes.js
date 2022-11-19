import { Navigate, useRoutes } from "react-router-dom";
import { Login } from "../pages/login";

const unAuthRoutes = [
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "*",
    element: <Navigate to={"/login"} /> 
  }
]

export const UnAuthRoutes = () => {
  const elements = useRoutes(unAuthRoutes)
  return elements
}