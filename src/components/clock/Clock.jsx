import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './clock.css'

const days = ['Sunday', 'Monday', 'Tuesday', 'WednesDay', 'Thusday', 'Friday', 'Saturday']
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export const Clock = () => {
    const [time,setTime] = useState()
    const [date,setDate] = useState()
    const [month,setMonth] = useState()
    const [year,setYear] = useState()
    const [day,setDay] = useState()

    useEffect(() => {
        const interval = setInterval(() => {
            const theDate = new Date()
            setTime(theDate.toLocaleTimeString('en-US'))
            setDate(theDate.getDate())
            setMonth(months[Number(theDate.getMonth())])
            setDay(days[Number(theDate.getDay())])
            setYear(theDate.getFullYear())
        }, 1000)

        return () => clearInterval(interval)
    })

    // console.log(time)
    // console.log(year)

    return(
        <div className='tabify-clock'>
            <p className='tabify-clock-time'>{time}</p>
            <p className='tabify-clock-date'>{day}, {month}{date}, {year}</p>
        </div>
    )
}