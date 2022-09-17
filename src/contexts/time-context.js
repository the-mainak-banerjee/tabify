import { createContext, useContext, useEffect, useState } from "react";
const days = ['Sunday', 'Monday', 'Tuesday', 'WednesDay', 'Thusday', 'Friday', 'Saturday']
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


const TimeContext = createContext()

const TimeContextProvider = ({ children }) => {

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

    return(
        <TimeContext.Provider value={{time,date,month,year,day}}>
            {children}
        </TimeContext.Provider>
    )
}

const useTime = () => useContext(TimeContext)

export { useTime, TimeContextProvider}