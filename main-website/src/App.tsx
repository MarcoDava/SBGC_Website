import { useEffect } from 'react'
import { useLocation } from 'react-router'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <div className="min-h-screen w-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
        <div className="flex justify-center items-start flex-1 w-screen bg-[#2a1f1f]">
          <Outlet />
        </div>
      <Footer />
    </div>
  )
}

export default App
