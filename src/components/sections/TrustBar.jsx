import { motion } from 'framer-motion'
import { Smile, MapPinned, Headset, Car } from 'lucide-react'
import useCountUp from '../../hooks/useCountUp'
import { staggerContainer, fadeUp, viewportOnce } from '../../utils/motion'

const stats = [
  { icon: Smile, end: 5000, suffix: '+', label: 'Happy Travelers' },
  { icon: MapPinned, end: 1000, suffix: '+', label: 'Successful Tours' },
  { icon: Headset, end: 24, suffix: '×7', label: 'Customer Support' },
  { icon: Car, end: 6, suffix: '+', label: 'Premium Fleet' },
]

function Stat({ icon: Icon, end, suffix, label }) {
  const { ref, value } = useCountUp(end)
  return (
    <motion.div
      variants={fadeUp()}
      className="flex flex-col items-center gap-3 px-4 py-6 text-center"
    >
      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-saffron/10 text-saffron-dark">
        <Icon className="h-7 w-7" />
      </span>
      <div ref={ref} className="font-display text-4xl text-navy md:text-5xl">
        {value}
        <span className="text-gradient">{suffix}</span>
      </div>
      <p className="text-sm font-medium uppercase tracking-wider text-navy/60">{label}</p>
    </motion.div>
  )
}

export default function TrustBar() {
  return (
    <section className="relative z-10 -mt-16 px-4">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="glass mx-auto grid max-w-5xl grid-cols-2 gap-2 rounded-3xl p-4 md:grid-cols-4 md:p-6"
      >
        {stats.map((s) => (
          <Stat key={s.label} {...s} />
        ))}
      </motion.div>
    </section>
  )
}
