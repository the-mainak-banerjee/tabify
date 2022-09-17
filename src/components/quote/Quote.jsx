import React, { useState} from 'react'
import { useEffect } from 'react'
import { allQuotes } from '../../database/QuotesData'

export const Quote = () => {

    const [quote,setQuote] = useState({
        text: '',
        author: ''
    })

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * 100) + 1
        const selectedQuote = allQuotes[randomIndex]
        setQuote({text:selectedQuote.quote, author: selectedQuote.author })
    },[])

  return (
    <div>
        <q>{quote.text}</q>
        <p>-{quote.author}</p>
    </div>
  )
}
