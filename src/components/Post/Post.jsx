import "./Post.css"
import { useEffect, useState } from "react"
import TrowStone from "../../assets/react-icons/TrowStone"
import StoneTablet from "../../assets/react-icons/StoneTablet"
import Arrow from "../../assets/react-icons/Arrow"
import PedradaAPI from '../../api/api';
import { parseAPIResponse } from '../../api/api';

const Post = ({public_id}) => {

  const [user1, setUser1] = useState("")
  const [user2, setUser2] = useState("")
  const [postDescription,setPostDescription] = useState("")
  const [postType,setPostType] = useState("")

  const [arrowUp, setArrowUp] = useState(false)
  const [arrowDown, setArrowDown] = useState(false)
  const [likeNumber, setLikeNumber] = useState(0)
  const [disLikeNumber, setDisLikeNumber] = useState(0)

  useEffect(() => {
    async function getPostInfo() {
      let APIPromise = PedradaAPI.get(`/post/${public_id}`)
      let APIResponse = await parseAPIResponse(APIPromise)
      const postInfo = APIResponse.data[0]
      setPostType(postInfo.post_type)
      setPostDescription(postInfo.post_description)

      APIPromise = PedradaAPI.get(`/user/id/${postInfo.owner_public_id}`)
      APIResponse = await parseAPIResponse(APIPromise)
      const owner = APIResponse.data[0]
      setUser1(owner.pseudonym)
     

      if (postType === "identified"){
        APIPromise = PedradaAPI.get(`/user/id/${postInfo.owner_public_id}`)
        APIResponse = await parseAPIResponse(APIPromise)
        const identified = APIResponse.data[0]
        console.log(identified)
        setUser2(identified.pseudonym)
      }else{
        APIPromise = PedradaAPI.get(`/community/id/${postInfo.community_public_id}`)
        APIResponse = await parseAPIResponse(APIPromise)
        const community = APIResponse.data[0][0]
       
        setUser2(community.community_name)
      }
    }
    getPostInfo()

  }, [])

  function likePost() {

    if(arrowUp) {
      setArrowUp(false)
      setLikeNumber((prev) => prev - 1 )
    } else {
      setArrowUp(true)
      setLikeNumber((prev) => prev + 1 )
    }
    if(arrowDown){
      setArrowDown(false)
      setDisLikeNumber((prev) => prev - 1)
    }

    // enviar requisição
  }
  function disLikePost() {
    if(arrowDown) {
      setArrowDown(false)
      setDisLikeNumber((prev) => prev - 1 )
    } else {
      setArrowDown(true)
      setDisLikeNumber((prev) => prev + 1 )
    }
    if(arrowUp){
      setArrowUp(false)
      setLikeNumber((prev) => prev - 1)
    }
    // enviar requisição

  }

  return (
    <div className="post-container">
      <div className="users-pseudonyms-container">
        <p className="user-pseudonyms">{user1}</p>
        {postType === "identified" ? <TrowStone className="trow-stone-icon" />: <StoneTablet className="stone-tablet-icon"/> }
        <p className="user-pseudonyms" >{user2}</p>
      </div>
      <div className="post-description">
        <p className="post-text">{postDescription}</p>
      </div>
      <div className="interactions-container">
        <Arrow className={arrowUp ? "interactions-arrow-up interactions-active" : "interactions-arrow-up"}
          OnSelected={likePost} />
        <p>{likeNumber}</p>
        <Arrow className={arrowDown ? "interactions-arrow-down interactions-active" : "interactions-arrow-down"}
          OnSelected={disLikePost} />
        <p>{disLikeNumber}</p>
      </div>
    </div>
  )
}

export default Post