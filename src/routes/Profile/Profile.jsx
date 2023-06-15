import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import PedradaAPI, { parseAPIResponse } from '../../api/api';
import "./Profile.css";

const Profile = () => {


    const profile = useParams()
    const [userName, setUserName] = useState()
    const [postsType, setPostsType] =  useState("posted")

    useEffect(() => {
        async function getProfileInfo() {
            const APIPromise = PedradaAPI.get(`/users?pseudonym=${profile.pseudonym}`)
            const APIResponse = await parseAPIResponse(APIPromise)
            const user = APIResponse.data[0]
            setUserName(user.pseudonym)
          
        }
        getProfileInfo()
    
      }, [profile.pseudonym])
      async function changePostsType(type){
        setPostsType(type)
      }
    
    return (
        <div className="profile-container">
            <div className="profile-info">
                <div className="banner">
                    <div className="profile-icon"></div>
                </div>
                <p className="profile-user-name">{userName}</p>
            </div>
            <div className="profile-navbar">
                <p 
                    className={ postsType === "posted" ? "profile-navbar-item-selected": "profile-navbar-item"} 
                    onClick={() => changePostsType("posted")}>Postados</p>
                <p 
                className={ postsType === "identified" ? "profile-navbar-item-selected": "profile-navbar-item"} 
                onClick={() => changePostsType("identified") }>Identificados</p>
            </div>
            <div className="profile-post-container">
           
            </div>
        </div>

    )
}

export default Profile