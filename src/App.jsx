import Home from './pages/Home'
import Navbar from './ui/components/surfaces/Navbar'
import Footer from './ui/components/surfaces/Footer'

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
    </>
  )
}

