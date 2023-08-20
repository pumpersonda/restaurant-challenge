import { render, screen } from "@testing-library/react";
import ButtonView from "@/components/atoms/button/ButtonView";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a heading", () => {
    render(<ButtonView url="https://google.com" />);

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
