import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'
import Button from '../common/Button'
import { fleet } from '../../data/fleet'
import { staggerContainer, fadeUp, viewportOnce } from '../../utils/motion'

function FleetCard({ car }) {
  return (
    <motion.article
      variants={fadeUp()}
      whileHover={{ y: -8 }}
      className="group flex w-[300px] shrink-0 flex-col overflow-hidden rounded-3xl border border-white/10 bg-navy-light/40 backdrop-blur-md md:w-auto"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <span className="absolute left-4 top-4 rounded-full bg-saffron-gold px-3 py-1 text-xs font-medium text-white">
          {car.tier}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl text-cream">{car.name}</h3>
        <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-gold">Best For</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {car.bestFor.map((b) => (
            <span
              key={b}
              className="rounded-full bg-white/5 px-3 py-1 text-xs text-cream/75"
            >
              {b}
            </span>
          ))}
        </div>
        <ul className="mt-4 space-y-2">
          {car.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-cream/80">
              <Check className="h-4 w-4 text-saffron-light" /> {f}
            </li>
          ))}
        </ul>
        <Button href="#contact" variant="primary" className="mt-6 w-full">
          Book This Vehicle <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </motion.article>
  )
}

export default function Fleet() {
  return (
    <section id="fleet" className="bg-navy-glow py-24 md:py-32">
      <div className="mx-auto w-[92%] max-w-7xl">
        <SectionHeading
          eyebrow="Our Fleet"
          title="Travel In Comfort"
          subtitle="Clean, sanitized and well-maintained vehicles for every kind of journey."
          light
        />

        {/* Horizontal scroll on mobile, grid on desktop */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="no-scrollbar -mx-[4%] flex gap-6 overflow-x-auto px-[4%] pb-4 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-3"
        >
          {fleet.map((car) => (
            <FleetCard key={car.id} car={car} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
