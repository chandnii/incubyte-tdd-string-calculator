import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Calculator from "../components/Calculator";

describe("Calculator Component", () => {
  test("renders calculator UI correctly", () => {
    render(<Calculator />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByText("⌫")).toBeInTheDocument();
    expect(screen.getByText("➡")).toBeInTheDocument();
    expect(screen.getByText("Incubyte Assignment")).toBeInTheDocument();
  });

  test("allows user to input numbers via UI buttons", () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("3"));
    expect(screen.getByRole("textbox")).toHaveValue("123");
  });

  test("allows user to input numbers via keyboard", async () => {
    render(<Calculator />);
    await userEvent.keyboard("456");
    expect(screen.getByRole("textbox")).toHaveValue("456");
  });

  test("calculates sum correctly using UI", () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText(","));
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("➡"));
    expect(screen.getByRole("textbox")).toHaveValue("3");
  });

  test("calculates sum correctly using keyboard", async () => {
    render(<Calculator />);
    await userEvent.keyboard("1,2");
    expect(screen.getByRole("textbox")).toHaveValue("1,2");
  });

  test("clears input when clear button is pressed", () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("⌫"));
    expect(screen.getByRole("textbox")).toHaveValue("");
  });

  test("clears input when Backspace key is pressed", async () => {
    render(<Calculator />);
    await userEvent.keyboard("12{Backspace}");
    expect(screen.getByRole("textbox")).toHaveValue("1");
  });
});
