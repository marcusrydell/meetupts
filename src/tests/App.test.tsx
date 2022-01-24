import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App Component", () => {
    it("renders without crashing", () => {
        render(<App />);
    });
    // renders an H1 with the text "Events"
    // renders the Event component without crashing
    // it("modal is closed on render", () => {
    //     const testData: IEvent = {
    //         id: 2,
    //         name: "test",
    //         joined: true,
    //         location: "GBG",
    //         time: "2023-05-15",
    //         comments: ["kommentar", "en till"],
    //     };
    //     render(<Event event={testData} />);
    //     const modal = screen.queryByTestId("modal");
    //     expect(modal).toBeNull();
    // });
});
