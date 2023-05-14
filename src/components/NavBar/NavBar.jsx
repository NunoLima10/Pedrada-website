import './NavBar.css'

const NavBar = () => {
  return (
    <nav className='navbar-container'>
        <ul className='links-container'>
            <li className='logo-link'>Site</li>
            <li className='login-link'><button>Entrar</button></li>
            <li className='registration-link' ><button>Cadastrar</button></li>
        </ul>

    </nav>
  )
}

export default NavBar
