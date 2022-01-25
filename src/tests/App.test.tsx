import { render, screen } from "@testing-library/react";
import App from "../App";
import Event from "../components/Event";
import Modal from "../components/Modal";
import { IEvent } from "../model/Events";

// User Story
// Som användare vill jag se möten i ordning från det som är närmast i datum

describe("App Component", () => {
    it("renders without crashing", () => {
        render(<App />);
    });
    it('renders an H1 with the text "Events"', () => {
        render(<App />);

        const headerEl = screen.getByText("Events");

        expect(headerEl).toBeInTheDocument();
    });

    it("renders the Event component without crashing", () => {
        render(<App />);
        const testData: IEvent = {
            id: 2,
            name: "test",
            joined: true,
            location: "GBG",
            time: "2023-05-15",
            comments: ["kommentar", "en till"],
        };
        render(<Event event={testData} />);
    });

    test("modal does not render initially", () => {
        render(<App />);

        const maybeModal = screen.queryByTestId("modal");

        expect(maybeModal).toBeNull();
    });
});
