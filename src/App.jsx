import { Routes, Route } from "react-router-dom"
import HomeContainer from "./containers/HomeContainer"
import FavContainer from "./containers/FavContainer"
import LoginContainer from "./containers/LoginContainer"
import SignupContainer from "./containers/SignupContainer"
import Navbar from "./components/Navbar"
import React from 'react';


const App = () => {
  return (
    <div id='appContainer'>
      <Navbar></Navbar>
      <div id='contentContainer'>
        <Routes>
          <Route exact path='/' element={<HomeContainer></HomeContainer>}></Route>
          <Route path='/favorites' element={<FavContainer></FavContainer>}></Route>
          <Route path='/login' element={<LoginContainer></LoginContainer>}></Route>
          <Route path='/signup' element={<SignupContainer></SignupContainer>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App