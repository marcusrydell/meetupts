import React, { useState } from "react";


function Event(props: any) {
    // const [date, setDate] = useState(
    //     new Date(props.data.time * 1000).toLocaleDateString("sv")
    // );

    return (
        <div>
            {props.event.name} 
            {props.event.location}
        </div>
    );
}

export default Event;
