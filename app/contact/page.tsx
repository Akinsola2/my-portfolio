import Reveal from "../components/Reveal";
import SiteHeader from "../components/SiteHeader";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#f5f8fc] text-[#14243b] dark:bg-slate-800 dark:text-slate-100">
      <SiteHeader currentPage="contact" />
      <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <Reveal>
            <section className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-800 dark:text-blue-200 sm:text-sm">
                Get in touch
              </p>
              <h1 className="mt-5 text-5xl font-semibold leading-[1.05] tracking-[-0.06em] sm:text-6xl md:text-7xl">
                Have something
                <span className="block text-blue-600 dark:text-blue-300">
                  good in mind?
                </span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-200 sm:text-xl sm:leading-9">
                I&apos;d love to hear about the idea you&apos;re working on or
                the opportunity you have in mind. Send a message through your
                email app or reach out directly.
              </p>
              <a
                href="https://github.com/Akinsola2"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-blue-950 px-6 text-sm font-semibold text-white shadow-[0_8px_24px_-12px_rgba(23,54,95,0.65)] transition hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 dark:bg-blue-600 dark:hover:bg-blue-500"
              >
                Connect on GitHub <span aria-hidden="true">↗</span>
              </a>
            </section>
          </Reveal>

          <Reveal delay={0.12}>
            <aside className="relative isolate overflow-hidden rounded-[2rem] border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-sky-100 p-6 shadow-[0_32px_90px_-56px_rgba(29,78,142,0.48)] dark:border-slate-600 dark:from-slate-700 dark:via-slate-700 dark:to-blue-900 sm:p-9">
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-20 -z-10 size-64 rounded-full border-[36px] border-blue-200/50 dark:border-blue-300/10"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-24 -left-16 -z-10 size-64 rounded-full bg-blue-200/40 blur-3xl dark:bg-blue-400/10"
              />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-800 dark:text-blue-200">
                Start a conversation
              </p>
              <div className="mt-8 flex items-center gap-4">
                <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-blue-950 text-lg font-semibold text-white shadow-lg shadow-blue-950/15 dark:bg-blue-500">
                  TA
                </span>
                <div>
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Temiakinsola Akinsola
                  </h2>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-200">
                    Full-Stack Developer
                  </p>
                </div>
              </div>
              <div className="mt-8 border-t border-blue-200/80 pt-5 dark:border-slate-500">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">
                  Prefer direct contact? Reach me by email or phone.
                </p>
                <address className="mt-4 space-y-3 not-italic">
                  <p className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                    akinsolatemiloluwa28@gmail.com
                  </p>
                  <p className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                    +234 813 576 7914
                  </p>
                </address>
                <a
                  href="https://github.com/Akinsola2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-blue-900 underline decoration-blue-400 underline-offset-4 transition hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 dark:text-blue-100 dark:decoration-blue-300 dark:hover:text-white"
                >
                  github.com/Akinsola2 <span aria-hidden="true">↗</span>
                </a>
              </div>
            </aside>
          </Reveal>
        </div>

      </main>
    </div>
  );
}
