import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import BackgroundImage from '../../assets/backgound-images.jpg';
import FormBox from '../../components/FormBox/FormBox';
import FormError from '../../components/FormError/FormError';
import { AuthContext } from '../../Contexts/AuthContext'
import PedradaAPI from '../../api/api';
import {parseAPIResponse} from '../../api/api';
import './Login.css'


function Login() {
  const ctx = useContext(AuthContext)

  const [pseudonym, setPseudonym] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  function valideLogin() {
    if (pseudonym.length === 0 || password.length === 0) {
      setErrorMessage("A campos vazios")
      return false
    }
    // if (password.length < 6) {
    //   setErrorMessage("Password é invalido")
    //   return false
    // }
    return true
  }

  async function submitHandler(event) {
    event.preventDefault();

    navigate("/feed")
    return

    if (valideLogin()) {
      const loginData = {
        pseudonym: pseudonym.trim(),
        user_password: password.trim()
      }

      const APIPromise = PedradaAPI.post("/login", loginData)
      const APIResponse =  await parseAPIResponse(APIPromise)
      
      if (APIResponse.errorMessage){
        setErrorMessage(APIResponse.errorMessage)
        return
      }

      if(APIResponse.data.token){
        const accessToken = APIResponse.data.token
        await ctx.login(accessToken)
      
      }
      navigate("/feed")
      
    }
  }

  function RegistrationRedirect(e) {
    navigate('/registration')
  }

  function closeErroMessage(e) {
    setErrorMessage(null)
  }

  return (
    <div className="login-container">
      <img src={BackgroundImage} alt='background' className='background-image-low-brightness' />
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