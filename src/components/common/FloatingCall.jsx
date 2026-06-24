import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { SITE } from '../../utils/site'

export default function FloatingCall() {
  return (
    <motion.a
      href={`tel:+${SITE.phoneRaw}`}
      aria-label={`Call ${SITE.name}`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-saffron-gold text-white shadow-[0_14px_30px_-8px_rgba(217,119,6,0.7)]"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-saffron-gold opacity-40" />
      <Phone className="relative h-7 w-7" />
    </motion.a>
  )
}
