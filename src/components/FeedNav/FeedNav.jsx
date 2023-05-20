import Search from "../../assets/react-icons/Search"
import Logo from "../../assets/logo-pequeno.png"
import House from "../../assets/react-icons/House"
import Users from "../../assets/react-icons/Users"
import Community from "../../assets/react-icons/Community"
import "./FeedNav.css"
import Logout from "../../assets/react-icons/Logout"

function FeedNav() {
  return (
    <nav className="feed-nav">
      <div className="search-box">
        <img src={Logo} alt="logo" className="app-logo" />
        <input type="text" placeholder='Pseudônimo' />
        <Search className="search-icon" />
      </div>
      <div className="feed-menu">
        <House className={"house-menu-icon"}/>
        <Users className={"user-menu-icon"}/>
        <Community className={"community-menu-icon"}/>

      </div>
      <div className="user-menu">
        <div className="user-icon"></div>
        <p className="user-name">User name</p>
        <Logout className={"logout-icon"}/>
      </div>
    </nav>
  )
}

export default FeedNav