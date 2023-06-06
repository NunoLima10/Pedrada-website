import { Fragment,useContext } from "react"
import Logo from "../../assets/logo-pequeno.png"
import House from "../../assets/react-icons/House"
import Users from "../../assets/react-icons/Users"
import Community from "../../assets/react-icons/Community"
import "./FeedNav.css"
import Logout from "../../assets/react-icons/Logout"
import SearchBox from "../SearchBox/SearchBox"
import { AuthContext } from '../../Contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

const FeedMenu = ({ contendTypes, selectContendType }) => {
  return(
  <Fragment>
    <House className={"house-menu-icon"} OnSelect={() => selectContendType(contendTypes.home)} />
    <Users className={"user-menu-icon"} OnSelect={() => selectContendType(contendTypes.users)} />
    <Community className={"community-menu-icon"} OnSelect={() => selectContendType(contendTypes.community)} />
  </Fragment>)
}
function FeedNav({ contendTypes, selectContendType }) {
  const ctx = useContext(AuthContext)
  const navigate = useNavigate();

  function userLogout(){
    ctx.logout()
    navigate("/")
  }
  function userProfileRedirect(){
    console.log("Perfil")
    
  }
  return (
    <nav className="feed-nav-container">
      <div className="feed-nav">
        <div className="search-box">
          <img src={Logo} alt="logo" className="app-logo" />
          <SearchBox />
        </div>
        <div className="feed-menu">
          <FeedMenu contendTypes={contendTypes} selectContendType={selectContendType} />
        </div>
        <div className="user-menu">
          <div className="user-icon" onClick={userProfileRedirect} ></div>
          <p className="user-name" onClick={userProfileRedirect}>User name</p>
          <Logout className={"logout-icon"} OnSelect={userLogout} />
        </div>
      </div>

      <div className="feed-menu-mobile">
        <FeedMenu contendTypes={contendTypes} selectContendType={selectContendType} />
      </div>
    </nav>
  )
}

export default FeedNav