import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";



const PatronList = () => {

  let [patronList, setPatronList] = useState([])
  let [isLoading, setIsLoading] = useState(true)
  let [error, setError] = useState(null)


  console.log(patronList)

  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch('http://127.0.0.1:8000/api/patrons/')
      let data = await response.json()

      if (!response.ok) {
        setError(data)
        setIsLoading(false)
        return
      }

      setIsLoading(false)
      setPatronList(data)
    }

    fetchData()

  }
  , [])

  
  if (isLoading) {
    return <div>Just a couple more seconds...</div>
  }

  if (error) {
    return (
    <div>
      <div>Uh oh! Something went wrong!</div>
      <div>{error.message}</div>
    </div>
  )
  }


  return (

    <>

    <h1>Patron List</h1>

    <h3>
      {patronList.map((patron) => {
        return (
          
          <div key={patron.id}>
            <h3>{patron.first_name} {patron.last_name}</h3>
            <p>{patron.email}</p>
            <p>{patron.phone}</p>
            <Link to={`/patron/${patron.id}`}>View Patron</Link>
          </div>
          
          
        )
      }
      )}
    </h3>



    
  
  
  
  
    </>
  )
}

export default PatronList