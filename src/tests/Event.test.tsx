import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Event from "../components/Event";
import { IEvent } from "../model/Events";

// User Story
// SomSom användare vill jag kunna anmäla mig till ett möte.
// Som användare vill jag kunna avanmäla mig från ett möte

describe("Event component", () => {
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
});
