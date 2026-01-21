import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="h-full w-full flex flex-col justify-between items-center">
      <Navbar /> 
        <div className="flex justify-center items-start w-full mt-[10vh]">
          <Outlet />
        </div>
      <Footer />
    </div>
  )
}

export default App
