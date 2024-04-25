
import { Outlet, Navigate } from 'react-router-dom'


const PrivateRoutes = () => {
  console.log("private route works")
  // let auth = {'token': true }
  let auth = true
  return (
    auth ? 
      <Outlet /> : <Navigate to="/login" />
  
)
}

export default PrivateRoutes
