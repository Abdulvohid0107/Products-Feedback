import { TypesFilter } from "../types-filter/types-filter"
import "./types.css"

export const Types = ({typefilter}) => {

  

  return <span className="types__item">
    {typefilter}
  </span>
}