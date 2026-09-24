import { useState } from 'react'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './Pages/Shop'



function App() {
  

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path ='/shop' element={<Shop></Shop>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
