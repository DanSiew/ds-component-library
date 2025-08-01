import { useState } from "react";
import "./input-box.styles.scss";
import { InputBoxError, InputBoxProps } from "./input-box.types";

function InputBox(props: InputBoxProps) {
  const [value, setValue] = useState<string>(props.value || "");
  const [error, setError] = useState<InputBoxError[]>();

  const handleBlur = () => {
    let newError: InputBoxError[] = [];
    if (props.required && value === "") {
      newError.push({
        errorMessage: `${props.label} is required`,
        type: "required",
      });
    }
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (props.handleChange) {
      props.handleChange(newValue);
    }
    let newError: InputBoxError[] = [];
    if (props.minValue > 0 && newValue.length < props.minValue) {
      newError.push({
        errorMessage: `${props.label} must be at least ${props.minValue} characters`,
        type: "minLength",
      });
    } else {
      if (props.pattern && !new RegExp(props.pattern).test(newValue)) {
        
        newError.push({
          errorMessage:
            props.patternErrorMessage || `${props.label} is invalid`,
          type: "pattern",
        });
      }
    }
    if (props.maxValue > 0 && newValue.length > props.maxValue) {
      newError.push({
        errorMessage: `${props.label} must be at most ${props.maxValue} characters`,
        type: "maxLength",
      });
    }

    setError(newError);
  };

  return (
    <div className="input-box-container">
      <div className="input-box__label">{props.label}</div>
      <div className="input-box__wrapper">
        <input
          id={`input-${props.name}`}
          type="text"
          name={props.name}
          placeholder={props.placeholder ? props.placeholder : "Enter value"}
          aria-label={props.label}
          className="input-box__input"
          style={{
            maxWidth: props.maxWidth > 0 ? props.maxWidth + "px" : "100%",
          }}
          value={value}
          onChange={onChange}
          onBlur={handleBlur}
        />
      </div>
      {error && error.length > 0 && (
        <div>
          {error.map((err) => (
            <div key={err.type} className="input-box__error">
              {err.errorMessage}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default InputBox;
