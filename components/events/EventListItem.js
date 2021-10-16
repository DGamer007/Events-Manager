import { useRouter } from 'next/router'
import { useState } from 'react'
import Modal from './Modal'
import BackDrop from './BackDrop'
import EventForm from './EventForm'
import classes from '../../styles/components/eventlistitem.module.css'

const EventListItem = ({ data }) => {

    const [isEditModalVisible, setIsEditModalVisible] = useState(false)

    const router = useRouter()

    const exploreEventHandler = () => {
        router.push({
            pathname: '/events/[eventID]',
            query: { eventID: data.id }
        })
    }

    const closeModal = () => {
        setIsEditModalVisible(false)
    }

    return (
        <div className={classes.container}>
            <h3 className={classes.title}>{data.title}</h3>
            <div className={classes.container2}>
                <button onClick={exploreEventHandler}>Explore Event</button>
                <button onClick={() => { setIsEditModalVisible(true) }}>Edit Event</button>
            </div>
            {
                isEditModalVisible ? (
                    <>
                        <Modal>
                            <EventForm data={data} type='edit' closeModal={closeModal} />
                        </Modal>
                        <BackDrop closeModal={closeModal} />
                    </>
                ) : null
            }
        </div>
    )
}

export default EventListItem