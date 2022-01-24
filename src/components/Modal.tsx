import React, { useState, useContext } from "react";
import { IEvent } from "../model/Events";
import { modalCtx } from "../context/Context";
import { Modal, Segment } from "semantic-ui-react";

interface Props {
    event: IEvent;
}

function Modals({ event }: Props): JSX.Element {
    const [comments, setComments] = useState(event.comments); //Get from props
    const [inputText, setInputText] = useState("");
    const { setShowModal } = useContext(modalCtx);
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

    console.log("snopp", event);

    return (
        <Modal
            size="large"
            onClose={() => setShowModal(false)}
            open={true}
            className="p-5"
        >
            <h1 className="text-5xl">Comments</h1>
            {comments.map((comment: string, index: number) => {
                return <Segment key={"comment" + index}>{comment}</Segment>;
            })}
            <div className="flex w-full justify-center">
                <input
                    onChange={(event) => setInputText(event.target.value)}
                    className="w-2/3 h-10"
                    placeholder="Write a comment"
                />
                <button
                    onClick={() => {}}
                    className="w-auto bg-blue-300 p-3 rounded"
                >
                    Add comment
                </button>
            </div>
        </Modal>
    );
}

export default Modals;
