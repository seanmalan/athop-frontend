import React from 'react'

const LoginPage = () => {
  return (
    <div>
    <form>
      <label>
        Username:
        <input type="text" name="name" placeholder='enter your username'/>
      </label>
      <label>
        Password:
        <input type="text" name="password" placeholder='enter your password'/>
      </label>
      <input type="submit" value="Submit" />
    </form>
    </div>
  )
}

export default LoginPage