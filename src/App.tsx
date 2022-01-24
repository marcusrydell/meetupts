import { useContext, useState } from "react";
import Event from "./components/Event";
import style from "./styles/App.module.css";
import { IEvent } from "./model/Events";
import Modal from "./components/Modal";
import { context } from "./context/context";
// import { eventCtx } from "./context/eventsCtx";

const data: IEvent[] = [
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
];

function App() {
    const [modal, setModal] = useState<IEvent[]>([]);
    const [showModal, setShowModal] = useState<boolean>(false);
    const { events, setEvents } = useContext(context);

    function fixModal(id: number, e: any) {
        if (e.target.nodeName == "BUTTON") return;

        const index = events.findIndex((item: IEvent) => {
            console.log("hej", item);

            return item.id === id;
        });
        const event = events[index];

        setModal([event]);
        setShowModal(true);
    }

    function eventHasUpdated(id: number) {
        const moddedEvents = [...events];
        moddedEvents[events.findIndex((item) => item.id === id)].joined =
            !moddedEvents[events.findIndex((item) => item.id === id)].joined;
        setEvents([...events]);
    }

    return (
        <context.Provider
            value={{ showModal, setShowModal, events, setEvents }}
        >
            <div className={style.app}>
                <h1>Events</h1>
                {events.map((event) => {
                    return (
                        <div
                            key={event.id}
                            onClick={(e) => fixModal(event.id, e)}
                        >
                            <Event
                                event={event}
                                updateParent={eventHasUpdated}
                            />
                        </div>
                    );
                })}
                {showModal && <Modal event={modal[0]} data-testid="modal" />}
            </div>
        </context.Provider>
    );
}

export default App;
