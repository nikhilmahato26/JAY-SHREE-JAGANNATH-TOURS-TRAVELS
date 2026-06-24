import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../../utils/motion'

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'
  return (
    <motion.div
      variants={fadeUp()}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`max-w-2xl ${alignment} mb-12 md:mb-16`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-saffron-dark">
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-4 font-display text-3xl leading-tight md:text-5xl ${
          light ? 'text-cream' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      {align === 'center' && (
        <div className="mx-auto mt-5 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-gold" />
          <span className="text-saffron">✦</span>
          <span className="h-px w-12 bg-gold" />
        </div>
      )}
      {subtitle && (
        <p
          className={`mt-5 font-serif text-lg md:text-xl ${
            light ? 'text-cream/75' : 'text-navy/65'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
