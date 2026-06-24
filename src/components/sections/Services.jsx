import { motion } from 'framer-motion'
import SectionHeading from '../common/SectionHeading'
import { services } from '../../data/services'
import { staggerContainer, fadeUp, viewportOnce } from '../../utils/motion'

export default function Services() {
  return (
    <section id="services" className="bg-sand/40 py-24 md:py-32">
      <div className="mx-auto w-[92%] max-w-7xl">
        <SectionHeading
          eyebrow="What We Offer"
          title="Premium Travel Services"
          subtitle="Everything you need for a seamless Odisha journey — from temple darshan to airport transfers."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map(({ title, desc, icon: Icon, image }) => (
            <motion.article
              key={title}
              variants={fadeUp()}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-glass"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                <span className="absolute left-4 top-4 grid h-12 w-12 place-items-center rounded-2xl bg-white/90 text-saffron-dark shadow-md backdrop-blur">
                  <Icon className="h-6 w-6" />
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/60">{desc}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
