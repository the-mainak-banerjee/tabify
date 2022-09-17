import React, {useState} from 'react'
import './userOnboarding.css'

const UserOnboarding = () => {

    const [name,setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem('tabify-name', name)
        window.location.reload()
    }

  return (
    <div className='tabify-onboarding'>
      <p className='tabify-onboarding-text'>Hey, What Should We Call You?</p>
      <form onSubmit={handleSubmit}>
        <input type='text' className='tabify-onboarding-input' value={name} onChange={(e) => setName(e.target.value)}/>
      </form>
    </div>
  )
}

export default UserOnboarding
