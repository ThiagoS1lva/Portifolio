import { Suspense, lazy } from 'react'
import Home from './pages/HomePage'
import Navbar from './ui/components/surfaces/Navbar'
import Footer from './ui/components/surfaces/Footer'
import ScrollToTop from './ui/components/ScrollToTop'
import { Analytics } from '@vercel/analytics/react'

import { Contexts } from './contexts/Contexts'
import { ThemeProvider } from './contexts/ThemeContext'

const Particles = lazy(() => import('./ui/components/Particles'))
const Terminal = lazy(() => import('./ui/components/Terminal'))

export default function App() {
  return (
    <>
      <ThemeProvider>
        <Contexts>
          <Suspense fallback={null}>
            <Particles />
          </Suspense>
          <Navbar />
          <Home />
          <Footer />
          <ScrollToTop />
          <Suspense fallback={null}>
            <Terminal />
          </Suspense>
        </Contexts>
      </ThemeProvider>
      <Analytics />
    </>
  )
}
