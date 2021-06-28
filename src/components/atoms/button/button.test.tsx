import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import DsButtonComponent from "./button.component";

describe("Button", () => {
  test("renders a default button with text", async () => {
    render(<DsButtonComponent label="Click me"></DsButtonComponent>);

    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  test("renders a button with custom colors", async () => {
    render(<DsButtonComponent backgroundColor="#A78BFA" label="Click me"></DsButtonComponent>);

    expect(screen.getByText("Click me")).toHaveStyle({
      backgroundColor: "#A78BFA",
    });
  });
  test("handles onClick", async () => {
    const mockOnClick = jest.fn();
    render(<DsButtonComponent onClick={mockOnClick} label="Click me"></DsButtonComponent>);
    fireEvent.click(screen.getByText("Click me"));

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
