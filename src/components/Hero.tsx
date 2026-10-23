import { ArrowRight, Sparkles } from 'lucide-react'
import { company } from '../data/content'
import { BrandLogo } from './BrandLogo'

export function Hero() {
  return (
    <section
      id="home"
      className="orbital-bg relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24"
    >
      <div className="pointer-events-none absolute -right-20 top-24 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-navy-900/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-white/80 px-4 py-1.5 text-sm font-semibold text-navy-800 shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4 text-sky-400" aria-hidden />
            Trusted compliance partners
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-navy-950 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
            Approvals made{' '}
            <span className="text-gradient">clear, calm,</span> and on time.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-brand">
            {company.tagline}. We guide your team from first sketch to certified
            product—with warmth, precision, and zero jargon overload.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-navy-800"
            >
              Start a project
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href="#services"
              className="inline-flex items-center rounded-full border-2 border-navy-900/10 bg-white px-6 py-3.5 text-sm font-bold text-navy-900 transition hover:border-sky-400/50 hover:bg-sky-100/50"
            >
              Explore services
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="animate-float relative rounded-[2rem] border border-white/60 bg-white/90 p-8 shadow-soft backdrop-blur-sm">
            <BrandLogo showTagline className="mb-8" />
            <div className="space-y-4 rounded-2xl bg-gradient-to-br from-sky-100/80 to-white p-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">
                Why teams choose us
              </p>
              <ul className="space-y-3 text-left text-sm font-medium text-navy-800">
                <li className="flex gap-2">
                  <span className="text-sky-400">✦</span>
                  Human engineers—not ticket queues
                </li>
                <li className="flex gap-2">
                  <span className="text-sky-400">✦</span>
                  Global marks, one coordinated plan
                </li>
                <li className="flex gap-2">
                  <span className="text-sky-400">✦</span>
                  Documentation you can defend in audits
                </li>
              </ul>
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-2xl bg-navy-900 px-4 py-3 text-sm font-bold text-white shadow-card">
              ✓ Launch-ready
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
