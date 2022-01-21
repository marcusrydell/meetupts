import React, { useState } from "react";



function Event({event}: any): JSX.Element {
    // const [date, setDate] = useState(
    //     new Date(props.data.time * 1000).toLocaleDateString("sv")
    // );

    return (
        <div>
            {event.name} 
            {event.location}
        </div>
    );
}

export default Event;
