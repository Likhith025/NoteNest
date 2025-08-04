import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="login">
        <h1>Login</h1>
        <div className="login-form">
          <form action="">
            <div className="subform">
              <p>Login</p>
              <input type="text" placeholder='Email' />
            </div>
            <div className="subform">
              <p>Password</p>
              <input type="password" placeholder='password'/>
              <p>Forgot password?</p>
            </div>
          </form>
  <div className="button-wrapper">
    <button className="login-button" onClick={()=>{navigate('/')}}>Login</button>
    <p>New user? <a href=""onClick={()=>{navigate('/register')}}>Register</a></p>
  </div>

        </div>
      </div>
    </div>
  )
}

export default Login
