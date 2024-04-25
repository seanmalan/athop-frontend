
import { Outlet, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'


const PrivateRoutes = () => {
  console.log("private route works")
  let user = useContext(AuthContext)
  // let auth = {'token': true }
  let auth = true
  return (
    auth ? 
      <Outlet /> : <Navigate to="/login" />
  
)
}

export default PrivateRoutes
