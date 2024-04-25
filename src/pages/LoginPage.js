import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const LoginPage = () => {
  let { loginUser } = useContext(AuthContext);

  return (
    <div>
      <form onSubmit={loginUser}>
        <label>
          Username:
          <input type="text" name="username" placeholder="enter your username" />
        </label>
        <label>
          Password:
          <input
            type="text"
            name="password"
            placeholder="enter your password"
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default LoginPage;
