import React from 'react'
import { Routes,Route } from 'react-router-dom'
import SignIn from './Components/SignIn'
import Home from './pages/Home'
import FormikForm from './Components/FormikForm'
import DisplayHeadsets from './Components/DisplayHeadsets'
import Cart from './Components/Cart'
import './App.css'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/headsets' element={<DisplayHeadsets/>}/>
      <Route path='/cart'element={<Cart/>}/>
      <Route path=''/>
      <Route path=''/>
      <Route path=''/>
      <Route path='/sign-up' element={<FormikForm/>}/>
      <Route path='/sign-in' element={<SignIn/>}/>
    </Routes>
    
    </>
  )
}

export default App