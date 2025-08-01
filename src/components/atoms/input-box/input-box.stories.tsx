import { Meta, StoryFn } from "@storybook/react-webpack5";
import InputBox from "./input-box.component";
import { InputBoxProps } from "./input-box.types";

export default {
  title: "Atoms/InputBox",
  component: InputBox,
} as Meta;

const Template: StoryFn<InputBoxProps> = (args) => <InputBox {...args} />;

export const InputBoxWithValidation = Template.bind({});
InputBoxWithValidation.args = {
  label: "Name",
  name: "name",
  placeholder: "Enter your name",
  required: true,
  maxWidth: 300,
  minValue: 2,
  maxValue: 40,
  pattern: "^[a-zA-Z ]+$",
  patternErrorMessage: "Name can only contain letters and spaces",
  handleChange: (value: any) => console.log("Entered name:", value),
}
export const InputBoxWithoutValidation = Template.bind({});
InputBoxWithoutValidation.args = {
  label: "Name",
  name: "name",
  value: "John Doe",
  placeholder: "Enter your name",
  required: false,
  maxWidth: 0,
  minValue: 0,
  maxValue: 0,
  handleChange: (value: any) => console.log("Entered name:", value),
}