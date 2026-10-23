import { HeartHandshake } from 'lucide-react'
import { company } from '../data/content'

export function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative order-2 lg:order-1">
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy-900 to-navy-800 p-8 text-white shadow-soft">
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-sky-300">
                  Our promise
                </p>
                <p className="mt-4 text-2xl font-bold leading-snug">
                  Serious about standards. Soft on your stress levels.
                </p>
              </div>
              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <HeartHandshake className="mb-3 h-8 w-8 text-sky-300" aria-hidden />
                <p className="text-sm leading-relaxed text-white/90">
                  We treat every approval like a partnership—transparent timelines,
                  honest advice, and celebrations when you ship.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-sky-100 bg-white px-5 py-4 shadow-card sm:block">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-brand">
              Industries
            </p>
            <p className="mt-1 text-sm font-semibold text-navy-900">
              Electronics · Medical · Industrial · Consumer
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-sm font-bold uppercase tracking-widest text-sky-400">
            About {company.shortName}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            Engineering compliance with a human touch
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-brand">
            {company.about.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
