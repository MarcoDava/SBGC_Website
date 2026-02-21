import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="h-full w-screen flex flex-col justify-center items-center">
      <Navbar /> 
        <div className="flex justify-center items-center h-full w-screen bg-[#2a1f1f]">
          <Outlet />
        </div>
      <Footer />
    </div>
  )
}

export default App
