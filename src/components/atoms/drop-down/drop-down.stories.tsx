import { Meta, StoryFn } from "@storybook/react-webpack5";
import Dropdown from "./drop-down.component";
import { DropdownProps } from "./drop-down.types";

export default {
  title: "Atoms/Dropdown",
  component: Dropdown,
} as Meta;

const Template: StoryFn<DropdownProps> = (args) => <Dropdown {...args} />;

export const DropdownWithItems = Template.bind({});
DropdownWithItems.args = {
  label: "State",
  name: "state",
  placeholder: "Select a state",
  required: true,
  options: [
    { label: "Australian Capital Territory", value: "ACT" },
    { label: "New South Wales", value: "NSW" },
    { label: "Northern Territory", value: "NT" },
    { label: "Queensland", value: "QLD" },
    { label: "South Australia", value: "SA" },
    { label: "Tasmania", value: "TAS" },
    { label: "Victoria", value: "VIC" },
    { label: "Western Australia", value: "WA" },
  ],
  maxWidth: 300,
  handleChange: (option: any) => console.log("Selected option:", option),
};
export const DropdownWithSelectedItem = Template.bind({});
DropdownWithSelectedItem.args = {
  label: "State",
  name: "state", 
  placeholder: "Select a state",
  required: false,
  options: [
    { label: "Australian Capital Territory", value: "ACT" },
    { label: "New South Wales", value: "NSW" },
    { label: "Northern Territory", value: "NT" },
    { label: "Queensland", value: "QLD" },
    { label: "South Australia", value: "SA" },
    { label: "Tasmania", value: "TAS" },
    { label: "Victoria", value: "VIC" },
    { label: "Western Australia", value: "WA" },
  ],
  maxWidth: 0,
  selectedItem: { label: "New South Wales", value: "NSW" },
};
