import { useRouter } from 'next/router'
import { useState } from 'react'
import Modal from '../events/Modal'
import BackDrop from '../events/BackDrop'
import EventForm from '../events/EventForm'
import classes from '../../styles/components/header.module.css'

const Header = () => {

    const router = useRouter()
    const [isAddModalVisible, setIsAddModalVisible] = useState(false)

    const closeModal = () => {
        setIsAddModalVisible(false)
    }

    const linkToHome = () => {
        router.push('/')
    }

    const linkToEvents = () => {
        router.push('/events')
    }

    return (
        <header className={classes.masterContainer}>
            <div className={classes.container}>
                <h1 className={classes.title} onClick={linkToHome}>Event Manager</h1>
                <div>
                    <button className={classes.events} onClick={linkToEvents}>Events</button>
                    <button className={classes.addEvent} onClick={() => { setIsAddModalVisible(true) }}>+</button>

                </div>
            </div>
            {
                isAddModalVisible ? (
                    <>
                        <Modal>
                            <EventForm closeModal={closeModal} type='add' />
                        </Modal>
                        <BackDrop closeModal={closeModal} />
                    </>
                ) : null
            }
        </header>
    )
}

export default Header