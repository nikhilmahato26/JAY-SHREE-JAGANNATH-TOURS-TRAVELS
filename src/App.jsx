import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import FloatingWhatsApp from './components/common/FloatingWhatsApp'
import FloatingCall from './components/common/FloatingCall'
import Home from './pages/Home'

export default function App() {
  return (
    <div className="relative min-h-screen bg-cream">
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
      <FloatingCall />
      <FloatingWhatsApp />
    </div>
  )
}
