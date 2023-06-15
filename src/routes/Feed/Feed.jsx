import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import PedradaAPI, { parseAPIResponse } from '../../api/api'
import FeedNav from "../../components/FeedNav/FeedNav"
import Post from "../../components/Post/Post"
import CommunityVerticalList from "../../components/VerticalList/CommunityVerticalList"
import UserVerticalList from "../../components/VerticalList/UserVerticalList"
import "./Feed.css"


const Feed = () => {

  const navigate = useNavigate();

  const contendTypes = {
    home: "home",
    users: "users",
    community: "community"
  }
  // const [contendType, setContendType] = useState(contendTypes.home)
  const [communityList, setCommunityList] = useState([])
  const [postsList, setPostsList] =  useState([])
  const [userList, setUserList] =  useState([])

  useEffect(() => {
    async function getCommunities() {
      const APIPromise = PedradaAPI.get("/communities")
      const APIResponse = await parseAPIResponse(APIPromise)
      setCommunityList(APIResponse.data)
    }
    async function getPost() {
      const APIPromise = PedradaAPI.get("/posts")
      const APIResponse = await parseAPIResponse(APIPromise)
      setPostsList(APIResponse.data)
      
    }

    async function getUser() {
      const APIPromise = PedradaAPI.get("/users")
      const APIResponse = await parseAPIResponse(APIPromise)
      setUserList(APIResponse.data)
      
    }
    getCommunities()
    getPost()
    getUser()

  }, [])

  
  function createCommunityRedirect(){
    navigate("/community/create")
  }

  return (
    <div className="feed-container">
      <FeedNav contendTypes={contendTypes} selectContendType={() => ""} />
  
      <div className="feed-left">
        <CommunityVerticalList itemList={communityList} />
        <button className="create-community-button" onClick={createCommunityRedirect}>+</button>
      </div>
      <div className="feed-contend">
      {
          postsList?
          postsList.map((item) => 
          <Post public_id={item.public_id} key={item.public_id}/>
          ):
          <p>Não a itens</p>
        }
      </div>
      <div className="feed-right">
        <UserVerticalList itemList={userList} />
      </div>
    </div>
  )
}

export default Feed