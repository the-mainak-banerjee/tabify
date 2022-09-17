import React, { useState, useEffect } from 'react'
import { useTime } from '../../contexts/time-context'
import './greetings.css'

export const Greetings = () => {

    const { time } = useTime()
    const [greet,setGreet] = useState()

    // console.log(time.indexOf('AM'))

    useEffect(() => {
        if(time.charAt(0) <= 11 && time.indexOf('AM') > 0){
            setGreet('Good Morning Mainak!!! 🌞')
        }else if(time.charAt(0) > 11 && time.charAt(0) < 5 && time.indexOf('PM') > 0){
            setGreet('Good Afternoon Mainak!!! 🌤️')
        }else if(time.charAt(0) > 5 && time.indexOf('PM') > 0){
            setGreet('Good Evening Mainak !!! 🌝')
        }
    },[time])

  return (
    <div className='tabify-greetings'>
      <p className='tabify-greetings-text'>{greet}</p>
    </div>
  )
}
