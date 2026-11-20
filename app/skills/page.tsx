import Reveal from "../components/Reveal";
import SiteHeader from "../components/SiteHeader";
import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <div className="min-h-screen bg-[#f5f8fc] text-[#14243b] dark:bg-slate-800 dark:text-slate-100">
      <SiteHeader currentPage="skills" />
      <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-20">
        <Reveal>
          <header className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-800 dark:text-blue-300 sm:text-sm">
              Tools of the trade
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
              Technical skills
            </h1>
            <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
              Technologies I use to design, build, and ship thoughtful web
              experiences.
            </p>
          </header>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map(({ category, technologies }, index) => (
            <Reveal key={category} delay={index * 0.06}>
              <article className="h-full rounded-2xl border border-blue-100 bg-white/75 p-5 shadow-[0_10px_30px_-24px_rgba(29,78,142,0.35)] transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_16px_34px_-24px_rgba(29,78,142,0.45)] dark:border-slate-600 dark:bg-slate-700 dark:hover:border-blue-400 sm:p-6">
                <h2 className="text-sm font-semibold text-blue-800 dark:text-blue-300">
                  {category}
                </h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-full bg-blue-50 px-3 py-2 text-sm text-blue-950 dark:bg-slate-600 dark:text-slate-100"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </main>
    </div>
  );
}
