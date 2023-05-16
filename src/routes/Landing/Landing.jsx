import LandingPageImage from '../../assets/landing-page-image.png'
import { useNavigate } from 'react-router-dom'
import TitleImage from '../../assets/title-pedrada.png'
import './Landing.css'
import Footer from '../../components/Footer/Footer'
import { Fragment } from 'react'

const Landing = () => {
  const navigate = useNavigate();

  return (
  <Fragment>

    <main className='main-container'>
      <div className="content-container">
        <div className="image-container">
          <img src={LandingPageImage} alt='main' className='landing-image' />
        </div>
        <div className="text-container">
        <img src={TitleImage} alt='main' className='title-image' />
          <div className="lading-actions">
            <button className='lading-login-redirect' onClick={() => navigate('/login')}>Entrar</button>
            <p className='from-question'>Não tem uma conta?
              <span  className='login-redirect' onClick={() => navigate('/registration')}>Cadastrar</span>
            </p> 
          </div>
        </div>
      </div>
    </main>
    <Footer/>
  </Fragment>

  )
}

export default Landing