import { appendEvent } from '../../store/manipulate'

const addEvent = (req, res) => {
    if (req.method === 'POST') {
        appendEvent(req.body)
        res.send()
    } else {
        res.status(404).send('404-Not Found')
    }
}

export default addEvent