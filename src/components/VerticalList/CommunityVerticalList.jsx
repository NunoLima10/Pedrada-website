import { useNavigate } from 'react-router-dom'

import ListItem from "../List-Item/ListItem"
import "./VerticalList.css"

const CommunityVerticalList = ({itemList }) => {

  const navigate = useNavigate();

  function selectItem(community_name){
    navigate(`/community/${community_name}`)

  }
  return (
    <div className="list-container">
      <h3 className="list-title">Comunidades</h3>
      <div className="item-container">
        {
          itemList?
          itemList.map((item) => 
          <ListItem title={item.community_name} 
          key={item.public_id}
          OnSelect={() => selectItem(item.community_name)}/>):
          <p>Não a itens</p>
        }
      </div>
    </div>
  )
}

export default CommunityVerticalList