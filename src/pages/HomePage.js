import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'
import PatronList from './PatronList'
import homepageLogo from '../images/pexels-liam-spicer-5342978.jpg'
import TravelForm from '../components/TravelForm'




const HomePage = () => {








  return (
    <>



    <div>
      <img src={homepageLogo} alt="homepage" className="homepage-image" />
      
    </div>

    <div className="journey-form-section">

      <TravelForm />
    </div>


    {/* this section is for admin only will display like an admin view that will show all of the patrons in a list nd have a search bar to narrow down the users. */}

    <div>
      <h2>Admin Dashboard view</h2>
      <PatronList />
    </div>
    </>
  )
}

export default HomePage