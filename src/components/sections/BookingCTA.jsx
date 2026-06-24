import { motion } from 'framer-motion'
import { Phone, MessageCircle } from 'lucide-react'
import Button from '../common/Button'
import { fadeUp, viewportOnce } from '../../utils/motion'
import { SITE, WHATSAPP_LINK } from '../../utils/site'

export default function BookingCTA() {
  return (
    <section className="relative overflow-hidden py-24 md:py-28">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2000&auto=format&fit=crop"
          alt="Odisha journey"
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/80" />
      </div>

      <motion.div
        variants={fadeUp()}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mx-auto w-[92%] max-w-3xl text-center"
      >
        <span className="font-serif text-lg text-gold">{SITE.tagline}</span>
        <h2 className="mt-3 font-display text-4xl leading-tight text-cream md:text-6xl">
          Ready For Your Odisha Journey?
        </h2>
        <p className="mt-5 font-serif text-lg text-cream/80 md:text-xl">
          Book your spiritual, family, or sightseeing trip today and travel with comfort &amp;
          devotion.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Button href={`tel:${SITE.phoneRaw}`} size="lg">
            <Phone className="h-5 w-5" /> Call Now
          </Button>
          <Button
            href={WHATSAPP_LINK()}
            target="_blank"
            rel="noreferrer"
            variant="outline"
            size="lg"
          >
            <MessageCircle className="h-5 w-5" /> WhatsApp Booking
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
