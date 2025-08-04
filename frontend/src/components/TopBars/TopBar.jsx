import React from 'react'
import './TopBar.css'

const TopBar = () => {
  return (
    <div>
    <div className='topbar'>
        <div className="left-side">
            Logo
        </div>
        <div className="middle">
            <div className="search">
                <input type="text" placeholder='search' className='search-input'/>
            </div>
        </div>
        <div className="right-side">
            Account
        </div>
        </div>
        <hr />
    </div>
  )
}

export default TopBar
