import React from 'react'
import './suggestions.css'

const suggestedItems = [
    {
        name: 'Google',
        url: 'https://www.google.com/'
    },
    {
        name: 'Gmail',
        url: 'https://gmail.com/'
    },
    {
        name: 'YouTube',
        url: 'https://www.youtube.com/'
    }
]

export const Suggestions = () => {
    return (
        <div className='tabify-suggestions'>
            {suggestedItems.map(item => {
                return(
                    <a key={item.name} href={item.url} className='tabify-suggestions-item'>
                        <text className='tabify-suggestions-name'>{item.name}</text>
                    </a>
                )
            })}
        </div>
    )
}