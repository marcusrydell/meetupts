import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

// User Story
// Som användare vill jag kunna kommentera på varje möte
describe("Event component", () => {
    it("opens comment modal", () => {
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
