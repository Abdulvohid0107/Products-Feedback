import { Types } from "../types/types"
import "./types-filter.css"

export const TypesFilter = () => {

  const typesFilter = ["All ", "UI ", "UX ", "Enhancement ", "Bug ", "Feature"]

  return <div className="types-filter">
    <ul>
      <li className="">  
          {typesFilter.map((typefilter, index) => <Types key={index} typefilter={typefilter}></Types>)}
      </li> 
    </ul>
  </div>
}