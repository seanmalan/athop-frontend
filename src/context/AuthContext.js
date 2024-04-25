import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [authTokens, setAuthTokens] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthenticated(true);
    }
  }, []);

  let loginUser = async (e) => {
    e.preventDefault();
    
    let response = await fetch("http://127.0.0.1:8000/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });

    let data = await response.json()
    console.log('data:', data)
  };

  let contextData = {
    authenticated,
    setAuthenticated,
    loginUser,
  };

  useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
        setAuthenticated(true);
      }
    }, []);

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
