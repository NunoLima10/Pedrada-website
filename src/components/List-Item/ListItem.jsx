import "./ListItem.css"


const ListItem = ({icon, title, OnSelect}) => {
  return (
    <div className="list-item" onClick={OnSelect}>
        <div className="item-logo">
        </div>
        <p className="item-text">{title}</p>
    </div>
  )
}

export default ListItem