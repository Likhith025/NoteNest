import React from 'react'
import { FaRegStickyNote } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import './TopBar.css'

const TopBar = () => {
    const navigate = useNavigate();
  return (
    <div>
      <div className='topbar'>
        <div className="left" onClick={()=>{navigate('/')}}>
          <FaRegStickyNote className="logo-icon" />
          <span className="logo-text">NoteNest</span>
        </div>
        <div className="middle">
          <div className="search">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder='search' className='search-input' />
          </div>
        </div>
        <div className="right">
          Account
        </div>
      </div>
      <hr />
    </div>
  )
}

export default TopBar
