import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react'
import Logo from '../common/Logo'
import { SITE, WHATSAPP_LINK, NAV_LINKS } from '../../utils/site'

const serviceLinks = [
  'Odisha Tour Packages',
  'Jagannath Temple Tours',
  'Pilgrimage Tours',
  'Airport & Station Transfers',
  'Local Sightseeing',
]

export default function Footer() {
  return (
    <footer className="bg-navy text-cream/70">
      <div className="mx-auto w-[92%] max-w-7xl py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo light />
            <p className="mt-5 max-w-xs font-serif text-lg leading-relaxed text-cream/70">
              {SITE.footerTagline} 🙏
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: MessageCircle, href: WHATSAPP_LINK() },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition-colors hover:border-saffron hover:bg-saffron hover:text-white"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h5 className="mb-5 font-display text-lg text-cream">Quick Links</h5>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm transition-colors hover:text-gold">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="mb-5 font-display text-lg text-cream">Services</h5>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm transition-colors hover:text-gold">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="mb-5 font-display text-lg text-cream">Contact</h5>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold" />
                <a href={`tel:${SITE.phoneRaw}`} className="hover:text-gold">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gold" />
                <a href={`mailto:${SITE.email}`} className="break-all hover:text-gold">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-gold" />
                {SITE.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-sm md:flex-row">
          <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
          <span className="font-serif text-base text-gold">{SITE.tagline}</span>
        </div>
      </div>
    </footer>
  )
}
