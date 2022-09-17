import React from 'react'
import { Clock, Quote, SearchBar, Suggestions } from '../components'

const NewTab = () => {
  return (
    <div>
      <Suggestions/>
      <SearchBar/>
      <Clock/>
      <Quote/>
    </div>
  )
}

export default NewTab
