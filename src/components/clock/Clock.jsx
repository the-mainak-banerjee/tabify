import React from 'react'
import { useTime } from '../../contexts/time-context'
import './clock.css'


export const Clock = () => {

    const {time,date,month,year,day} = useTime()


    return(
        <div className='tabify-clock'>
            <p className='tabify-clock-time'>{time}</p>
            <p className='tabify-clock-date'>{day}, {month}{date}, {year}</p>
        </div>
    )
}