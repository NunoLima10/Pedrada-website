import './CommunityProfile.css'
import Post from '../../components/Post/Post'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react"
import PedradaAPI from '../../api/api';
import { parseAPIResponse } from '../../api/api';

const CommunityProfile = () => {

  const community = useParams()
  const [communityName, setCommunityName] = useState("")
  const [communityDescription, setCommunityDescription ] = useState("")
  const [communityPublicID, setCommunityPublicID] = useState("")
  const [communityPots, setCommunityPots] = useState([])

  useEffect(() => {
    async function getCommunityInfo() {
      const APIPromise = PedradaAPI.get(`/community/name/${community.community_name}`)
      const APIResponse = await parseAPIResponse(APIPromise)
      const communityInfo = APIResponse.data[0][0]
      const communityPost = APIResponse.data[1]
      
      setCommunityName(communityInfo.community_name)
      setCommunityDescription(communityInfo.community_description)
      setCommunityPublicID(communityInfo.public_id)
      setCommunityPots(communityPost)
      
    }
    getCommunityInfo()

  }, [])

  return (
    <div className="community-profile-container">
      <div className="community-profile-info">
        <div className="community-banner">
          <div className="community-profile-icon"></div>
        </div>
        <p className="community-name">{communityName}</p>
        <p className='community-description'>{communityDescription}</p>
      </div>
      <div className="community-profile-post-container">
      {
          communityPots?
          communityPots.map((item) => 
          <Post public_id={item.public_id} key={item.public_id}/>
          ):
          <p>Não a itens</p>
        }
      </div>
    </div>
  )
}

export default CommunityProfile