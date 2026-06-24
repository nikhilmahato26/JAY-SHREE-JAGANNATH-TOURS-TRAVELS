// Central business / brand configuration
export const SITE = {
  name: 'Jay Shree Jagannath Tours & Travels',
  shortName: 'Jay Shree Jagannath',
  tagline: 'Jay Shree Jagannath 🙏',
  footerTagline: 'Creating Comfortable Journeys & Divine Experiences Across Odisha',
  phone: '+91 9337122699',
  phoneRaw: '919337122699',
  email: 'suryakantbiswal4497@gmail.com',
  location: 'Odisha, India',
}

export const WHATSAPP_LINK = (msg = 'Jay Shree Jagannath 🙏 I would like to book a tour.') =>
  `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(msg)}`

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Attractions', href: '#attractions' },
  { label: 'Fleet', href: '#fleet' },
  { label: 'Contact', href: '#contact' },
]
