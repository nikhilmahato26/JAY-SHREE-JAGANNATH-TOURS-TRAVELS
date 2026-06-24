import { motion } from 'framer-motion'
import SectionHeading from '../common/SectionHeading'
import { gallery } from '../../data/gallery'
import { viewportOnce } from '../../utils/motion'

const spanClass = {
  tall: 'row-span-2',
  wide: 'col-span-2',
  normal: '',
}

export default function Gallery() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto w-[92%] max-w-7xl">
        <SectionHeading
          eyebrow="Travel Gallery"
          title="Moments From The Journey"
          subtitle="Glimpses of sacred temples, golden beaches and joyful travelers across Odisha."
        />

        <div className="grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-4">
          {gallery.map((g, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl ${spanClass[g.span]}`}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-navy/80 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="font-display text-lg text-cream">{g.alt}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
