import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from "./Pages/Home/Homepage"
import LoginPage from "./Pages/Login/Loginpage"

const App = () => {
  return (
    <div>
    <Routes>
    <Route path='/' element={ <Homepage/>} />
    <Route path='/login' element={<LoginPage/>}/>
    </Routes>
   
    </div>
  )
}

export default App