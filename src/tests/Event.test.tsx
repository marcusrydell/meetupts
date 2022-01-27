import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Event from "../components/Event";
import App from "../App";
import { IEvent } from "../model/Events";
import userEvent from "@testing-library/user-event";

// User Story
// SomSom användare vill jag kunna anmäla mig till ett möte.
// Som användare vill jag kunna avanmäla mig från ett möte

describe("Event component", () => {
    let mockChangeButton: jest.Mock;

    it("render event without errors", () => {
        const testData: IEvent = {
            id: 2,
            name: "test",
            joined: true,
            location: "GBG",
            time: "2022-02-14",
            comments: ["kommentar", "en till"],
        };
        render(<Event event={testData} />);
    });

    it("Renders event name, location and time", () => {
        const testData: IEvent = {
            id: 2,
            name: "test",
            joined: true,
            location: "GBG",
            time: "2023-05-15",
            comments: ["kommentar", "en till"],
        };
        console.log(testData.time);
        render(<Event event={testData} />);
        const nameEl = screen.getByText(testData.name);
        const locationEl = screen.getByText(testData.location);
        const timeEl = screen.getByText(testData.time, { exact: false });
        expect(nameEl).toBeInTheDocument();
        expect(locationEl).toBeInTheDocument();
        expect(timeEl).toBeInTheDocument();
    });

    it("the updateParent function runs once when clicked", () => {
        const testData: IEvent = {
            id: 2,
            name: "Dreamhack",
            joined: false,
            location: "GBG",
            time: "2022-02-14",
            comments: ["kommentar", "en till"],
        };
        mockChangeButton = jest.fn();
        render(<Event event={testData} updateParent={mockChangeButton} />);
        const btnToClick = screen.getByText(/Join/);

        userEvent.click(btnToClick);

        expect(mockChangeButton.mock.calls.length).toBe(1);
    });

    it("joins an event and changes the button to say leave", () => {
        render(<App />);

        userEvent.click(screen.getAllByText("Join")[0]);

        const leaveButton = screen.getAllByText("Leave")[1];

        expect(leaveButton).toBeInTheDocument();
    });

    it("state persists between reloads", () => {
        render(<App />);

        userEvent.click(screen.getAllByText("Join")[0]);

        render(<App />);

        const leaveButton2 = screen.getAllByText("Leave")[0];
        console.log(leaveButton2);

        expect(leaveButton2).toBeInTheDocument();
    });
});
