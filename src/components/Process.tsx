import { processSteps } from '../data/content'

export function Process() {
  return (
    <section id="process" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-sky-400">
              How we work
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
              A simple path to certification
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-brand">
            No black boxes—just a clear rhythm you can share with leadership, suppliers,
            and labs.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((item, index) => (
            <li
              key={item.step}
              className="relative rounded-[1.5rem] border border-navy-900/5 bg-white p-6 shadow-sm"
            >
              {index < processSteps.length - 1 && (
                <span
                  className="pointer-events-none absolute top-1/2 -right-3 hidden h-0.5 w-6 bg-gradient-to-r from-sky-400/50 to-transparent lg:block"
                  aria-hidden
                />
              )}
              <span className="text-4xl font-extrabold text-sky-400/40">{item.step}</span>
              <h3 className="mt-2 text-lg font-bold text-navy-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-brand">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
