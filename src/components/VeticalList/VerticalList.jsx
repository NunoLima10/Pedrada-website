import "./VerticalList.css"
import ListItem from "../List-Item/ListItem"

const VerticalList = ({title}) => {
  return (
    <div className="list-container">
        <h3 className="list-title">{title}</h3>
        <div className="item-container">
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/> 
        </div>
    </div>
  )
}

export default VerticalList