import Link from "next/link";
import Reveal from "../components/Reveal";
import SiteHeader from "../components/SiteHeader";

export default function About() {
  return (
    <div className="min-h-screen bg-[#f5f8fc] text-[#14243b] dark:bg-slate-800 dark:text-slate-100">
      <SiteHeader currentPage="about" />
      <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-20">
        <Reveal>
          <article className="max-w-3xl rounded-3xl border border-blue-100 bg-white/75 p-6 shadow-[0_24px_80px_-56px_rgba(29,78,142,0.28)] dark:border-slate-600 dark:bg-slate-700 sm:p-10 md:p-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-800 dark:text-blue-300 sm:text-sm">
              A little about me
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-6xl">
              Hi, I&apos;m Temiloluwa.
            </h1>
            <div className="mt-7 space-y-5 text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-8">
              <p>
                I&apos;m a software developer who enjoys turning complex
                problems into simple, useful experiences. I work with modern
                web tools like React, Next.js, and TypeScript.
              </p>
              <p>
                I care about clean code, thoughtful design, and continuous
                learning—bringing curiosity and care to every project I build.
              </p>
            </div>
            <Link
              href="/"
              className="mt-9 inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-semibold text-blue-600 transition hover:text-blue-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 dark:text-blue-300 dark:hover:text-white"
            >
              <span aria-hidden="true">←</span> Back home
            </Link>
          </article>
        </Reveal>
      </main>
    </div>
  );
}
