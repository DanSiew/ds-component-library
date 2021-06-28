import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import DsButtonComponent from "./button.component";

describe("Button", () => {
  test("renders a secondary button with text", async () => {
    render(
      <DsButtonComponent
        size="small"
        buttonType="secondary"
        label="Click me"
      ></DsButtonComponent>
    );

    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  test("renders a button with custom colors", async () => {
    render(
      <DsButtonComponent
        size="small"
        buttonType="secondary"
        backgroundColor="#A78BFA"
        label="Click me"
      ></DsButtonComponent>
    );

    expect(screen.getByText("Click me")).toHaveStyle({
      backgroundColor: "#A78BFA",
    });
  });
  test("handles onClick", async () => {
    const mockOnClick = jest.fn();
    render(
      <DsButtonComponent
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
