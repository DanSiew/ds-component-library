import React from "react";
import "./button.style.scss";
import { ButtonProps, ButtonType } from "./button.types";

class DsButtonComponent extends React.Component<ButtonProps> {
  private divProps: any;

  constructor(props:ButtonProps){
    super(props);
    this.divProps = Object.assign({}, this.props);
    delete this.divProps.buttonType;
    delete this.divProps.backgroundColor;
  }

  render() {
    return (
      <button
        aria-label={this.props.label}
        type="button"
        className={[
          "ds-button",
          `ds-button--${this.props.size}`,
          `ds-button--${this.props.buttonType}`,
        ].join(" ")}
        style={{ backgroundColor: this.props.backgroundColor }}
        {...this.divProps}
        onClick={this.props.onClick}
      >
        {this.props.label}
      </button>
    );
  }
}

export default DsButtonComponent;
