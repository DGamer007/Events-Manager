import axios from "axios"
import { useEffect, useState } from "react"
import EventList from '../../components/events/EventList'
import classes from '../../styles/pages/events/index.module.css'

const Events = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        (async () => {
            const res = await axios.get('/api/getallevents')

            if (res.status === 200) {
                console.log(res.data)
                setEvents(res.data)
                return
            }

            console.log(res.status)
        })()
    }, [])

    return (
        <div className={classes.container}>
            <h2 className={classes.title}>
                All Events
            </h2>
            {
                events ? <EventList items={events} /> : <p>Loading...</p>
            }
        </div>
    )
}

export default Events