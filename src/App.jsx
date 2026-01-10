import Home from './pages/HomePage'
import Navbar from './ui/components/surfaces/Navbar'
import Footer from './ui/components/surfaces/Footer'
import Particles from './ui/components/Particles'
import ScrollToTop from './ui/components/ScrollToTop'
import { Analytics } from '@vercel/analytics/react'

import './App.css'
import { Contexts } from './contexts/Contexts'

export default function App() {
  return (
    <>
      <Contexts>
        <Particles />
        <Navbar />
        <Home />
        <Footer />
        <ScrollToTop />
      </Contexts>
      <Analytics />
    </>
  )
}
