import { useEffect, useState } from "react";
import Event from "./components/Event";
import style from "./styles/App.module.css";
import { IEvent } from "./model/Events";
import Modal from "./components/Modal";
import { context } from "./context/Context";
import { Button, Segment } from "semantic-ui-react";
function App() {
    const [events, setEvents] = useState<IEvent[]>([
        {
            id: 1,
            name: "Bilkrockar",
            joined: true,
            location: "Angered",
            time: "2022-03-14",
            comments: ["Felle Krockar i Angered", "Köpa nya bil"],
        },
        {
            id: 2,
            name: "Dreamhack",
            joined: false,
            location: "Orten",
            time: "2022-06-25",
            comments: ["JOlt Cola och svett", "Dataspel"],
        },
        {
            id: 3,
            name: "Snusträff",
            joined: false,
            location: "Luleå",
            time: "2022-05-14",
            comments: ["Vilken rolig träff", "Gott med snus"],
        },
    ]);

    function sortByKey(array: any, key: string) {
        return array.sort(function (a: any, b: any) {
            let x = a[key];
            let y = b[key];
            return x < y ? -1 : x > y ? 1 : 0;
        });
    }
    sortByKey(events, "joined").reverse();

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

        const objInLS = JSON.parse(localStorage.getItem("events") || "");

        objInLS[id - 1].joined = !objInLS[id - 1].joined;
        localStorage.setItem("events", JSON.stringify(objInLS));
    }

    useEffect(() => {
        const inLS = localStorage.getItem("events");

        if (!inLS) {
            localStorage.setItem("events", JSON.stringify(events));
        } else {
            setEvents(JSON.parse(inLS));
        }
    }, []);

    return (
        <context.Provider
            value={{ showModal, setShowModal, events, setEvents }}
        >
            <div className={style.app}>
                {!!showModal && <Modal id={modal[0].id} />}
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
