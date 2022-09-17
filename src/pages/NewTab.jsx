import React from 'react'
import { Clock, Quote, SearchBar, Suggestions } from '../components'

const NewTab = () => {
  return (
    <React.Fragment>
      <Suggestions/>
      <SearchBar/>
      <Clock/>
      <Quote/>
    </React.Fragment>
  )
}

export default NewTab
