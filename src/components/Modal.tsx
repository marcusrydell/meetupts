import { useState, useContext, useEffect } from "react";
import { IEvent } from "../model/Events";
import { context } from "../context/Context";
import { Modal, Segment } from "semantic-ui-react";

interface Props {
    id: number;
}

function Modals({ id }: Props): JSX.Element {
    const [inputText, setInputText] = useState("");
    const { setShowModal } = useContext(context);
    const [events, setEvents] = useState<IEvent[]>(
        JSON.parse(localStorage.getItem("events") || "")
    );
    const [comments, setComments] = useState(events[id - 1].comments); //Get from props

    function addComment(id: number) {
        const moddedEvents = [...events];

        const index = moddedEvents.findIndex((item: any) => item.id === id);

        moddedEvents[index].comments.push(inputText);

        localStorage.setItem("events", JSON.stringify(moddedEvents));
        setComments(moddedEvents[index].comments);
        setInputText("");
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
                <button
                    onClick={() => {
                        addComment(id);
                    }}
                >
                    Add comment
                </button>
            </div>
        </Modal>
    );
}

export default Modals;
