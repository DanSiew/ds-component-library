
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import DonutChart from "./donut-chart.component";
import { DonutChartProps } from "./donut-chart.types";

describe("DonutChart Component", () => {
  let props: DonutChartProps;

  beforeEach(() => {
    props = {
      sortValues: ["20 30", "30 40", "50 50"],
      colors: ["#6495ED", "goldenrod", "#cd5c5c"],
      percentage: "69%",
    };
  });

  const renderComponent = () => render(<DonutChart {...props} />);

  it("should render sortValues correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("DonutChart");

    expect(component).toHaveTextContent("69%3450 widgets");
  });
});
