import { randomUUID } from 'crypto'

const path = require('path')
const fs = require('fs')

const readData = () => {

    const location = path.join(process.cwd(), 'store', 'store.json')
    let data = []

    if (fs.existsSync(location)) {
        const rawData = fs.readFileSync(location)
        data = JSON.parse(rawData)

        return data
    }

    fs.writeFileSync(location, JSON.stringify(data))
    return data
}

const saveData = (data) => {
    fs.writeFileSync(path.join(process.cwd(), 'store', 'store.json'), JSON.stringify(data))
}

export const fetchAllEvents = () => {
    const data = readData()

    return data
}

export const appendEvent = (event) => {
    const data = readData()
    data.push({ ...event, id: randomUUID() })
    saveData(data)
}

export const deleteEvent = (eventID) => {
    let data = readData()
    data = data.filter(event => event.id !== eventID)
    saveData(data)
}

export const editEvent = (eventID, newData) => {
    let data = readData()
    data = data.map(event => {
        if (event.id === eventID) {
            return { ...event, ...newData }
        }
        return event
    })

    saveData(data)
}

export const fetchEvent = (eventID) => {
    let data = readData()
    const result = data.find(event => event.id === eventID)

    return result
}

export const fetchFeaturedEvents = () => {
    let data = readData()
    const result = data.filter(event => event.isFeatured)

    return result
}