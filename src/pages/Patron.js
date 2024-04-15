import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import "./Patron.css"

const Patron = () => {
  let { id } = useParams()
  let [patronData, setPatronData] = useState([])
  let [isLoading, setIsLoading] = useState(true)
  let [error, setError] = useState(null)


  console.log(patronData)

  useEffect(() => {
    let fetchData = async () => {
      let patronResponse = await fetch(`http://127.0.0.1:8000/api/patron/${id}`)
      let userData = await patronResponse.json()

      if (!patronResponse.ok) {
        setError(userData)
        setIsLoading(false)
        return
      }

      setIsLoading(false)
      setPatronData(userData)
    }

    fetchData()

  }
  , [id])

  
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

    <h1 style={{textAlign: "center"}}>Patron</h1>

    <div className='indiv-patron-details'>
      
          <div key={patronData.patron.id}>
            <h3>{patronData.patron.first_name} {patronData.patron.last_name}</h3>
            <p>{patronData.patron.email}</p>
            <p>{patronData.patron.phone}</p>
          </div>
    </div>

    <div className='indiv-patron-cards'>
      <h2>
        Cards
      </h2>
      {patronData.cards.map((card) => {
        return (
          <div key={card.id} className='indiv-patron-card'>
            <h3> Your card number is: {card.card_number}</h3>
            <p>Youre Current Balance is: ${card.balance}</p>
            
          </div>
        )
      }
      )}
      
    </div>

    <div className='indiv-patron-journey'>
      <h2>Journeys</h2>

      {patronData.journeys.map((journey) => {
        return (
          <div key={journey.id}>
            <h3>{journey.start_location} to {journey.end_location}</h3>
            
            <p>{journey.start_time}</p>
            
            <p>{journey.end_time}</p>
            <p>{journey.fare}</p>
          </div>
        )
      })}
    </div>

    <div className='indiv-patron-transaction'>
     <h2>Transactions</h2>

      {patronData.transactions.map((transaction) => {
        return (
          <div key={transaction.id}>
            <p>Your original Balance was: ${transaction.original_balance}</p>
            <p>Your top up amount was: ${transaction.amount}</p>
            <p>Your current balance is: ${transaction.new_balance}</p>

            <p>Date of Transaction: {transaction.created}</p>
          </div>
        )
      })}

    </div>

    
  
  
  
  
    </>
  )
}

export default Patron