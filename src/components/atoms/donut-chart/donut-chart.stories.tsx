import { Meta, StoryFn } from "@storybook/react-webpack5";
import DsDonutChartComponent from "./donut-chart.component";
import { DonutChartProps } from "./donut-chart.types";

export default {
  title: "Atoms/Donut Chart",
  component: DsDonutChartComponent,
} as Meta;

const Template: StoryFn<DonutChartProps> = (args) => (
  <DsDonutChartComponent {...args} />
);

export const ChartWithPercent = Template.bind({});
ChartWithPercent.args = {
  sortValues: ["20 30", "30 40", "50 50"],
  colors: ["#6495ED", "goldenrod", "#cd5c5c"],
  percentage: "69%",
};
