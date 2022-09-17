import React, { useState} from 'react'
import { useEffect } from 'react'
import { allQuotes } from '../../database/quotesData'
import './quote.css'

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
    <div className='tabify-quote'>
        <q className='tabify-quote-text'>{quote.text}</q>
        <p className='tabify-quote-author'>-{quote.author}</p>
    </div>
  )
}
