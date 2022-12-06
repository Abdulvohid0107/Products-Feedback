
export const Select = ({categoryRef}) => {
  return (
      <select ref={categoryRef} name="category" id="category" className="add-page__select">
        <option value="Feature" className="add-page__option">
          Feature
        </option>
        <option value="UI" className="add-page__option">
          UI
        </option>
        <option value="UX" className="add-page__option">
          UX
        </option>
        <option value="Enhancement" className="add-page__option">
          Enhancement
        </option>
        <option value="Bug" className="add-page__option">
          Bug
        </option>
      </select>

  );
};
