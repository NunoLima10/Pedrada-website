import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import FeedNav from "../../components/FeedNav/FeedNav"
import VerticalList from "../../components/VerticalList/VerticalList"
import "./Feed.css"
import UserPost from "../../components/Post/Post"
import PedradaAPI from '../../api/api';
import { parseAPIResponse } from '../../api/api';


const Feed = () => {

  const navigate = useNavigate();

  const contendTypes = {
    home: "home",
    users: "users",
    community: "community"
  }
  const [contendType, setContendType] = useState(contendTypes.home)
  const [communityList, setCommunityList] = useState([])

  useEffect(() => {
    async function getCommunities() {
      const APIPromise = PedradaAPI.get("/communities")
      const APIResponse = await parseAPIResponse(APIPromise)
      //  console.log(APIResponse.data)
      setCommunityList(APIResponse.data)
    }
    getCommunities()

  }, [])

  // function getContend(){
  //   console.log(contendType)
  // }

  function createCommunityRedirect(){
    navigate("/community/create")
  }

  return (
    <div className="feed-container">
      <FeedNav contendTypes={contendTypes} selectContendType={setContendType} />
  
      <div className="feed-left">
        <VerticalList title={"Comunidades"} itemList={communityList} />
        <button className="create-community-button" onClick={createCommunityRedirect}>+</button>
      </div>
      <div className="feed-contend">
       
      </div>
      <div className="feed-right">
        <VerticalList title={"Usuários"} />
      </div>
    </div>
  )
}

export default Feed