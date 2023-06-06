import "./Post.css"
import TrowStone from "../../assets/react-icons/TrowStone"
import StoneTablet from "../../assets/react-icons/StoneTablet"
import Arrow from "../../assets/react-icons/Arrow"
import { useState } from "react"

const UserPost = () => {
  const postType = "community"
  const [arrowUp, setArrowUp] = useState(false)
  const [arrowDown, setArrowDown] = useState(false)
  const [likeNumber, setLikeNumber] = useState(0)
  const [disLikeNumber, setDisLikeNumber] = useState(0)

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
        <p className="user-pseudonyms">User 1</p>
        {postType === "user" ? <TrowStone className="trow-stone-icon" />: <StoneTablet className="stone-tablet-icon"/> }
        <p className="user-pseudonyms" >User 2</p>
      </div>
      <div className="post-description">
        <p className="post-text">AAAAAAAAAAAAAAA  AAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
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

export default UserPost