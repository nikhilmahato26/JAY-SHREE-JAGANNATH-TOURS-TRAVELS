import { useEffect, useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'
import { testimonials } from '../../data/testimonials'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const count = testimonials.length

  const go = useCallback((dir) => setIndex((i) => (i + dir + count) % count), [count])

  useEffect(() => {
    const t = setInterval(() => go(1), 5000)
    return () => clearInterval(t)
  }, [go])

  const t = testimonials[index]

  return (
    <section className="bg-sand/40 py-24 md:py-32">
      <div className="mx-auto w-[92%] max-w-4xl">
        <SectionHeading eyebrow="Happy Travelers" title="Devotion In Their Words" />

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.45 }}
              className="glass relative rounded-[2rem] p-10 text-center md:p-14"
            >
              <Quote className="mx-auto h-12 w-12 text-saffron/30" />
              <div className="mt-4 flex justify-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="mx-auto mt-6 max-w-2xl font-serif text-xl leading-relaxed text-navy/80 md:text-2xl">
                “{t.text}”
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  className="h-14 w-14 rounded-full border-2 border-gold object-cover"
                />
                <div className="text-left">
                  <p className="font-display text-lg text-navy">{t.name}</p>
                  <p className="text-sm text-navy/55">{t.location}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              aria-label="Previous"
              className="grid h-11 w-11 place-items-center rounded-full border border-navy/15 text-navy transition-colors hover:bg-navy hover:text-cream"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to review ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index ? 'w-8 bg-saffron' : 'w-2.5 bg-navy/20'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Next"
              className="grid h-11 w-11 place-items-center rounded-full border border-navy/15 text-navy transition-colors hover:bg-navy hover:text-cream"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
