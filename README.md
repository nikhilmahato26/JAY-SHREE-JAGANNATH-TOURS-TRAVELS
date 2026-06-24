# Jay Shree Jagannath Tours & Travels

A premium, production-ready spiritual-travel website for **Jay Shree Jagannath Tours & Travels**, Odisha.

Built with **React + Vite + Tailwind CSS + Framer Motion + Lucide React**.

## Tech Stack

- ⚛️ React 18 + Vite 5
- 🎨 Tailwind CSS (utility-only, custom saffron/gold/navy theme)
- ✨ Framer Motion (scroll reveals, parallax hero, stagger, floating cards)
- 🔱 Lucide React icons
- 📱 Mobile-first responsive, SEO-optimized (meta + JSON-LD schema)

## Getting Started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build → dist/
npm run preview  # preview production build
```

## Project Structure

```
src/
├── assets/                 # images & videos (drop real media here)
├── components/
│   ├── common/             # Button, Logo, SectionHeading, FloatingWhatsApp
│   ├── layout/             # Navbar, Footer
│   └── sections/           # Hero, TrustBar, About, Services, Attractions,
│                           # Fleet, WhyChooseUs, Testimonials, Gallery,
│                           # BookingCTA, Contact
├── data/                   # fleet.js, destinations.js, services.js,
│                           # testimonials.js, gallery.js
├── hooks/                  # useCountUp, useScrolled
├── utils/                  # site.js (brand config), motion.js (variants)
├── pages/Home.jsx
├── App.jsx
└── main.jsx
```

## Customization

- **Brand details** (phone, email, links): `src/utils/site.js`
- **Content data**: edit the files in `src/data/`
- **Theme colors / fonts**: `tailwind.config.js`
- **Images**: currently Unsplash placeholders — replace `src`/`image` URLs (or
  add files to `src/assets/images` and import them) with the real temple,
  destination and vehicle photos.
- **Hero video**: swap `HERO_VIDEO` in `src/components/sections/Hero.jsx` with
  a real drone shot of Jagannath Temple / Konark.

---

📞 +91 9337122699 · ✉️ suryakantbiswal4497@gmail.com · Jay Shree Jagannath 🙏
