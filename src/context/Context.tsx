import { createContext, useState } from 'react';
import { IEvent } from "../model/Events";


export const Context = createContext({});
const data: IEvent[] = [
	{
		id: 1,
		name: "Bilkrockar",
		joined: true,
		location: "Angered",
		time: '2022-02-14',
		comments: ["420 blz", "44"],
	},
	{
		id: 2,
		name: "Dreamhack",
		joined: false,
		location: "Orten",
		time: '2022-12-14',
		comments: ["420 blz", "44"],
	},
	{
		id: 3,
		name: "Snusträff",
		joined: false,
		location: "Luleå",
		time: '2022-05-14',
		comments: ["420 blz", "44"],
	},
];
export const ContextProvider= ({children}: any) =>{
    const [context, setContext] = useState<IEvent[]>(data);

	function updateContext(updates: any){
		setContext((prevState)=>{
			return{
				...prevState,
				...updates,
			}
		})
	}

	const value=[context, updateContext];

	return <Context.Provider value={value}>{children}</Context.Provider>
}