import React from 'react'
import { Clock, Quote, Suggestions } from '../components'

const NewTab = () => {
  return (
    <div>
      <Suggestions/>
      <Clock/>
      <Quote/>
    </div>
  )
}

export default NewTab
