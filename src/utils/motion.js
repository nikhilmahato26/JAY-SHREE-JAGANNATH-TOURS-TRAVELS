// Reusable Framer Motion variants

export const fadeUp = (delay = 0, y = 40) => ({
  hidden: { opacity: 0, y },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 0.7, 0.2, 1] },
  },
})

export const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, delay } },
})

export const scaleIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay, ease: [0.22, 0.7, 0.2, 1] },
  },
})

export const staggerContainer = (stagger = 0.12, delayChildren = 0.1) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren },
  },
})

// shared viewport config for whileInView
export const viewportOnce = { once: true, amount: 0.2 }
