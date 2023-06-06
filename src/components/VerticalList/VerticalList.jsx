import "./VerticalList.css"
import ListItem from "../List-Item/ListItem"

const VerticalList = ({ title, itemList }) => {
  function selectItem(title){
    console.log(title)
  }
  return (
    <div className="list-container">
      <h3 className="list-title">{title}</h3>
      <div className="item-container">
        {
          itemList?
          itemList.map((item) => 
          <ListItem title={item.community_name} 
          key={item.public_id}
          OnSelect={() => selectItem(item.name)}/>):
          <p>Não a itens</p>
        }
      </div>
    </div>
  )
}

export default VerticalList