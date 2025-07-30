import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import SemiCircleChart from "./semi-circle-chart.component";
import { SemiCircleChartProps } from "./semi-circle-chart.types";

describe("Test SemiCircleChartComponent", () => {
  let props: SemiCircleChartProps;

  beforeEach(() => {
    props = {
      percentage: 50,
      colourFill: "#FF3D00",
      text: "2 days to Go",
    };
  });

  const renderComponent = () => render(<SemiCircleChart {...props} />);

  it("should render Semi Circle Chart correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("SemiCircleChartText");
    expect(component).toHaveTextContent("2 days to Go");
  });
});
