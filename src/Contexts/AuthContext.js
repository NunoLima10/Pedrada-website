import React, { createContext } from "react";
import PedradaAPI, { parseAPIResponse } from '../api/api';


export const AuthContext = createContext()
async function login(token){
  localStorage.setItem("accessToken", token)
}
async function logout(){
  localStorage.removeItem("accessToken")
}

async function validToken(){
  //aulo login
  
  
  var token = localStorage.getItem("accessToken");


  if(!token){ return false}

  const APIPromise = PedradaAPI.get(`/login/valid/${token}`)
  const APIResponse = await parseAPIResponse(APIPromise)
  
  return APIResponse.data.is_valid
  
}

function AuthProvider ({children}) {
  
    return (
      <AuthContext.Provider value={{validToken,login,logout}}>
        {children}
      </AuthContext.Provider>
    )
  }
  export default AuthProvider