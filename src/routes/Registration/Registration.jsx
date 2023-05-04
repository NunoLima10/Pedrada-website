import './Registration.css'
import { useNavigate } from 'react-router-dom'
const Registration = () => {
  const navigate = useNavigate();
  function LoginRedirect(e) {
    navigate('/login')
  }
  return (
    <div className="registration-container">
      <form className='form-container'>
        <h2 className='from-title'>Registration</h2>
        <input className='from-input' type="text" id="pseudonym" placeholder='Pseudonym' />
        <input className='from-input' type="email" id="email" placeholder='Email' />
        <input className='from-input' type="password" id="password" placeholder='Password' />
        <input className='from-input' type='password' id='confirm-password' placeholder='Confirm password' />
        <button className='sing-in-button'>Register</button>
        <p className='from-question'>Already have an account? <span onClick={LoginRedirect} className='login-redirect'>Log in</span></p>
      </form>
    </div>
  )
}

export default Registration