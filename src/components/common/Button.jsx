import { motion } from 'framer-motion'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-saffron/50'

const sizes = {
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

const variants = {
  primary: 'bg-saffron-gold text-white shadow-glow hover:brightness-105',
  outline: 'border border-white/70 text-white hover:bg-white hover:text-navy',
  dark: 'bg-navy text-cream hover:bg-navy-light',
  ghost: 'border border-navy/15 text-navy hover:bg-navy hover:text-cream',
  white: 'bg-white text-navy shadow-soft hover:bg-saffron hover:text-white',
}

export default function Button({
  as = 'a',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  const Comp = motion[as] || motion.a
  return (
    <Comp
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Comp>
  )
}
