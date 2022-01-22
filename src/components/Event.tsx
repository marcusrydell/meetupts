import style from "../styles/Event.module.css";
import { useState } from "react";
import CustomModal from "./CustomModal";
import { Segment } from "semantic-ui-react";

function Event({ event }: any): JSX.Element {
	const [showModal, setShowModal] = useState(false);

	function test() {
		
	}

	return (
		<Segment
			className={style.eventContainer}
			onClick={test}
		>
			<h3>{event.name}</h3>

			<div className={style.eventText}>
				<p>Var</p>
				<p>{event.location}</p>
			</div>
			<div className={style.eventText}>
				<p>När: {event.time}</p>
			</div>
			{showModal && <CustomModal data-testid="modal" />}
		</Segment>
	);
}

export default Event;
