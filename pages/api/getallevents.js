import { fetchAllEvents } from '../../store/manipulate'

const getAllEvents = async (req, res) => {
    try {
        if (req.method === 'GET') {
            const data = fetchAllEvents()

            res.send(data)
        }
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
}

export default getAllEvents