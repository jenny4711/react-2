import React from 'react'
import { NavLink } from "react-router-dom";
import "./App.css";

const NotFound = () => {
  return (
    <div className='not-found'>
     <h1>NOT FOUND!</h1>
     <h2>Please Go back to <NavLink to="/">Home Page</NavLink></h2>
    
      </div>
  )
}

export default NotFound