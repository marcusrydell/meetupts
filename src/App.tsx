import { useState } from "react";
import Event from "./components/Event";
import style from "./styles/App.module.css";
import { IEvent } from "./model/Events";
<<<<<<< HEAD
import Modal from "./components/Modal";
import { modalCtx } from "./context/Context";

=======
import Modal from './components/Modal';
import { Context, ContextProvider } from "./context/Context";
>>>>>>> d9be127e18fb247c74f37c74dd351f67f42058de
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
    const [events, setEvents] = useState<IEvent[]>(data);
    const [modal, setModal] = useState<IEvent[]>([]);
    const [showModal, setShowModal] = useState<boolean>(false);

    function canceled() {
        setModal([]);
        setShowModal(false);
    }

    function newModal(event: object) {
        console.log(event);
    }

    function fixModal(id: number, e: any) {
        if (e.target.nodeName == "BUTTON") return;
        let obj: any = {};

        const index = events.findIndex((item: any) => item.id === id);
        const event = events[index];
        console.log(event);

        setModal([event]);
        //console.log(index);

        setShowModal(true);

        //setModal(events[events.findIndex((item: object) => item.id === id)]);
    }

    function eventHasUpdated(id: number) {
        const moddedEvents = [...events];
        moddedEvents[events.findIndex((item) => item.id === id)].joined =
            !moddedEvents[events.findIndex((item) => item.id === id)].joined;
        setEvents([...events]);
    }

    console.log(modal[0]);

    return (
        <modalCtx.Provider value={{ showModal, setShowModal }}>
            <div className={style.app}>
                {!!showModal && <Modal event={modal[0]} />}
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
            </div>
        </modalCtx.Provider>
    );
}

export default App;
