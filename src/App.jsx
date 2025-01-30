import React from 'react'
import { Routes,Route } from 'react-router-dom'
import NavBar1 from './Components/NavBar1'
import NavBar2 from './Components/NavBar2'
import Carosel from './Components/Carosel'
import ImageBoxes from './Components/ImageBoxes'
import InformationBar from './Components/InformationBar'
import SubFooter from './Components/SubFooter'
import SignIn from './Components/SignIn'


const App = () => {
  return (
    <>
    <Routes>
      <Route path='/sign-in' element={<SignIn/>}/>
    </Routes>
    <NavBar1/>
    <NavBar2/>
    <Carosel/>
    <ImageBoxes/>
    <InformationBar/>
    <SubFooter/>
    </>
  )
}

export default App