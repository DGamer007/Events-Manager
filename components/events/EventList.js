import EventListItem from "./EventListItem"
import classes from '../../styles/components/eventlist.module.css'

const EventList = ({ items }) => {
    return (
        <div className={classes.container}>
            {
                items.map(item => <EventListItem key={item.id} data={item} />)
            }
        </div>
    )
}

export default EventList