import Hero from '../components/sections/Hero'
import TrustBar from '../components/sections/TrustBar'
import About from '../components/sections/About'
import Services from '../components/sections/Services'
import Attractions from '../components/sections/Attractions'
import Fleet from '../components/sections/Fleet'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import Testimonials from '../components/sections/Testimonials'
import Gallery from '../components/sections/Gallery'
import BookingCTA from '../components/sections/BookingCTA'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Attractions />
      <Fleet />
      <WhyChooseUs />
      <Testimonials />
      <Gallery />
      <BookingCTA />
      <Contact />
    </>
  )
}
