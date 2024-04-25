import React, { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;




export const AuthProvider = ({ children }) => {
  let [user, setUser] = useState(()=> localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null)
    
  let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)

  let [loading, setLoading] = useState(true)

  const history = useNavigate();
  
  const loginUser = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("http://127.0.0.1:8000/api/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: e.target.username.value,
          password: e.target.password.value,
        }),
      });

      const data = await response.json();
      
      if (response.status === 200) {
        setAuthTokens(data);
        setUser(jwtDecode(data.access));
        localStorage.setItem("authTokens", JSON.stringify(data));
        history("/");
      } else {
        console.log("error:", data);
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong during login.");
    }
  };

  let logoutUser = () => {
    setAuthTokens(null)
    setUser(null)
    localStorage.removeItem('authTokens')
    history('/')
}


let updateToken = async ()=> {

  let response = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
      method:'POST',
      headers:{
          'Content-Type':'application/json'
      },
      body:JSON.stringify({'refresh':authTokens?.refresh})
  })

  let data = await response.json()
  
  if (response.status === 200){
      setAuthTokens(data)
      setUser(jwtDecode(data.access))
      localStorage.setItem('authTokens', JSON.stringify(data))
  }else{
      logoutUser()
  }

  if(loading){
      setLoading(false)
  }
}
  
  const authContextValue = {
    user: user,
    loginUser: loginUser,
    logoutUser: logoutUser,
    updateToken: updateToken
  };

  useEffect(()=> {

    if(loading){
        updateToken()
    }

    let fourMinutes = 1000 * 60 * 4

    let interval =  setInterval(()=> {
        if(authTokens){
            updateToken()
        }
    }, fourMinutes)
    return ()=> clearInterval(interval)

}, [authTokens, loading, updateToken])
  
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
