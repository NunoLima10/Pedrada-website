import axios from "axios";


const PedradaAPI = axios.create({
    baseURL: "https://dd1b-41-215-209-222.eu.ngrok.io"
})

export async function parseAPIResponse(APIPromise) {
    let data = null
    let successMessage = null
    let errorMessage = null

    try {
        const response = await APIPromise
        const responseData = response.data
        data = responseData.data
        successMessage = responseData.success_message["0"]["1"]
    } catch (error) {
        const response = await error.response
        if (response){
            const responseData = response.data
            errorMessage = responseData.error_message["0"]["1"]
        }
    }
    const APIResponse = {
        data: data,
        successMessage: successMessage,
        errorMessage: errorMessage
    }

   return APIResponse
}

export default PedradaAPI;
 // const message = dataResponse.success_message
    // console.log(message["0"]["1"])