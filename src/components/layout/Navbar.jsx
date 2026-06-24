import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import Logo from '../common/Logo'
import Button from '../common/Button'
import useScrolled from '../../hooks/useScrolled'
import { NAV_LINKS, SITE } from '../../utils/site'

export default function Navbar() {
  const scrolled = useScrolled(60)
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/85 backdrop-blur-xl shadow-soft' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex w-[92%] max-w-7xl items-center justify-between py-4">
        <Logo light={!scrolled} />

        {/* Desktop */}
        <div className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`group relative text-sm font-medium transition-colors ${
                scrolled ? 'text-navy/75 hover:text-navy' : 'text-white/85 hover:text-white'
              }`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-saffron transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <Button href="#contact" size="md">
            <Phone className="h-4 w-4" /> Book Your Tour
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className={`lg:hidden ${scrolled ? 'text-navy' : 'text-white'}`}
        >
          <Menu className="h-7 w-7" />
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-navy/50 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35 }}
              className="fixed right-0 top-0 z-50 flex h-full w-72 flex-col bg-cream p-8 shadow-soft lg:hidden"
            >
              <div className="mb-10 flex items-center justify-between">
                <Logo />
                <button onClick={() => setOpen(false)} aria-label="Close menu">
                  <X className="h-6 w-6 text-navy" />
                </button>
              </div>
              <div className="flex flex-col gap-6">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium text-navy/80 hover:text-saffron-dark"
                  >
                    {link.label}
                  </a>
                ))}
                <Button href={`tel:${SITE.phoneRaw}`} className="mt-4 w-full">
                  <Phone className="h-4 w-4" /> Call Now
                </Button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
