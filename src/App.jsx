import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from "./Pages/Home/Homepage"
import LoginPage from "./Pages/Login/Loginpage"
import PlayerPage from './Pages/Player/PlayerPage'

const App = () => {
  return (
    <div>
    <Routes>
    <Route path='/' element={ <Homepage/>} />
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/player/:Id' element={<PlayerPage/>}/>
    </Routes>
   
    </div>
  )
}

export default App