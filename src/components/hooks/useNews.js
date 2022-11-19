import { useContext } from "react"
import { NewsContext } from "../../App"

export const useNews = () => {
  const values = useContext(NewsContext)
  return values
}