import { fetchEvent } from '../../store/manipulate'

const getEvent = (req, res) => {
    try {
        if (req.method === 'POST') {
            const data = fetchEvent(req.body.eventID)

            res.send(data)
        }
    } catch (error) {
        console.log(error)
        res.status(404).send()
    }
}

export default getEvent