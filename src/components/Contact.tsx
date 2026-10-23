import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { company } from '../data/content'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-navy-950 py-20 text-white sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-sky-300">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Tell us about your product—we&apos;ll reply within one business day.
          </h2>
          <ul className="mt-8 space-y-4 text-sm text-white/80">
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-sky-400" aria-hidden />
              <a href={`mailto:${company.email}`} className="hover:text-white">
                {company.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-sky-400" aria-hidden />
              <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="hover:text-white">
                {company.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-sky-400" aria-hidden />
              {company.location}
            </li>
          </ul>
        </div>

        <div className="rounded-[1.75rem] bg-white p-6 text-navy-900 shadow-soft sm:p-8">
          {submitted ? (
            <div className="flex min-h-[280px] flex-col items-center justify-center text-center">
              <p className="text-5xl" aria-hidden>
                🎉
              </p>
              <p className="mt-4 text-xl font-bold">Thanks for reaching out!</p>
              <p className="mt-2 max-w-sm text-sm text-slate-brand">
                This demo form saved your message locally. Connect it to your email or CRM
                when you&apos;re ready to go live.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="text-sm font-semibold">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="mt-1.5 w-full rounded-xl border border-navy-900/10 bg-cream px-4 py-3 text-sm outline-none ring-sky-400/30 focus:ring-2"
                  placeholder="Alex Morgan"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-semibold">
                  Work email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1.5 w-full rounded-xl border border-navy-900/10 bg-cream px-4 py-3 text-sm outline-none ring-sky-400/30 focus:ring-2"
                  placeholder="alex@company.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-semibold">
                  Project details
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="mt-1.5 w-full resize-none rounded-xl border border-navy-900/10 bg-cream px-4 py-3 text-sm outline-none ring-sky-400/30 focus:ring-2"
                  placeholder="Product type, target markets, timeline…"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy-900 py-3.5 text-sm font-bold text-white transition hover:bg-navy-800"
              >
                Send message
                <Send className="h-4 w-4" aria-hidden />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
