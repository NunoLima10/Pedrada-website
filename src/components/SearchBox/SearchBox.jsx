import './SearchBox.css'
import Search from "../../assets/react-icons/Search"
const SearchItem = (props) =>{
    return( 
        <p>resultado da pesquisa</p>
    )
}

const SearchBox = () => {
  return (
    <div>
        <Search className="search-icon" />
        <input type="text" placeholder='Pseudônimo' className='search-input'  />
        <div className="search-result-list">
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
        </div>
    </div>
  )
}

export default SearchBox