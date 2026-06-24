import { motion } from 'framer-motion'
import { BadgeCheck, Sparkles, Headset } from 'lucide-react'
import { fadeUp, scaleIn, viewportOnce } from '../../utils/motion'
import { destinations } from '../../data/destinations'

const points = [
  { icon: BadgeCheck, label: 'Trusted Travel Partner' },
  { icon: Sparkles, label: 'Spiritual Tourism Experts' },
  { icon: Headset, label: '24×7 Customer Support' },
]

const jagannathImage = destinations.find((d) => d.id === 'jagannath-temple')?.image
const khandagiriImage = destinations.find((d) => d.id === 'khandagiri-udayagiri')?.image

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto grid w-[92%] max-w-7xl items-center gap-14 lg:grid-cols-2">
        {/* Images */}
        <motion.div
          variants={scaleIn()}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative"
        >
          <img
            src={jagannathImage}
            alt="Jagannath Temple, Puri"
            loading="lazy"
            className="h-[480px] w-full rounded-[2rem] object-cover shadow-soft"
          />
          <motion.img
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.3 }}
            src={khandagiriImage}
            alt="Khandagiri & Udayagiri Caves"
            loading="lazy"
            className="absolute -bottom-8 -left-6 hidden h-56 w-44 rounded-2xl border-8 border-cream object-cover shadow-soft md:block"
          />
          <div className="absolute -right-4 top-8 rounded-2xl bg-navy px-6 py-4 text-center text-cream shadow-soft">
            <span className="block font-display text-3xl text-gold">10+</span>
            <span className="text-[0.65rem] uppercase tracking-[0.2em]">Years of Service</span>
          </div>
        </motion.div>

        {/* Copy */}
        <motion.div
          variants={fadeUp()}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-saffron-dark">
            About Us
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-navy md:text-5xl">
            Odisha Travel Made Comfortable
          </h2>
          <p className="mt-6 font-serif text-lg leading-relaxed text-navy/70 md:text-xl">
            Jagannath Puri Tour and Travel Agency specializes in comfortable spiritual tours,
            family vacations, pilgrimage tours, Odisha sightseeing, group travel, and transportation
            services across Odisha.
          </p>
          <p className="mt-4 font-serif text-lg leading-relaxed text-navy/70 md:text-xl">
            We provide well-maintained vehicles, experienced drivers, affordable pricing, and
            customized travel experiences for individuals, families, and groups.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {points.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="glass flex items-center gap-3 rounded-2xl px-5 py-3"
              >
                <Icon className="h-6 w-6 text-saffron-dark" />
                <span className="font-medium text-navy">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
