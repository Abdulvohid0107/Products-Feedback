import { useContext } from "react"
import { NewsContext } from "../../auth-app"

export const useNews = () => {
  const values = useContext(NewsContext)
  return values
}