import { SITE } from '../../utils/site'

export default function Logo({ light = false }) {
  return (
    <a href="#home" className="flex items-center gap-3">
      <svg viewBox="0 0 64 64" className="h-10 w-10 shrink-0" aria-hidden>
        <path d="M32 8c4 7 4 14 0 21-4-7-4-14 0-21z" fill="#E8973A" />
        <path
          d="M32 29c-6-5-13-6-21-4 4 8 11 12 21 12 10 0 17-4 21-12-8-2-15-1-21 4z"
          fill="#D9A441"
        />
        <path
          d="M11 25c8 2 14 6 18 13-9 1-17-3-21-11l3-2zM53 25c-8 2-14 6-18 13 9 1 17-3 21-11l-3-2z"
          fill="#C8741A"
        />
      </svg>
      <span className="leading-none">
        <span
          className={`block font-display text-lg tracking-wide ${
            light ? 'text-cream' : 'text-navy'
          }`}
        >
          {SITE.shortName}
        </span>
        <span className="mt-1 block text-[0.6rem] uppercase tracking-[0.3em] text-gold">
          Tours &amp; Travels
        </span>
      </span>
    </a>
  )
}
