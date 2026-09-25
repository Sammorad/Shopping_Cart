import { useState } from 'react'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './Pages/Shop'
import Cart from './Pages/Cart'




function App() {
  

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path ='/shop' element={<Shop></Shop>}></Route>
      <Route path='/cart' element = {<Cart></Cart>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
