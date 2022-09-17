import React from 'react'
import { Clock, Greetings, Quote, SearchBar, Suggestions, Weather } from '../components'

const NewTab = () => {
  return (
    <React.Fragment>
      <Suggestions/>
      <Greetings/>
      <SearchBar/>
      <Clock/>
      <Quote/>
      <Weather/>
    </React.Fragment>
  )
}

export default NewTab
