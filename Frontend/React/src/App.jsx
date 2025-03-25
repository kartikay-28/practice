import React from 'react'
import User from './components/Usercard'
import './App.css'

function App() {

  return (
   <div>
   <h1> User List </h1>
   <User name = "Kartikay" age = "18"></User>
   <User name = "Diven" age = "18"></User>
   <User name = "Akshit" age = "18"></User>
   <User name = "Aryaman" age = "18"></User>
   </div>
  )
}

export default App
