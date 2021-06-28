import * as React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent, screen } from "@testing-library/react";
import DsButtonComponent from "./button.component";

describe("Button", () => {
  test("creates a snapshot of the button", async () => {
    const component = renderer.create(
      <DsButtonComponent
        type="submit"
        size="small"
        buttonType="primary"
        label="Click me"
      ></DsButtonComponent>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("renders a primary button with text", async () => {
    const { container } = render(
      <DsButtonComponent
        type="submit"
        size="small"
        buttonType="primary"
        label="Click me"
      ></DsButtonComponent>
    );
    expect(container.firstChild).toHaveClass("ds-button--primary");
    expect(container.getElementsByClassName("ds-button--primary")).toBeTruthy();
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  test("renders a secondary button with text", async () => {
    const { container } = render(
      <DsButtonComponent
        type="button"
        size="small"
        buttonType="secondary"
        label="Click me"
      ></DsButtonComponent>
    );
    expect(container.firstChild).toHaveClass("ds-button--secondary");
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  test("handles onClick", async () => {
    const mockOnClick = jest.fn();
    render(
      <DsButtonComponent
        type="button"
        size="small"
        buttonType="secondary"
        onClick={mockOnClick}
        label="Click me"
      ></DsButtonComponent>
    );
    fireEvent.click(screen.getByText("Click me"));

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
