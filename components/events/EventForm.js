import axios from 'axios'
import { useState } from 'react'
import classes from '../../styles/components/eventform.module.css'

const EventForm = ({ data, closeModal, type }) => {

    const [title, setTitle] = useState(data?.title || '')
    const [desc, setDesc] = useState(data?.desc || '')
    const [isFeatured, setIsFeatured] = useState(data?.isFeatured || false)

    const addEventHandler = async (e) => {
        e.preventDefault()

        const body = { title, desc, isFeatured }

        const res = await axios.post('/api/addevent', body)

        if (res.status === 200) {
            alert('Event has been Added Successfully.')
            closeModal()
            return
        }

        console.log(res.status)
    }

    const editEventHandler = async (e) => {
        const body = {
            eventID: data?.id,
            data: { title, desc, isFeatured }
        }

        const res = await axios.post('/api/updateevent', body)

        if (res.status === 200) {
            alert('Event has been updated Successfully.')
            closeModal()
            return
        }

        console.log(res.status)
    }

    return (
        <div className={classes.container}>
            <h2 className={classes.title}>
                {
                    type === 'add' ? 'Add Event' : 'Edit Event'
                }
            </h2>
            <form className={classes.form} onSubmit={type === 'add' ? addEventHandler : editEventHandler}>
                <input className={classes.titleinput} value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder='Title' name='title' />
                <input className={classes.descinput} value={desc} onChange={(e) => { setDesc(e.target.value) }} placeholder='Description' name='desc' />
                <label htmlFor='featuredEvent'>
                    <input type='checkbox' name='featuredEvent' checked={isFeatured} onChange={(e) => { setIsFeatured(e.target.checked) }} /> is Featured?
                </label>
                <button type='submit'>{type === 'add' ? 'Add Event' : 'Save Changes'}</button>
            </form>
        </div>
    )
}

export default EventForm