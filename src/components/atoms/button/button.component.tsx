import React from "react";
import "./button.style.scss";
import { ButtonProps } from "./button.types";

class DsButtonComponent extends React.Component<ButtonProps> {
  private inputElement: HTMLButtonElement;
  constructor(props: ButtonProps) {
    super(props);
  }

  componentDidMount() {
    if (this.inputElement) {
      this.inputElement.focus();
    }
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
        ref={(el) => (this.inputElement = el)}
        onClick={this.props.onClick}
      >
        {this.props.label}
      </button>
    );
  }
}

export default DsButtonComponent;
