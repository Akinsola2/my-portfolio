"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "./Reveal";
import { projects } from "../data/projects";

const filters = [
  "All",
  ...new Set(projects.flatMap((project) => project.technologies)),
];

function ExternalArrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="size-4 -rotate-[30deg]"
    >
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export default function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.technologies.includes(activeFilter),
        );

  return (
    <>
      <div
        className="mt-8 flex flex-wrap gap-2"
        role="group"
        aria-label="Filter projects by technology"
      >
        {filters.map((filter) => {
          const isActive = filter === activeFilter;

          return (
            <button
              key={filter}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveFilter(filter)}
              className={`min-h-10 rounded-full border px-4 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${
                isActive
                  ? "border-blue-950 bg-blue-950 text-white dark:border-blue-400 dark:bg-blue-500"
                  : "border-blue-200 bg-white/80 text-slate-700 hover:border-blue-400 hover:text-blue-700 dark:border-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:border-blue-300 dark:hover:text-blue-100"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {visibleProjects.length}{" "}
        {visibleProjects.length === 1 ? "project" : "projects"}
        {activeFilter !== "All" ? ` using ${activeFilter}` : ""}
      </p>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {visibleProjects.map((project, index) => (
          <Reveal
            key={project.name}
            className="flex h-full flex-col"
            delay={index * 0.06}
          >
            <article className="flex flex-1 flex-col overflow-hidden rounded-3xl border border-blue-100 bg-white/80 shadow-[0_20px_60px_-44px_rgba(29,78,142,0.42)] transition hover:-translate-y-1 hover:shadow-[0_28px_70px_-44px_rgba(29,78,142,0.58)] dark:border-slate-600 dark:bg-slate-700">
              <div className="relative aspect-[16/8] overflow-hidden bg-blue-50 dark:bg-slate-600">
                <Image
                  src={project.coverImage}
                  alt={`${project.name} cover illustration`}
                  width={1200}
                  height={675}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
                  {project.name}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>
                <ul
                  aria-label={`${project.name} technologies`}
                  className="mt-5 flex flex-wrap gap-2"
                >
                  {project.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-900 dark:bg-slate-600 dark:text-blue-100"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 px-1">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-blue-800 transition hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:text-blue-300 dark:hover:text-blue-200"
                >
                  Live demo <ExternalArrow />
                </a>
              ) : (
                <span className="inline-flex min-h-11 items-center text-sm text-slate-500 dark:text-slate-400">
                  Live demo link needed
                </span>
              )}
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:text-slate-300 dark:hover:text-blue-300"
              >
                GitHub <ExternalArrow />
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}
