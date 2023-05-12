import Home from './pages/HomePage'
import Navbar from './ui/components/surfaces/Navbar'
import Footer from './ui/components/surfaces/Footer'
import { Analytics } from '@vercel/analytics/react'

import './App.css'
import { Contexts } from './contexts/Contexts'

export default function App() {

  return (
    <>
      <Contexts>
        <Navbar/>
        <Home/>
        <Footer/>
      </Contexts>
      <Analytics/>
    </>
  )
}

