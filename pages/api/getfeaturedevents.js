import { fetchFeaturedEvents } from '../../store/manipulate'

const getFeaturedEvents = (req, res) => {
    if (req.method === 'GET') {
        try {
            const data = fetchFeaturedEvents()

            res.send(data)
        } catch (error) {
            console.log(error)
            res.status(500).send()
        }
    }
}

export default getFeaturedEvents