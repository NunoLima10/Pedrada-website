import { useNavigate } from 'react-router-dom'

import ListItem from "../List-Item/ListItem"
import "./VerticalList.css"

const UserVerticalList = ({ itemList }) => {

  const navigate = useNavigate();

  function selectItem(pseudonym){
    navigate(`/profile/${pseudonym}`)

  }
  return (
    <div className="list-container">
      <h3 className="list-title">Usuários</h3>
      <div className="item-container">
        {
          itemList?
          itemList.map((item) => 
          <ListItem title={item.pseudonym} 
          key={item.public_id}
          OnSelect={() => selectItem(item.pseudonym)}/>):
          <p>Não a itens</p>
        }
      </div>
    </div>
  )
}

export default UserVerticalList