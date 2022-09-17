import React, {useState} from 'react'
import { useEffect } from 'react'
import './weather.css'


export const Weather = () => {
    const [lat,setLat] = useState()
    const [lon,setLon] = useState()
    const [location,setLocation] = useState('')
    const [country,setCountry] = useState('')
    const [icon,setIcon] = useState('')
    const [temp,setTemp] = useState('')
    const [weatherType, setWeatherType] = useState('')

    navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude)
        setLon(position.coords.longitude)
    })

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API}
        `).then(res => res.json()).then(data => {
            setLocation(data?.name)
            setTemp(Math.round(data?.main?.temp - 273.15))
            setIcon(data?.weather[0]?.icon)
            setWeatherType(data?.weather[0]?.main)
            setCountry(data?.sys?.country)

        }).catch(error => console.log('Can"t Get Weather Data Now', error))
    })

    const handleCheckWeather = () => {
        window.location.assign('https://www.google.com/search?q=weather')
    }


  return (
    <>
        {temp && <div className='tabify-weather' onClick={handleCheckWeather}>
            <div>
                <img alt='Weather Icon' src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
            </div>
            <div>
                <p className='tabify-weather-temp'><strong>{temp}<sup>&#176;c</sup></strong>/{weatherType}</p>
                <p className='tabify-weather-location'>{location},{country}</p>
            </div>
        </div>}
    </>
  )
}
