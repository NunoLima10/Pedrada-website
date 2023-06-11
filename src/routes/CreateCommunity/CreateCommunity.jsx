import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import FormBox from '../../components/FormBox/FormBox';
import FormError from '../../components/FormError/FormError';
import BackgroundImage from '../../assets/backgound-images.jpg';
import { AuthContext } from '../../Contexts/AuthContext'
import PedradaAPI from '../../api/api';
import {parseAPIResponse} from '../../api/api';
import "./CreateCommunity.css"

const CreateCommunity = () => {

    const [communityName, setCommunityName] = useState("");
    const [description, setDescription] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);

    async function submitHandler(event) {
        event.preventDefault();

        const requestData = {
            token: "helllo",
            community_name: communityName.trim(),
            community_description: description.trim()
          }
        
        const APIPromise = PedradaAPI.post("/communities", requestData)
        const APIResponse =  await parseAPIResponse(APIPromise)

        if (APIResponse.errorMessage){
            setErrorMessage(APIResponse.errorMessage)
            return
          }
           
    }
    
    function closeErroMessage(e) {
        setErrorMessage(null)
      }

    return (
        <div className="createCommunity-container">
          <img src={BackgroundImage} alt='background' className='background-image-low-brightness' />
          <FormBox
            title={"Criar Comunidade"}
            submitHandler={submitHandler}
            submitButtonText={"Criar"}
            questionText={{ question: "O que é uma Comunidade", link: "ver" }}
            questionOnClick={() => ''}
          >
            <input className='from-input' type="text" id="community-name" placeholder='Nome' value={communityName}
              onChange={(e) => setCommunityName(e.target.value)}
            />
            <textarea className='input-community-description' type="text" id="description" placeholder='Descrição' value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormBox>
          <FormError errorMessage={errorMessage} onClose={closeErroMessage} />
        </div>
      )
}

export default CreateCommunity