import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import PageNotFound from '../404'
import classes from '../../styles/pages/events/eventpage.module.css'

const EventPage = () => {
    const router = useRouter()
    const { eventID } = router.query
    const [event, setEvent] = useState()

    useEffect(() => {
        (async () => {
            const res = await axios.post('/api/getevent', { eventID })

            if (res.status === 200) {
                setEvent(res.data)
                return
            }

            console.log(res.status)
        })()
    }, [])

    const removeEventHandler = async () => {
        const res = await axios.post('/api/removeevent', { eventID })
        if (res.status === 200) {
            alert('Event has been Deleted Successfully.')
            router.replace('/')
            return
        }

        console.log(res.status)
    }

    return (
        <div className={classes.container}>
            {
                event ? (
                    <div className={classes.container2}>
                        <h2 className={classes.title}>{event.title}</h2>
                        <p className={classes.desc}><strong>Description:</strong> {event.desc}</p>
                        <p>Featured : {event.isFeatured ? 'Yes' : 'No'}</p>
                        <button onClick={removeEventHandler}>Remove Event</button>
                    </div>
                ) : <PageNotFound />
            }
        </div>
    )
}

export default EventPage