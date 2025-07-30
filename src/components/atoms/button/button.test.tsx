import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import DsButtonComponent from "./button.component";

describe("Button", () => {

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
    await userEvent.click(screen.getByText("Click me"));

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
