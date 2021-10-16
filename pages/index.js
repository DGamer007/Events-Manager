import axios from 'axios'
import { useEffect, useState } from 'react'
import EventList from '../components/events/EventList'
import classes from '../styles/pages/index.module.css'

const HomePage = () => {

  const [featuredEvents, setFeaturedEvents] = useState([])

  useEffect(() => {
    (async () => {
      const res = await axios.get('/api/getfeaturedevents')

      if (res.status === 200) {
        setFeaturedEvents(res.data)
        return
      }

      console.log(res.status)
    })()
  }, [])

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>
        Featured Events
      </h2>
      <EventList items={featuredEvents} />
    </div>
  )
}

export default HomePage
