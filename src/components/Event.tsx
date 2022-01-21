import style from "../styles/Event.module.css";
import{useState} from 'react'

function Event({ event }: any): JSX.Element {

    const [showModal, setShowModal] = useState(false)

    return (
        <div className={style.eventContainer} onClick={()=>{
            setShowModal(true)
        }}>
            <h3 >{event.name}</h3>

            <div className={style.eventText}>
                <p>Var</p>
                <p>{event.location}</p>
            </div>
            <div className={style.eventText}>
                <p>När: {event.time}</p>
                
            </div>
        </div>
    );
}

export default Event;
