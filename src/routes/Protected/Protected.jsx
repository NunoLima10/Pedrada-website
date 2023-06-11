import { useContext } from 'react';
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../../Contexts/AuthContext'


const Protected = ({ userRoles, children }) => {
  const ctx = useContext(AuthContext)


  const isAuthorized = ctx.validToken()

  if (!isAuthorized) {
    return <Navigate to="/login" replace />
  }
  return children
}

export default Protected