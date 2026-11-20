import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";
import SiteHeader from "../components/SiteHeader";

export default function About() {
  return (
    <div className="min-h-screen bg-[#f5f8fc] text-[#14243b] dark:bg-slate-800 dark:text-slate-100">
      <SiteHeader currentPage="about" />
      <main className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-16">
        <div className="grid items-start gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
            <figure className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] border border-blue-100 bg-blue-100 shadow-[0_32px_80px_-48px_rgba(29,78,142,0.4)] dark:border-slate-600 dark:bg-slate-700 lg:sticky lg:top-8">
              <Image
                src="/profile.jpeg"
                alt="Portrait of Temiakinsola Akinsola"
                fill
                sizes="(min-width: 1024px) 34vw, (min-width: 640px) 60vw, 90vw"
                className="object-cover object-[center_18%]"
              />
              <figcaption className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/30 bg-slate-950/40 p-4 text-white backdrop-blur-md">
                <p className="font-semibold">Temiakinsola Akinsola</p>
                <p className="mt-1 text-sm text-white/80">
                  Full-Stack Developer
                </p>
              </figcaption>
            </figure>

            <div className="space-y-5">
              <Reveal>
                <header className="pb-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-800 dark:text-blue-200 sm:text-sm">
                    About me
                  </p>
                  <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl">
                    Curiosity led me to code.
                  </h1>
                </header>
              </Reveal>

              <Reveal delay={0.05}>
                <section className="rounded-3xl border border-blue-100 bg-white/75 p-6 shadow-[0_24px_80px_-56px_rgba(29,78,142,0.28)] dark:border-slate-600 dark:bg-slate-700 sm:p-8">
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Who I am
                  </h2>
                  <p className="mt-2 text-base leading-7 text-slate-600 dark:text-slate-200 sm:text-lg sm:leading-8">
                    I&apos;m a passionate and dedicated software developer
                    focused on building modern, responsive, user-friendly web
                    applications. I work with React, Node.js, Express.js, and
                    PostgreSQL to turn ideas into practical, efficient
                    solutions. I enjoy solving problems and learning new
                    technologies.
                  </p>
                </section>
              </Reveal>

              <Reveal delay={0.1}>
                <section className="rounded-3xl border border-blue-100 bg-white/75 p-6 shadow-[0_24px_80px_-56px_rgba(29,78,142,0.28)] dark:border-slate-600 dark:bg-slate-700 sm:p-8">
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                    My journey into tech
                  </h2>
                  <p className="mt-2 text-base leading-7 text-slate-600 dark:text-slate-200 sm:text-lg sm:leading-8">
                    My journey started with a desire to find my place in the
                    digital world and build something meaningful. I explored
                    different opportunities and researched possible paths
                    before discovering software development and deciding to
                    take the leap.
                  </p>
                  <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-200 sm:text-lg sm:leading-8">
                    It has been a journey of learning, challenges, discoveries,
                    and personal growth. When things felt confusing or
                    overwhelming, curiosity, consistency, and a willingness to
                    keep learning helped me move forward.
                  </p>
                </section>
              </Reveal>

              <Reveal delay={0.15}>
                <section className="rounded-3xl border border-blue-100 bg-white/75 p-6 shadow-[0_24px_80px_-56px_rgba(29,78,142,0.28)] dark:border-slate-600 dark:bg-slate-700 sm:p-8">
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                    What I enjoy building
                  </h2>
                  <p className="mt-2 text-base leading-7 text-slate-600 dark:text-slate-200 sm:text-lg sm:leading-8">
                    I enjoy creating practical web applications that bring
                    together thoughtful interfaces, useful features, and
                    reliable data. Each project helps me grow my skills and
                    turn an idea into something people can use.
                  </p>
                </section>
              </Reveal>

              <Reveal delay={0.2}>
                <section className="rounded-3xl border border-blue-100 bg-white/75 p-6 shadow-[0_24px_80px_-56px_rgba(29,78,142,0.28)] dark:border-slate-600 dark:bg-slate-700 sm:p-8">
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Looking ahead
                  </h2>
                  <p className="mt-2 text-base leading-7 text-slate-600 dark:text-slate-200 sm:text-lg sm:leading-8">
                    I&apos;m looking forward to collaborating with innovative
                    teams, contributing to meaningful projects, and continuing
                    to grow as a professional in the tech industry.
                  </p>
                </section>
              </Reveal>

              <Link
                href="/"
                className="mt-9 inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-semibold text-blue-600 transition hover:text-blue-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 dark:text-blue-200 dark:hover:text-white"
              >
                <span aria-hidden="true">←</span> Back home
              </Link>
            </div>
        </div>
      </main>
    </div>
  );
}
