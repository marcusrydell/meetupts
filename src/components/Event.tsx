import style from "../styles/Event.module.css";

function Event({ event }: any): JSX.Element {
    // const [date, setDate] = useState(
    //     new Date(props.data.time * 1000).toLocaleDateString("sv")
    // );

    return (
        <div className={style.eventContainer}>
            <h3>{event.name}</h3>

            <div className={style.eventText}>
                <p>Var</p>
                <p>{event.location}</p>
            </div>
            <div className={style.eventText}>
                <p>När</p>
                <p>Nu</p>
            </div>
        </div>
    );
}

export default Event;
