import "./types.css";

export const Types = ({ typefilter }) => {
  console.log(typefilter);
  return (
    <label htmlFor={typefilter}>
      <input type="radio" id={typefilter} name="radio" />
      <span className="types__item">{typefilter}</span>
    </label>
  );
};
