import { render, screen, cleanup} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import Event from '../components/Event'
import { IEvent } from '../model/Events'

describe('Event component',() =>{
    it('render event without errors', () =>{
        const testData: IEvent ={id: 2, name: 'test', joined: true, location: 'GBG', time: 1234324, comments : ['kommentar', 'en till']}
        render(<Event event={testData} />)
    })
})
