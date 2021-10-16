import { deleteEvent } from '../../store/manipulate'

const removeEvent = (req, res) => {
    try {
        if (req.method === 'POST') {
            deleteEvent(req.body.eventID)
            res.send()
        }
    } catch (error) {
        console.log(error)
        res.status(404).send()
    }
}

export default removeEvent