import React, { useState, useContext } from "react";
import { Modal, Segment } from "semantic-ui-react";


//Context
//import { eventsCtx } from "../Context";
function Modals(props: any): JSX.Element {
	const [comments, setComments] = useState(props.data.comments); //Get from props
	const [inputText, setInputText] = useState('')
	//const { events, setEvents } = useContext(eventsCtx);

	/*function addComment(id: number){
		//make a copy of events
		const moddedEvents =[...events]
		//modify copied array with new comment
		moddedEvents.find(x=> x.id===id).comments.push(inputText)
	    
		//update events
		setEvents([...moddedEvents])

		//reset input field
		setInputText('')
	}*/

	return (
		<Modal
			size="large"
			onClose={props.canceled}
			open={true}
			className="p-5"
		>
			<h1 className="text-5xl">Comments</h1>
			{comments.map((comment: string, index: number) => {
				return <Segment key={"comment" + index}>{comment}</Segment>;
			})}
			<div className="flex w-full justify-center">
				<input onChange={event => setInputText(event.target.value)} className="w-2/3 h-10" placeholder="Write a comment" />
				<button onClick={() => { }} className="w-auto bg-blue-300 p-3 rounded">Add comment</button>
			</div>
		</Modal>
	);
}

export default Modals;
