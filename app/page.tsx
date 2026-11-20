import Link from "next/link";
import Reveal from "./components/Reveal";
import SiteHeader from "./components/SiteHeader";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f8fc] text-[#14243b] dark:bg-slate-800 dark:text-slate-100">
      <SiteHeader currentPage="home" />

      <main>
        <section className="mx-auto grid min-h-[calc(100svh-8rem)] max-w-6xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <Reveal className="max-w-2xl">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-800 dark:text-blue-300 sm:text-sm">
              <span className="size-2 rounded-full bg-blue-500" />
              Full-Stack Developer
            </p>
            <h1 className="mt-7 text-5xl font-semibold leading-[1.04] tracking-[-0.06em] sm:text-6xl md:text-7xl">
              Temiloluwa
              <span className="block text-blue-600 dark:text-blue-300">
                Akinsola
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl sm:leading-9">
              I build thoughtful digital experiences for the web, combining
              reliable engineering with clear, approachable design.
            </p>
            <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                href="/projects"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-blue-950 px-6 text-sm font-semibold text-white shadow-[0_8px_24px_-12px_rgba(23,54,95,0.65)] transition hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 dark:bg-blue-600 dark:hover:bg-blue-500"
              >
                View My Projects <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-blue-300 bg-blue-50 px-6 text-sm font-semibold text-blue-900 transition hover:-translate-y-0.5 hover:border-blue-500 hover:bg-blue-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 dark:border-blue-400/50 dark:bg-blue-900/50 dark:text-blue-100 dark:hover:border-blue-300 dark:hover:bg-blue-800"
              >
                Hire me <span aria-hidden="true">↗</span>
              </Link>
              <a
                href="/cv.pdf"
                download
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-blue-200 bg-white/70 px-6 text-sm font-semibold text-blue-950 transition hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 dark:border-slate-500 dark:bg-slate-700 dark:text-blue-100 dark:hover:border-blue-300 dark:hover:text-white"
              >
                Download CV <span aria-hidden="true">↓</span>
              </a>
            </div>
          </Reveal>

          <Reveal className="mx-auto w-full max-w-sm lg:max-w-none" delay={0.12}>
            <div
              role="img"
              aria-label="Profile photo placeholder for Temiloluwa Akinsola"
              className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-blue-100 bg-[radial-gradient(ellipse_at_70%_20%,rgba(96,148,220,0.3),transparent_42%),linear-gradient(145deg,#e9f1fb,#d9e7f7_55%,#c8dcf1)] shadow-[0_32px_80px_-48px_rgba(29,78,142,0.4)] dark:border-slate-600 dark:bg-[radial-gradient(ellipse_at_70%_20%,rgba(96,165,250,0.3),transparent_42%),linear-gradient(145deg,#33465f,#3c5878_55%,#4c6b8e)]"
            >
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/70 bg-white/80 p-4 backdrop-blur-sm dark:border-slate-500/70 dark:bg-slate-700/80 sm:inset-x-6 sm:bottom-6 sm:p-5">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  Temiloluwa Akinsola
                </p>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                  Profile portrait coming soon
                </p>
              </div>
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 text-8xl font-semibold tracking-[-0.08em] text-blue-900/35 dark:text-blue-200/40 sm:text-9xl"
              >
                TA
              </span>
            </div>
          </Reveal>
        </section>
      </main>
    </div>
  );
}
