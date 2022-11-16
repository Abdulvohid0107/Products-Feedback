import { forwardRef } from "react";
import "./input.scss";

export const Input = forwardRef(({ title }, ref, ...rest) => {
  if (title)
    return (
      <label htmlFor="feedbackTitle" className="input__label">
        Feedback Title
        <span className="input__span">Add a short, descriptive headline</span>
        <input
          {...rest}
          type="text"
          id="feedbackTitle"
          ref={ref}
          className="input__input input__input-title"
        />
      </label>
    );
  return (
    <label htmlFor="feedbackTitle2" className="input__label">
      Feedback Detail
      <span className="input__span">
        Include any specific comments on what should be improved, added, etc.
      </span>
      <input
        type="text"
        id="feedbackTitle2"
        ref={ref}
        className="input__input input__feedback-detail"
      />
    </label>
  );
});
