import { useContext } from "react"
import { NewsContext } from "../../auth-app"

export const useNews = () => { // bu Hook'ni nomi useNews'ligini sababi, Hook'lar har doim "use" bilan 
  // boshlanishi shart, agar unga boshqa nom beradigan bo'lsak component uni oddiy funktsiya deb o'ylashi mumkin, 
  // chunki biza faqat Hookni ichida Hook'ni chaqirishimiz mumkin, yoki componentni ichida Hookni chaqirishimiz mumkin, 
  // oddiy funktsiyalarni ichida biza Hook'larni chaqira olmaymiz
  const values = useContext(NewsContext)
  return values
}