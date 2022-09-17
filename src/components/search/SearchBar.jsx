import React from 'react'
import { useState } from 'react'
import {BsSearch} from 'react-icons/bs'
import './searchBar.css'

export const SearchBar = () => {
    const [searchQuery,setSearchQuery] = useState('')


    const handleSearch = (e) => {
        e.preventDefault()
        if(searchQuery){
            window.location.assign(`https://www.google.com/search?q=${searchQuery}`)
        }
    }

  return (
    <div>
        <form onSubmit={handleSearch} className='tabify-search-form'>
            <input type='text' placeholder='Search On Web' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className='tabify-search-input'/>
            <BsSearch className='tabify-search-icon'/>
        </form>
    </div>
  )
}


