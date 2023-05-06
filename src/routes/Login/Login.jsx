import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import BackgroundImage from '../../assets/backgound-images.jpg';
import FormBox from '../../components/FormBox/FormBox';
import FormError from '../../components/FormError/FormError';
import {AuthContext} from '../../Contexts/AuthContext'
import './Login.css'

function Login() {
  const ctx = useContext(AuthContext)
 
  const [pseudonym, setPseudonym] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  function submitHandler(event) {
    event.preventDefault();
    ctx.setAccessToken("1234")
    console.log(ctx.accessToken)
    
    setErrorMessage("Algo correu mal")
  }

  function RegistrationRedirect(e) {
    navigate('/registration')
  }
  
  function closeErroMessage(e) {
    setErrorMessage(null)
  }

  return (
    <div className="login-container">
      <img src={BackgroundImage} alt='background' className='background-image' />
      <FormBox
        title={"Login"}
        submitHandler={submitHandler}
        submitButtonText={"Entrar"}
        questionText={{ question: "Não tem uma conta?", link: "Cadastrar" }}
        questionOnClick={RegistrationRedirect}
      >
        <input className='from-input' type="text" id="pseudonym" placeholder='Pseudônimo' value={pseudonym}
          onChange={(e) => setPseudonym(e.target.value)}
        />
        <input className='from-input' type="password" id="password" placeholder='Password' value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormBox>
      <FormError errorMessage={errorMessage} onClose={closeErroMessage} />
    </div>
  )
}

export default Login