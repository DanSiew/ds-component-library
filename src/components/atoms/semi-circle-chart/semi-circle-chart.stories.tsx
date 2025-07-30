import { Meta, StoryFn } from "@storybook/react-webpack5";
import SemiCircleChartComponent from "./semi-circle-chart.component";
import { SemiCircleChartProps } from "./semi-circle-chart.types";

export default {
  title: "Atoms/Semi circle chart",
  component: SemiCircleChartComponent,
  argTypes: {
    colourFill: { control: "color" },
  },
} as Meta;

const Template: StoryFn<SemiCircleChartProps> = (args) => (
  <SemiCircleChartComponent {...args} />
);

export const DefaultChart = Template.bind({});
DefaultChart.args = {
  percentage: 50,
  colourFill: "#FF3D00",
  text: "2 days to Go"
};
