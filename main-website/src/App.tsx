import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="h-full w-[100vw] flex flex-col justify-center items-center">
      <Navbar /> 
        <div className="flex justify-center items-center h-full w-full bg-[#DFDAD6]">
          <Outlet />
        </div>
      <Footer />
    </div>
  )
}

export default App
