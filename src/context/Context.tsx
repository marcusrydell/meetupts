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
            time: "2022-01-14",
            comments: ["Felle Krockar i Angered", "Köpa nya bil"],
        },
        {
            id: 2,
            name: "Dreamhack",
            joined: false,
            location: "Orten",
            time: "2021-12-14",
            comments: ["JOlt Cola och svett", "Dataspel"],
        },
        {
            id: 3,
            name: "Snusträff",
            joined: false,
            location: "Luleå",
            time: "2021-05-14",
            comments: ["Vilken rolig träff", "Gott med snus"],
        },
    ],
    setEvents: () => {},
});

export const useGlobalContext = () => {
    return useContext(context);
};
