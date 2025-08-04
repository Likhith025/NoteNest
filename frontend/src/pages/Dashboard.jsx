import React from 'react'
import { useNavigate } from 'react-router-dom'
import TopBar from '../components/TopBars/TopBar';

const Dashboard = () => {
    const navigate = useNavigate();
  return (
    <div>
        <TopBar/>
      <button onClick={()=>{navigate('/login')}}>Login</button>
    </div>
  )
}

export default Dashboard
