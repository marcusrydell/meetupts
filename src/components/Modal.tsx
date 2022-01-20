import React, { useState, useContext } from "react";
import { Modal, Segment } from "semantic-ui-react";


//Context

function Event(props: any) {
    const [comments, setComments] = useState(props.data.comments); //Get from props
    const [inputText, setInputText] = useState('')

    function addComment(id: number){

    }
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
            <input onChange={event => setInputText(event.target.value)} className="w-2/3 h-10" placeholder="Write a comment"/>
            <button onClick={()=> addComment(props.data.id)}className="w-auto bg-blue-300 p-3 rounded">Add comment</button>
        </div>
        </Modal>
    );
}

export default Event;
