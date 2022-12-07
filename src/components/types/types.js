import "./types.scss";

export const Types = ({ typefilter }) => {
  return (
    <label className="types__label" htmlFor={typefilter}>
      <input className="types__input visually-hidden" type="radio" id={typefilter} name="radio" />
      <span className="types__item">{typefilter}</span>
    </label>
  );
};
