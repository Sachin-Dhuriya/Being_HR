import React,  { useState } from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import Jurey from './Components/Jurey/Jurey'
import LeaderBoard from './Components/LeaderBoard/LeaderBoard'
import SelfNomination from './Components/Nomination/SelfNomination'
import './Routers.css'
import OtherNomination from './Components/Header/OtherNomination'
import Nomination from './Components/NominateModal/Nomination'
import Nominationforself from './Components/Header/Nominationforself'
import OtherNm from './Components/Header/OtherNm'
import Nominationforself2 from './Components/Header/Nominationforself2'
import Login from './Components/Login/Login'

const Routers = () => {
  
    

  return (
    <div className='main-body'>
      
        <Header  />
        <Routes> 
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/jurey' element={<Jurey/>} />
        <Route exact path='/leaderboard' element={<LeaderBoard/>} />
        <Route exact path='/nomination' element={<Nomination/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/othernm' element={<OtherNm/>} />
        <Route exact path='/othernomination' element={<OtherNomination/>} />
        <Route exact path='/nominationforself' element={<Nominationforself/>} />
        <Route exact path='/nomination2' element={<Nominationforself2/>} />
        </Routes>
       
    </div>
  )
}

export default Routers
