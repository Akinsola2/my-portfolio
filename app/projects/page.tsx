import Reveal from "../components/Reveal";
import ProjectGallery from "../components/ProjectGallery";
import SiteHeader from "../components/SiteHeader";

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#f5f8fc] text-[#14243b] dark:bg-slate-800 dark:text-slate-100">
      <SiteHeader currentPage="projects" />
      <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-20">
        <Reveal>
          <section>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-800 dark:text-blue-300 sm:text-sm">
              Selected work
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
              Projects
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
              A selection of applications I&apos;ve built. Filter by technology
              to explore the work.
            </p>
          </section>
        </Reveal>
        <ProjectGallery />
      </main>
    </div>
  );
}
