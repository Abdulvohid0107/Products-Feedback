import "./types.scss";

export const Types = ({ typefilter }) => {
  return (
      <li className="types-filter__item">
        <label className="types__label" htmlFor={typefilter}></label>
        <input
          className="types__input visually-hidden"
          type="radio"
          id={typefilter}
          name="radio"
        />
        <span className="types__span">{typefilter}</span>
      </li>
  );
};
