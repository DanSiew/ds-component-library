// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import semi-circle-chart from "./semi-circle-chart";
import { semi-circle-chartProps } from "./semi-circle-chart.types";

describe("Test Component", () => {
  let props: semi-circle-chartProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<semi-circle-chart {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("semi-circle-chart");

    expect(component).toHaveTextContent("harvey was here");
  });
});
