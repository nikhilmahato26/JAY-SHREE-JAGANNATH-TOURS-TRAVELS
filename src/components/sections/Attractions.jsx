import { motion } from 'framer-motion'
import { MapPin, ArrowUpRight } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'
import { destinations } from '../../data/destinations'
import { staggerContainer, fadeUp, viewportOnce } from '../../utils/motion'

export default function Attractions() {
  return (
    <section id="attractions" className="py-24 md:py-32">
      <div className="mx-auto w-[92%] max-w-7xl">
        <SectionHeading
          eyebrow="Sacred Odisha"
          title="Destinations Worth The Journey"
          subtitle="From the holy Char Dham to UNESCO heritage and golden coastlines — explore the soul of Odisha."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {destinations.map((d, i) => (
            <motion.article
              key={d.id}
              variants={fadeUp()}
              whileHover={{ y: -8 }}
              className={`group relative overflow-hidden rounded-3xl shadow-glass ${
                i % 3 === 0 ? 'sm:col-span-2 sm:row-span-1' : ''
              }`}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={d.image}
                  alt={d.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 text-cream">
                <span className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-widest text-gold">
                  <MapPin className="h-3.5 w-3.5" /> {d.location}
                </span>
                <h3 className="mt-1 font-display text-2xl md:text-3xl">{d.name}</h3>
                <p className="mt-2 max-h-0 overflow-hidden text-sm text-cream/80 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                  {d.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {d.highlights.slice(0, 3).map((h) => (
                    <span
                      key={h}
                      className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[0.65rem] uppercase tracking-wide backdrop-blur"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              <span className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-navy opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
