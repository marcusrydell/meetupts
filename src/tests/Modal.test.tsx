import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("Modal component", () => {
    it("opens modal", () => {
        render(<App />);
        userEvent.click(screen.getByText("Bilkrockar"));
        const headerEl = screen.getByText("Comments");
        expect(headerEl).toBeInTheDocument();
    });
    it("posts and renders a comment", () => {
        render(<App />);
        userEvent.click(screen.getByText("Bilkrockar"));
        userEvent.type(
            screen.getByPlaceholderText("Write a comment"),
            "Test x32"
        );
        userEvent.click(screen.getByText("Add comment"));
        const comment = screen.getByText("Test x32");
        expect(comment).toBeInTheDocument();
    });
});
