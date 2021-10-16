import { editEvent } from '../../store/manipulate'

const updateEvent = (req, res) => {
    try {
        if (req.method === 'POST') {
            editEvent(req.body.eventID, req.body.data)
            res.send()
        }
    } catch (error) {
        console.log(error)
        res.status(404).send()
    }
}

export default updateEvent