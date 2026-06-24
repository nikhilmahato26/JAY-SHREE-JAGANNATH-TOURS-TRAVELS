import { motion } from 'framer-motion'
import {
  ShieldCheck,
  UserCheck,
  Car,
  Wallet,
  Route,
  Sparkles,
  Headset,
} from 'lucide-react'
import SectionHeading from '../common/SectionHeading'
import { staggerContainer, fadeUp, viewportOnce } from '../../utils/motion'

const reasons = [
  { icon: ShieldCheck, title: 'Trusted Travel Partner', desc: 'Reliable and professional travel services you can count on.' },
  { icon: UserCheck, title: 'Experienced Drivers', desc: 'Safe, courteous and knowledgeable local drivers.' },
  { icon: Car, title: 'Comfortable Vehicles', desc: 'Clean, sanitized and well-maintained fleet.' },
  { icon: Wallet, title: 'Affordable Packages', desc: 'Competitive, transparent pricing for all tours.' },
  { icon: Route, title: 'Customized Itineraries', desc: 'Travel plans tailored to your needs and budget.' },
  { icon: Sparkles, title: 'Spiritual Tourism Expertise', desc: 'Specialized Jagannath and Odisha pilgrimage tours.' },
  { icon: Headset, title: '24×7 Customer Support', desc: 'Always available to assist travelers, anytime.' },
]

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto w-[92%] max-w-7xl">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Your Trusted Travel Partner"
          subtitle="Premium care, fair pricing and deep local expertise on every journey."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {reasons.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={fadeUp()}
              whileHover={{ y: -6 }}
              className="glass rounded-3xl p-8"
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-saffron-gold text-white shadow-glow">
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-display text-xl text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/60">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
