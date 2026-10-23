import { stats } from '../data/content'

export function StatsBar() {
  return (
    <section className="border-y border-navy-900/5 bg-white" aria-label="Company highlights">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
        {stats.map((item) => (
          <div key={item.label} className="text-center md:text-left">
            <p className="text-3xl font-extrabold text-navy-900 sm:text-4xl">
              {item.value}
            </p>
            <p className="mt-1 text-sm font-medium text-slate-brand">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
