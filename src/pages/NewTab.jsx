import React from 'react'
import { Clock, Greetings, Quote, SearchBar, Suggestions } from '../components'

const NewTab = () => {
  return (
    <React.Fragment>
      <Suggestions/>
      <Greetings/>
      <SearchBar/>
      <Clock/>
      <Quote/>
    </React.Fragment>
  )
}

export default NewTab
