import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Event from "../components/Event";
import { IEvent } from "../model/Events";

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

    it("modal is closed on render", () => {
        const testData: IEvent = {
            id: 2,
            name: "test",
            joined: true,
            location: "GBG",
            time: "2023-05-15",
            comments: ["kommentar", "en till"],
        };
        render(<Event event={testData} />);

        const modal = screen.queryByTestId("modal");

        expect(modal).toBeNull();
    });
});
