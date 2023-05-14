import React,{createContext, useState} from "react";

export const AuthContext = createContext()

function AuthProvider ({children}) {
    const [accessToken, setAccessToken] = useState(null)
  
    return (
      <AuthContext.Provider value={{accessToken,setAccessToken}}>
        {children}
      </AuthContext.Provider>
    )
  }
  export default AuthProvider