import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Coffees from './pages/Coffees'
import Footer from './components/Footer'
import About from './pages/About'

const App = () => {
  return (
    <div className='main'>
      <Navbar/>
      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/coffees" element={<Coffees/>} />
       <Route path="/about" element={<About/>} />
      </Routes>
      <Footer/>
    </div>
  )
}
export default App