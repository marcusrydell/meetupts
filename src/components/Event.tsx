import { Segment, Button } from "semantic-ui-react";
import style from "../styles/Event.module.css";

function Event({ event, updateParent }: any): JSX.Element {
    return (
        <Segment className={style.eventContainer}>
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
                    data-testid="leave-btn"
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
