import { StoryFn, Meta } from "@storybook/react-webpack5";

import DsButtonComponent from "./button.component";

export default {
  title: "Atoms/Button",
  component: DsButtonComponent,
   tags: ['autodocs'],
} as Meta;

const Template: StoryFn<typeof DsButtonComponent> = (args) => (
  <DsButtonComponent {...args} />
);
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
