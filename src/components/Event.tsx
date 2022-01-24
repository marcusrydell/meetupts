import style from "../styles/Event.module.css";
import { useState, useContext } from "react";
import CustomModal from "./CustomModal";
import { Segment, Button } from "semantic-ui-react";

import { Context } from "../context/Context";

function Event({ event, updateParent }: any): JSX.Element {
    const [showModal, setShowModal] = useState(false);

    function test() {}

    return (
        <Segment className={style.eventContainer} onClick={test}>
            <h3>{event.name}</h3>

            <div className={style.eventText}>
                <p>Var</p>
                <p>{event.location}</p>
            </div>
            <div className={style.eventText}>
                <p>När: {event.time}</p>
            </div>
            {event.joined && (
                <Button
                    fluid
                    color="red"
                    onClick={() => updateParent(event.id)}
                >
                    Leave
                </Button>
            )}
            {!event.joined && (
                <Button
                    fluid
                    color="green"
                    onClick={() => updateParent(event.id)}
                >
                    Join
                </Button>
            )}
        </Segment>
    );
}

export default Event;
