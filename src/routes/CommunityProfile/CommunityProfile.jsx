import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import PedradaAPI, { parseAPIResponse } from '../../api/api';
import Post from '../../components/Post/Post';
import './CommunityProfile.css';

const CommunityProfile = () => {

  const community = useParams()
  const [communityName, setCommunityName] = useState("")
  const [communityDescription, setCommunityDescription ] = useState("")
  const [communityPots, setCommunityPots] = useState([])

  useEffect(() => {
    async function getCommunityInfo() {
      const APIPromise = PedradaAPI.get(`/communities?name=${community.community_name}`)
      const APIResponse = await parseAPIResponse(APIPromise)
      const communityInfo = APIResponse.data[0][0]
      const communityPost = APIResponse.data[1]
      
      setCommunityName(communityInfo.community_name)
      setCommunityDescription(communityInfo.community_description)
      setCommunityPots(communityPost)
      
    }
    getCommunityInfo()

  }, [community.community_name])

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