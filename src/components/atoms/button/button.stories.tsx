import React from "react";
import { Story, Meta } from "@storybook/react";

import DsButtonComponent from "./button.component";
import { ButtonProps } from "./button.types";

export default {
  title: "Atoms/Button",
  component: DsButtonComponent,
} as Meta;

const Template: Story<ButtonProps> = (args) => <DsButtonComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "submit",
  buttonType: "primary",
  label: "Button",
  size: "medium",
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "button",
  buttonType: "secondary",
  label: "Button",
  size: "medium",
};

export const OnClick = Template.bind({});
OnClick.args = {
  type: "button",
  buttonType: "secondary",
  size: "large",
  label: "Button",
  // eslint-disable-next-line no-alert
  onClick: () => alert("Clicked the button!"),
};
