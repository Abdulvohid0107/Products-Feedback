import { Types } from "../types/types";
import "./types-filter.scss";

export const TypesFilter = () => {
  const typesFilter = ["All ", "UI ", "UX ", "Enhancement ", "Bug ", "Feature"];

  return (
    <div className="types-filter">
      <ul className="types-filter__list">
        {typesFilter.map((typefilter, index) => (
          <li className="types-filter__item">
            <Types key={typesFilter.length} typefilter={typefilter}></Types>
          </li>
        ))}
      </ul>
    </div>
  );
};
