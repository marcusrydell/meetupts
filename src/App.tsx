import { useContext, useState } from "react";
import Event from "./components/Event";
import style from "./styles/App.module.css";
import { IEvent } from "./model/Events";
import Modal from "./components/Modal";
import { context } from "./context/context";

function App() {
    const { events, setEvents } = useContext(context);
    const [modal, setModal] = useState<IEvent[]>([]);
    const [showModal, setShowModal] = useState<boolean>(false);

    function fixModal(id: number, e: any) {
        if (e.target.nodeName == "BUTTON") return;

        const index = events.findIndex((item: any) => item.id === id);
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
        </context.Provider>
    );
}

export default App;
