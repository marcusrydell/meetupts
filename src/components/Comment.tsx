import React, { useState } from "react";


function Event(props: any) {
    const [content, setContent] = useState(props.data); //Get from props

    return (
        <div className="">
            <header className="App-header">
                <h1>
                    <div>{content}</div>
                </h1>
            </header>
        </div>
    );
}

export default Event;
