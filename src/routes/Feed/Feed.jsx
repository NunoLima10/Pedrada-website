import { useEffect, useState } from "react"
import FeedNav from "../../components/FeedNav/FeedNav"
import VerticalList from "../../components/VerticalList/VerticalList"
import "./Feed.css"
import UserPost from "../../components/Post/Post"
import PedradaAPI from '../../api/api';
import {parseAPIResponse} from '../../api/api';

// const users = []


const Feed = () => {
  const contendTypes = {
    home:"home",
    users:"users",
    community:"community"
    } 
  const [contendType, setContendType] = useState(contendTypes.home)
  const [communityList, setCommunityList] = useState([])

  useEffect(() =>{
     async function getCommunities(){
       const APIPromise = PedradaAPI.get("/communities")
       const APIResponse = await parseAPIResponse(APIPromise)
      //  console.log(APIResponse.data)
      setCommunityList(APIResponse.data)
     }
     getCommunities()
    
  },[])

  // function getContend(){
  //   console.log(contendType)
  // }

  return (
    <div className="feed-container">
      <FeedNav contendTypes={contendTypes} selectContendType={setContendType}/>
        <div className="feed-left">
          <VerticalList  title={"Comunidades"} itemList={communityList}/>
        </div>
        <div className="feed-contend">
           <UserPost/>
           <UserPost/>
           <UserPost/>
           <UserPost/>
           <UserPost/>
           <UserPost/>
           <UserPost/>
           <UserPost/>
        </div>
        <div className="feed-right">
        <VerticalList title={"Usuários"} />
        </div>
    </div>
  )
}

export default Feed