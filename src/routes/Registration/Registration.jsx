import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import FormBox from '../../components/FormBox/FormBox'
import FormError from '../../components/FormError/FormError';
import InfoIcon from '../../assets/react-icons/Info';
import BackgroundImage from '../../assets/backgound-images.jpg';
import './Registration.css'

const Registration = () => {
  const [pseudonym, setPseudonym] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const [errorMessage, setErrorMessage] = useState(null);
  const [infoIsVisible, setInfoIsVisible] = useState(false)
  
  useEffect(() => {
    setTimeout(() => {setInfoIsVisible(true)}, 1000);
    
  },[]);

  const navigate = useNavigate();

  function LoginRedirect(e) {
    navigate('/login')
  }
  function submitHandler(event) {
    event.preventDefault();
    // const useRegistrationInfo = {
    //   pseudonym: pseudonym,
    //   email: email,
    //   password: password,
    //   passwordConfirm: passwordConfirm
    // } 
    // // TODO
    // Sent to validation
    setErrorMessage("Password não corresponde")
    // setTimeout(() => {closeErroMessage()}, 3000);
  }
  function closeErroMessage(e) {
    setErrorMessage(null)
  }

  return (
    <div className="registration-container">
      <img src={BackgroundImage} alt='background' className='background-image' />
      <FormBox
        title={"Cadastro"}
        submitHandler={submitHandler}
        submitButtonText={"Cadastrar"}
        questionText={{question:"Já tem uma conta?", link:"Entrar"}}
        questionOnClick={LoginRedirect}
      >
        <div className="pseudonym-input-box">
        <InfoIcon className={"info-icon"} toggle={(e) => setInfoIsVisible(!infoIsVisible)} />
        <div className={infoIsVisible ? "pseudonym-info" : "invisible-pseudonym-info"} onClick={(e) => setInfoIsVisible(!infoIsVisible)}>
          <p>É um nome fictício,deve manter em segredo</p>
        </div>
        <input className='from-input' type="text" id="pseudonym" placeholder='Pseudônimo'value={pseudonym}
          onChange={(e) => setPseudonym(e.target.value)}
          onFocus={(e) => setInfoIsVisible(false)}
        />

        </div>
        <input className='from-input' type="email" id="email" placeholder='Email'value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={(e) => setInfoIsVisible(false)}
        />
        <input className='from-input' type="password" id="password" placeholder='Password'value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={(e) => setInfoIsVisible(false)}
        />
        <input className='from-input' type='password' id='confirm-password'placeholder='Confirmar password'value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          onFocus={(e) => setInfoIsVisible(false)}
        />
      </FormBox>

      <FormError errorMessage={errorMessage} onClose={closeErroMessage} />
      
    </div>
  )
}

export default Registration