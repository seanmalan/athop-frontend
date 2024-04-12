import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";



const JourneysList = () => {

  let [journeysList, setJourneysList] = useState([])
  let [isLoading, setIsLoading] = useState(true)
  let [error, setError] = useState(null)


  console.log(journeysList)

  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch('http://127.0.0.1:8000/api/journeys/')
      let data = await response.json()

      if (!response.ok) {
        setError(data)
        setIsLoading(false)
        return
      }

      setIsLoading(false)
      setJourneysList(data)
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

    <h1>Journey List</h1>

    <h3>
      {journeysList.map((journey) => {
        return (
          
          <div key={journey.id}>
            <h3>{journey.first_name} {journey.last_name}</h3>
            <p>{journey.email}</p>
            <p>{journey.phone}</p>
            <Link to={`/journey/${journey.id}`}>View journey</Link>
          </div>
          
          
        )
      }
      )}
    </h3>



    
  
  
  
  
    </>
  )
}

export default JourneysList