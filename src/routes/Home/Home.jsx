import BackgroundImage from '../../assets/backgound-images.jpg';
import NavBar from '../../components/NavBar/NavBar';
import './Home.css'

const Home = () => {
  return (
    <main className="main-container">
      <NavBar/>
      <img src={BackgroundImage} alt='background' className='background-image' />
      <h1 className='home-title'>Pedrada</h1>
    </main>
  )
}

export default Home