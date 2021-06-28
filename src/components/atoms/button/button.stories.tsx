import React from "react";
import { Story, Meta } from "@storybook/react";

import DsButtonComponent from "./button.component";
import { ButtonProps } from "./button.types";

export default {
  title: "Atoms/Button",
  component: DsButtonComponent,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <DsButtonComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  buttonType: 'primary',
  label: "Button",
  size: "medium",
};

export const Secondary = Template.bind({});
Secondary.args = {
  buttonType: 'secondary',
  label: "Button",
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  buttonType: 'secondary',
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  buttonType: 'secondary',
  size: "small",
  label: "Button",
};

export const OnClick = Template.bind({});
OnClick.args = {
  buttonType: 'secondary',
  size: "large",
  label: "Button",
  // eslint-disable-next-line no-alert
  onClick: () => alert("Clicked the button!"),
};
