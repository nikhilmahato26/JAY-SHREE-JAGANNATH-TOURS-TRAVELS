import { motion, useScroll, useTransform } from 'framer-motion'
import { Sparkles, ArrowRight, Car, Headset, ShieldCheck, Landmark, Users } from 'lucide-react'
import Button from '../common/Button'
import { fadeUp, staggerContainer } from '../../utils/motion'

const HERO_IMAGE =
  'https://images.pexels.com/photos/27286530/pexels-photo-27286530.jpeg'

const cardItems = [
  { icon: Headset, label: '24×7 Support' },
  { icon: ShieldCheck, label: 'Safe Travel' },
  { icon: Car, label: 'Experienced Drivers' },
  { icon: Landmark, label: 'Spiritual Tours' },
  { icon: Users, label: 'Family Packages' },
]

export default function Hero() {
  const { scrollY } = useScroll()
  const yParallax = useTransform(scrollY, [0, 600], [0, 140])
  const opacity = useTransform(scrollY, [0, 500], [1, 0])

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background image with parallax */}
      <motion.div  className="absolute  h-full w-full" style={{ y: yParallax }}>
        <img
          src={HERO_IMAGE}
          alt="Konark Sun Temple, Odisha"
          className="h-full w-full object-cover"
        />
      </motion.div>



      <div className="mx-auto grid w-[92%] max-w-7xl items-center gap-12 pt-28 pb-20 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left content */}
        <motion.div variants={staggerContainer()} initial="hidden" animate="show">
          <motion.span
            variants={fadeUp()}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-cream backdrop-blur-md"
          >
            <Sparkles className="h-4 w-4 text-gold" /> Odisha's Trusted Travel Partner
          </motion.span>

          <motion.h1
            variants={fadeUp(0.1)}
            className="mt-6 font-display text-4xl leading-[1.05] text-white drop-shadow-lg sm:text-5xl lg:text-7xl"
          >
            Explore Odisha With <span className="text-gradient">Comfort &amp; Devotion</span>
          </motion.h1>

          <motion.p
            variants={fadeUp(0.2)}
            className="mt-6 max-w-xl font-serif text-lg leading-relaxed text-cream/85 lg:text-xl"
          >
            Visit Jagannath Temple, Konark Sun Temple, Puri Beach, Dhauli Shanti Stupa, Nandankanan
            Zoo and Odisha's most iconic destinations with premium transportation and personalized
            travel experiences.
          </motion.p>

          <motion.div variants={fadeUp(0.3)} className="mt-9 flex flex-wrap gap-4">
            <Button href="#contact" size="lg">
              Book Your Tour <ArrowRight className="h-5 w-5" />
            </Button>
            <Button href="#fleet" variant="outline" size="lg">
              View Fleet
            </Button>
          </motion.div>
        </motion.div>

        {/* Right floating glass card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:block"
        >
          <div className="animate-float-slow glass rounded-3xl p-8">
            <p className="font-display text-2xl text-navy">Why Travel With Us</p>
            <p className="mt-1 font-serif text-navy/60">Premium care on every journey</p>
            <div className="mt-6 space-y-3">
              {cardItems.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex items-center gap-4 rounded-2xl bg-white/70 px-4 py-3 shadow-sm"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-saffron-gold text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-medium text-navy">{label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[0.65rem] uppercase tracking-[0.3em] text-white/70"
      >
        <div className="flex flex-col items-center gap-2">
          Scroll
          <span className="h-10 w-px animate-pulse bg-gradient-to-b from-white/70 to-transparent" />
        </div>
      </motion.div>
    </section>
  )
}
