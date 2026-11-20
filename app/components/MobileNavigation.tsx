"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navigation, type PageId } from "../data/navigation";

export default function MobileNavigation({
  currentPage,
}: {
  currentPage: PageId;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div className="relative md:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-menu"
        aria-label={`${isOpen ? "Close" : "Open"} navigation menu`}
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex min-h-11 items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 text-sm font-medium text-slate-700 transition hover:border-blue-400 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:border-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:border-blue-300 dark:hover:text-blue-100"
      >
        <span>Menu</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="none"
          className={`size-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          <path
            d="m5 7.5 5 5 5-5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.7"
          />
        </svg>
      </button>

      {isOpen && (
        <nav
          id="mobile-navigation-menu"
          aria-label="Mobile navigation"
          className="absolute right-0 top-full z-50 mt-2 w-[min(90vw,22rem)] rounded-2xl border border-blue-100 bg-white p-2 shadow-xl shadow-blue-950/10 dark:border-slate-500 dark:bg-slate-700"
        >
          <ul className="space-y-1">
            {navigation.map(({ label, href, id }) => {
              const isCurrentPage = currentPage === id;

              return (
                <li key={id}>
                  <Link
                    href={href}
                    aria-current={isCurrentPage ? "page" : undefined}
                    onClick={() => setIsOpen(false)}
                    className={`flex min-h-11 items-center rounded-xl px-4 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${
                      isCurrentPage
                        ? "bg-blue-100 text-blue-950 dark:bg-blue-800 dark:text-blue-50"
                        : "text-slate-700 hover:bg-blue-50 hover:text-blue-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-blue-100"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </div>
  );
}
