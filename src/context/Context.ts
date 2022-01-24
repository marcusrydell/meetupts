import { createContext, useContext } from "react";
import { IEvent } from "../model/Events";

export type GlobalContent = {
    showModal: boolean;
    setShowModal: (e: boolean) => void;
    events: IEvent[];
    setEvents: (e: IEvent[]) => void;
};

export const context = createContext<GlobalContent>({
    showModal: false,
    setShowModal: () => {},
    events: [
        {
            id: 1,
            name: "Bilkrockar",
            joined: true,
            location: "Angered",
            time: "2022-02-14",
            comments: ["420 blz", "44"],
        },
        {
            id: 2,
            name: "Dreamhack",
            joined: false,
            location: "Orten",
            time: "2022-12-14",
            comments: ["420 blz", "44"],
        },
        {
            id: 3,
            name: "Snusträff",
            joined: false,
            location: "Luleå",
            time: "2022-05-14",
            comments: ["420 blz", "44"],
        },
    ],
    setEvents: () => {},
});

export const useGlobalContext = () => {
    return useContext(context);
};
