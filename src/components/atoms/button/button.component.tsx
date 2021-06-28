import React from "react";
import "./button.style.scss";
import { ButtonProps } from "./button.types";

class DsButtonComponent extends React.Component<ButtonProps> {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    return (
      <button
        aria-label={this.props.label}
        type={this.props.type}
        className={[
          "ds-button",
          `ds-button--${this.props.size}`,
          `ds-button--${this.props.buttonType}`,
        ].join(" ")}
        onClick={this.props.onClick}
      >
        {this.props.label}
      </button>
    );
  }
}

export default DsButtonComponent;
