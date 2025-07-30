import { JSX } from "react";
import { ButtonProps } from "./button.types";
import "./button.styles.scss";

export default function Button(props: ButtonProps): JSX.Element {
  return (
    <button
      aria-label={props.label}
      type={props.type}
      className={[
        "ds-button",
        `ds-button--${props.size}`,
        `ds-button--${props.buttonType}`,
      ].join(" ")}
      onClick={() => props.onClick?.(props.event)}
    >
      {props.label}
    </button>
  );
}
