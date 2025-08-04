import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

const Register = () => {
    const navigate = useNavigate();
  return (
    <div>
      <div className="login">
        <h1>Register</h1>
        <form action="" className='login-form'>
            <div className="subform">
                <p>Name</p>
                <input type="text" placeholder='Name' />
            </div>
            <div className="subform">
                <p>Email</p>
                <input type="text" placeholder='Email' />
            </div>
            <div className="subform">
                <p>Password</p>
                <input type="text" placeholder='Password' />
            </div>
              <div className="button-wrapper">
    <button className="login-button" onClick={()=>{navigate('/')}}>Register</button>
    <p>Already have an Account? <a href=""onClick={()=>{navigate('/login')}}>Login</a></p>
  </div>

        </form>
        
      </div>
    </div>
  )
}

export default Register
