import { Routes, Route } from "react-router-dom"
import HomeContainer from "./containers/HomeContainer.jsx"
import FavContainer from "./containers/FavContainer.jsx"
import LoginContainer from "./containers/LoginContainer.jsx"
import SignupContainer from "./containers/SignupContainer.jsx"
import Navbar from "./components/Navbar.jsx"
import React from 'react';


const App = () => {
  return (
    <div id='appContainer'>
      <h1>This is a test</h1>
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