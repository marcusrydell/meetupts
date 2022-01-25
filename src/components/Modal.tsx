import { useState, useContext } from "react";
import { IEvent } from "../model/Events";
import { context } from "../context/Context";
import { Modal, Segment } from "semantic-ui-react";
import { addSyntheticLeadingComment } from "typescript";

interface Props {
    event: IEvent;
}

function Modals({ event }: Props): JSX.Element {
    const [comments, setComments] = useState(event.comments); //Get from props
    const [inputText, setInputText] = useState("");
    const { setShowModal, setEvents, events } = useContext(context);

    function addComment(id: number){
        const moddedEvents = [...events];
        const index = moddedEvents.findIndex((item: any) => item.id === id);
        moddedEvents[index].comments.push(inputText);
        setEvents(moddedEvents)
        setInputText('')
    }
    return (
        <Modal
            size="large"
            onClose={() => setShowModal(false)}
            open={true}
            className="p-5"
        >
            <h1>Comments</h1>
            {comments.map((comment: string, index: number) => {
                return <Segment key={"comment" + index}>{comment}</Segment>;
            })}
            <div>
                <input
                    value={inputText}
                    onChange={(event) => setInputText(event.target.value)}
                    placeholder="Write a comment"
                />
                <button onClick={() => {addComment(event.id)}}>Add comment</button>
            </div>
        </Modal>
    );
}

export default Modals;
