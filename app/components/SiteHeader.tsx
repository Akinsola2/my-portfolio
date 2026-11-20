import Link from "next/link";
import MobileNavigation from "./MobileNavigation";
import ThemeToggle from "./ThemeToggle";
import { navigation, type PageId } from "../data/navigation";

function NavigationLinks({
  currentPage,
}: {
  currentPage: PageId;
}) {
  return navigation.map(({ label, href, id }) => {
    const isCurrentPage = currentPage === id;
    const colorClass = isCurrentPage
      ? "bg-blue-100 text-blue-950 dark:bg-blue-800 dark:text-blue-50"
      : "text-slate-600 hover:bg-blue-50 hover:text-blue-700 dark:text-slate-100 dark:hover:bg-slate-700 dark:hover:text-blue-100";

    return (
      <Link
        key={id}
        href={href}
        aria-current={isCurrentPage ? "page" : undefined}
        className={`inline-flex min-h-11 shrink-0 items-center justify-center rounded-full px-3 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${colorClass}`}
      >
        {label}
      </Link>
    );
  });
}

export default function SiteHeader({
  currentPage,
}: {
  currentPage: PageId;
}) {
  return (
    <header id="top" className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-8 sm:py-6">
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="Temiakinsola Akinsola home"
          className="inline-flex min-h-11 shrink-0 items-center gap-3 rounded-full font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
        >
          <span className="inline-flex size-10 items-center justify-center rounded-full border-2 border-blue-200 bg-blue-100 text-sm font-bold text-blue-950 shadow-sm shadow-blue-950/15 dark:border-blue-300 dark:bg-slate-600 dark:text-white">
            TA
          </span>
          <span className="hidden min-[380px]:inline">Temiakinsola</span>
        </Link>

        <div className="flex items-center gap-2">
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 md:flex"
          >
            <NavigationLinks currentPage={currentPage} />
          </nav>
          <MobileNavigation currentPage={currentPage} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
