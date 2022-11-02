import { Types } from "../types/types"
import "./types-filter.css"

export const TypesFilter = () => {

  const typesFilter = ["All ", "UI ", "UX ", "Enhancement ", "Bug ", "Feature"]

  return <div className="types-filter">
    <ul>
      <li className="">
        <label htmlFor="type">
          <input type="radio" id="type"  />
          {typesFilter.map(typefilter => <Types typefilter={typefilter}></Types>)}
        </label>
      </li>
    </ul>
  </div>
}