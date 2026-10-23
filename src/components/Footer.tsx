import { company, navLinks } from '../data/content'
import { BrandLogo } from './BrandLogo'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-navy-900/5 bg-cream py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div>
          <BrandLogo showTagline />
          <p className="mt-4 max-w-xs text-sm text-slate-brand">{company.tagline}</p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-navy-800/80 hover:text-navy-900"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <p className="mx-auto mt-10 max-w-6xl px-4 text-center text-xs text-slate-brand sm:px-6 lg:px-8">
        © {year} {company.name}. All rights reserved.
      </p>
    </footer>
  )
}
