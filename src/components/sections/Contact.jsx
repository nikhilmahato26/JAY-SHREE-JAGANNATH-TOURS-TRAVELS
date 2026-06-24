import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'
import Button from '../common/Button'
import { fadeUp, viewportOnce } from '../../utils/motion'
import { SITE, WHATSAPP_LINK } from '../../utils/site'

const tours = [
  'Jagannath Temple Tour',
  'Puri Darshan (2 Days)',
  'Heritage Circuit (4 Days)',
  'Complete Odisha (5 Days)',
  'Airport / Station Transfer',
  'Custom Package',
]

const contactRows = [
  { icon: Phone, label: 'Call / WhatsApp', value: SITE.phone, href: `tel:${SITE.phoneRaw}` },
  { icon: Mail, label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: MapPin, label: 'Location', value: SITE.location, href: '#contact' },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: '',
    tour: tours[0],
    message: '',
  })

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const msg = `Jay Shree Jagannath 🙏\n\n*New Tour Enquiry*\nName: ${form.name}\nPhone: ${form.phone}\nDate: ${form.date || 'Flexible'}\nPackage: ${form.tour}\nMessage: ${form.message || '-'}`
    window.open(WHATSAPP_LINK(msg), '_blank')
  }

  const fieldCls =
    'w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm text-navy outline-none transition focus:border-saffron focus:ring-2 focus:ring-saffron/20'

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto w-[92%] max-w-7xl">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Begin Your Divine Journey"
          subtitle="Tell us where you wish to go — our team will craft the perfect Odisha experience for you."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Info + map */}
          <motion.div
            variants={fadeUp()}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="space-y-6"
          >
            <div className="space-y-4">
              {contactRows.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="glass flex items-center gap-4 rounded-2xl p-5 transition hover:shadow-soft"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-saffron-gold text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-widest text-navy/50">
                      {label}
                    </span>
                    <span className="font-serif text-lg text-navy">{value}</span>
                  </span>
                </a>
              ))}
            </div>

            <div className="overflow-hidden rounded-2xl shadow-glass">
              <iframe
                title="Jagannath Temple Location"
                src="https://www.google.com/maps?q=Jagannath+Temple+Puri+Odisha&output=embed"
                className="h-72 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={submit}
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="glass rounded-3xl p-8 md:p-10"
          >
            <h3 className="font-display text-2xl text-navy">Book Your Tour</h3>
            <p className="mt-1 text-sm text-navy/55">
              Fill in the details and we'll confirm on WhatsApp instantly.
            </p>

            <div className="mt-6 space-y-4">
              <input
                name="name"
                value={form.name}
                onChange={update}
                required
                placeholder="Full Name"
                className={fieldCls}
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="phone"
                  value={form.phone}
                  onChange={update}
                  required
                  type="tel"
                  placeholder="Phone Number"
                  className={fieldCls}
                />
                <input
                  name="date"
                  value={form.date}
                  onChange={update}
                  type="date"
                  className={fieldCls}
                />
              </div>
              <select name="tour" value={form.tour} onChange={update} className={fieldCls}>
                {tours.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
              <textarea
                name="message"
                value={form.message}
                onChange={update}
                rows={4}
                placeholder="Number of travelers, pickup point, special requests…"
                className={`${fieldCls} resize-none`}
              />
              <Button as="button" type="submit" size="lg" className="w-full">
                Send Booking on WhatsApp <Send className="h-4 w-4" />
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
