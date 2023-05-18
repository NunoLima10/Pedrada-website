import Search from "../../assets/react-icons/Search"
import "./FeedNav.css"

function FeedNav() {
  return (
    <nav className="feed-nav">
        <div className="search-box">
            <Search className = "search-icon"/>
            <input type="text" placeholder='Pseudônimo'/>
        </div>
        <div className="feed-menu">
            
        </div>
        <div className="user-menu">
            
        </div>
    </nav>
  )
}

export default FeedNav