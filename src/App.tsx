import React, { useState } from "react";
import Event from './components/Event'

import {IEvent} from './model/Events' 

const data: IEvent[] = [{
            id: 1,
            name: "Bilkrockar",
            joined: true,
            location: "Angered",
            time: 1644847298,
            comments: ["420 blz", "44"],
        },
        {
            id: 2,
            name: "Dreamhack",
            joined: false,
            location: "Orten",
            time: 1644847298,
            comments: ["420 blz", "44"],
        },
        {
            id: 3,
            name: "Snusträff",
            joined: false,
            location: "Luleå",
            time: 1644847298,
            comments: ["420 blz", "44"],
        },
    ];

function App() {
    const [events, setEvents] = useState<IEvent[]>(data)

    return (
    <div>
      {events.map((event)=>{
        return(
          <Event key={event.id} event={event}/>
        )
      })}
    </div>
    );
}

export default App;
