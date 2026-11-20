import Image from "next/image";
import Link from "next/link";
import Reveal from "./components/Reveal";
import SiteHeader from "./components/SiteHeader";

const services = [
  {
    title: "Frontend development",
    description:
      "I create responsive, user-friendly interfaces with React, Next.js, and Tailwind CSS that feel natural on every screen.",
  },
  {
    title: "Full-stack applications",
    description:
      "I connect polished web experiences to practical backend features using Node.js, Express, and PostgreSQL.",
  },
  {
    title: "Data-driven web experiences",
    description:
      "I build useful apps around real data, connecting interfaces with databases and APIs in a clear, maintainable way.",
  },
];

export default function Home() {
  return (
    <div className="bg-white text-slate-900 dark:bg-slate-800 dark:text-slate-100">
      <SiteHeader currentPage="home" />
      <main>
        <section className="overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-100 dark:from-slate-800 dark:via-slate-800 dark:to-blue-950">
          <div className="mx-auto grid max-w-6xl items-center md:min-h-[calc(100svh-5rem)] md:grid-cols-[1fr_0.9fr]">
            <div className="relative order-1 -mx-5 h-[52svh] min-h-72 sm:mx-0 md:order-2 md:mx-0 md:h-[76svh] md:min-h-[34rem]">
              <Image
                src="/profile.jpeg"
                alt="Portrait of Temiakinsola Akinsola"
                fill
                priority
                sizes="(min-width: 768px) 48vw, 100vw"
                className="object-cover object-[center_18%]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-blue-100/90 via-transparent to-transparent dark:from-blue-950/70 md:bg-gradient-to-l md:from-transparent md:via-sky-50/60 md:to-sky-50 dark:md:via-slate-800/60 dark:md:to-slate-800"
              />
            </div>

            <Reveal className="order-2 px-5 py-12 sm:px-8 md:order-1 md:px-8 md:py-20">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-700 dark:text-blue-200 sm:text-sm">
                Hello, my name is
              </p>
              <h1 className="mt-5 text-5xl font-semibold leading-[1.02] tracking-[-0.06em] text-slate-950 dark:text-white sm:text-6xl md:text-7xl">
                Temiakinsola
                <span className="block text-blue-700 dark:text-blue-300">
                  Akinsola
                </span>
              </h1>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-slate-600 dark:text-slate-300 sm:text-base">
                Full-Stack Developer
              </p>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-8">
                I build modern, responsive web applications that turn useful
                ideas into practical digital experiences.
              </p>
              <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
                <Link
                  href="/projects"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-blue-700 px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
                >
                  View My Projects <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-blue-200 bg-white/70 px-6 text-sm font-semibold text-blue-900 transition hover:-translate-y-0.5 hover:border-blue-400 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 dark:border-slate-500 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
                >
                  Hire me <span aria-hidden="true">↗</span>
                </Link>
                <a
                  href="/Akinsola_Temiloluwa_Software_Developer_CV.docx"
                  download
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-blue-200 bg-white/70 px-6 text-sm font-semibold text-blue-900 transition hover:-translate-y-0.5 hover:border-blue-400 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 dark:border-slate-500 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
                >
                  Download CV <span aria-hidden="true">↓</span>
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section
          id="services"
          className="bg-blue-50/80 py-16 dark:bg-slate-800 sm:py-20"
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-200 sm:text-sm">
                01 / What I do
              </p>
              <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <h2 className="text-4xl font-semibold tracking-[-0.05em] text-slate-950 dark:text-white sm:text-5xl">
                  Services
                </h2>
                <p className="max-w-md text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base">
                  Thoughtful development from interface to data.
                </p>
              </div>
            </Reveal>

            <div className="mt-9 grid gap-4 md:grid-cols-3">
              {services.map((service, index) => (
                <Reveal key={service.title} delay={index * 0.08}>
                  <article className="h-full min-h-64 rounded-2xl border border-blue-100 bg-white p-6 text-slate-900 shadow-[0_20px_60px_-45px_rgba(29,78,142,0.35)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_70px_-45px_rgba(29,78,142,0.5)] dark:border-slate-600 dark:bg-slate-700 dark:text-white sm:p-7">
                    <span
                      aria-hidden="true"
                      className="inline-flex size-11 items-center justify-center rounded-xl bg-blue-100 text-sm font-semibold text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                    >
                      0{index + 1}
                    </span>
                    <h3 className="mt-7 text-xl font-semibold tracking-tight">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {service.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
