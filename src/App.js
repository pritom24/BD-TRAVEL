import React from 'react'
import './app.css'
import {Routes, Route} from "react-router-dom"
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Main from './components/Main/Main'
import Navbar from './components/Navbar/Navbar'
// import Tour from './components/Tour/Tour'
import Hotel from './components/Hotel/Hotel'
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      {/* <Route exact path='/' element={<Main/>}/> */}

      <Route exact path='/hotel' element={<Hotel/>}/>
      {/* <Route exact path='/homeStay' element={<HomeStay/>}/> */}
    </Routes>
    {/* <Home/>
    <Main/> */}
    <Footer/>
    </>
  )
}

export default App