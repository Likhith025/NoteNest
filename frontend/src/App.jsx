import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import MyAcc from './pages/MyAcc'
import Login from './pages/Login'
import ViewDoc from './pages/ViewDoc'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/myAcc' element={<MyAcc/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/viewDoc' element={<ViewDoc/>}/>
      </Routes>
    </div>
  )
}

export default App
