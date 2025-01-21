import React,  { useState } from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import Jurey from './Components/Jurey/Jurey'
import LeaderBoard from './Components/LeaderBoard/LeaderBoard'
import SelfNomination from './Components/Nomination/SelfNomination'
import './Routers.css'

const Routers = () => {
  
    

  return (
    <div className='main-body'>
      
        <Header  />
        <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/jurey' element={<Jurey/>} />
        <Route exact path='/leaderboard' element={<LeaderBoard/>} />
        <Route exact path='/nomination' element={<SelfNomination/>} />

        </Routes>
       
    </div>
  )
}

export default Routers
