import Link from "next/link";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
  download?: boolean;
};

const footerLinks: FooterLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/Akinsola2",
    external: true,
  },
  {
    label: "Download CV",
    href: "/Akinsola_Temiloluwa_Software_Developer_CV.docx",
    download: true,
  },
  { label: "Contact me", href: "/contact" },
  { label: "Back to top", href: "#top" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-blue-100 bg-blue-50/70 dark:border-slate-600 dark:bg-slate-800">
      <div className="mx-auto max-w-6xl px-5 py-5 sm:px-8 sm:py-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-base font-semibold tracking-tight text-blue-950 dark:text-white">
              Temiakinsola Akinsola
            </h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              Full-Stack Developer
            </p>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
              © 2026 Temiakinsola Akinsola. All rights reserved.
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-2"
          >
            {footerLinks.map(({ label, href, external, download }) => {
              const className =
                "inline-flex min-h-9 items-center gap-1.5 rounded-full border border-blue-200 px-3 text-xs font-medium text-blue-950 transition hover:border-blue-400 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:border-slate-500 dark:text-slate-100 dark:hover:bg-slate-700";
              const icon =
                label === "Back to top"
                  ? "↑"
                  : label === "Download CV"
                    ? "↓"
                    : "↗";

              if (external || download) {
                return (
                  <a
                    key={label}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    download={download}
                    className={className}
                  >
                    {label} <span aria-hidden="true">{icon}</span>
                  </a>
                );
              }

              return (
                <Link key={label} href={href} className={className}>
                  {label} <span aria-hidden="true">{icon}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </footer>
  );
}
