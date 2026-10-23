import { services } from '../data/content'

export function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-sky-400">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            Everything you need to get approved
          </h2>
          <p className="mt-4 text-slate-brand">
            Modular support that scales from a single SKU to full product families—always
            aligned with your release calendar.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, icon: Icon, accent }) => (
            <li
              key={title}
              className="group rounded-[1.5rem] border border-navy-900/5 bg-cream p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-400/30 hover:shadow-card"
            >
              <div
                className={`mb-5 inline-flex rounded-2xl bg-gradient-to-br ${accent} p-3 text-navy-900 transition group-hover:scale-105`}
              >
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="text-lg font-bold text-navy-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-brand">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
