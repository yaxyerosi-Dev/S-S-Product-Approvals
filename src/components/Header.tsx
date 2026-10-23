import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navLinks } from '../data/content'
import { BrandLogo } from './BrandLogo'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-navy-900/5 bg-white/85 shadow-sm backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="rounded-xl outline-offset-4 focus-visible:outline-2 focus-visible:outline-sky-400">
          <BrandLogo />
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-navy-800/80 transition hover:bg-sky-100 hover:text-navy-900"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white shadow-card transition hover:bg-navy-800"
          >
            Get in touch
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex rounded-xl p-2 text-navy-900 md:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-navy-900/5 bg-white px-4 pb-6 md:hidden">
          <nav className="flex flex-col gap-1 pt-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl px-4 py-3 text-base font-semibold text-navy-900 hover:bg-sky-100"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 rounded-full bg-navy-900 px-4 py-3 text-center font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Get in touch
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
