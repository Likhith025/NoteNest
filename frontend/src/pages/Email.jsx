import React from 'react'
import './Email.css'

const Email = () => {
  return (
    <div className='Email'>
      <h1>An Email has been sent to xyz@gmail.com, Please verify it</h1>
      <button className='resend-button'>Resend the Email</button>
    </div>
  )
}

export default Email
