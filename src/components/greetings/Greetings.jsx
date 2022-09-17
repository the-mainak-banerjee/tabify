import React, { useState, useEffect } from 'react'
import { useTime } from '../../contexts/time-context'
import './greetings.css'

export const Greetings = () => {

    const { time } = useTime()
    const [greet,setGreet] = useState()
    const [name,setName] = useState(null)

    useEffect(() => {
      const name = localStorage.getItem('tabify-name')
      setName(name)
    },[])
  

    useEffect(() => {
        if(time?.charAt(0) <= 11 && time?.indexOf('AM') > 0){
            setGreet(`🌞 Good Morning 🌞 ${name}!!!`)
        }else if(time?.charAt(0) > 11 && time?.charAt(0) < 5 && time?.indexOf('PM') > 0){
            setGreet(`🌤️ Good Afternoon 🌤️ ${name}!!!`)
        }else if(time?.charAt(0) > 5 && time?.indexOf('PM') > 0){
            setGreet(`🌜 Good Evening 🌛 ${name} !!!`)
        }
    },[time,name])

  return (
    <div className='tabify-greetings'>
      <p className='tabify-greetings-text'>{greet}</p>
    </div>
  )
}
