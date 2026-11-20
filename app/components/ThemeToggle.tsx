"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

const subscribeToNothing = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribeToNothing,
    getClientSnapshot,
    getServerSnapshot,
  );

  const isDark = mounted && resolvedTheme === "dark";
  const label = mounted
    ? `Switch to ${isDark ? "light" : "dark"} mode`
    : "Change color theme";

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-blue-200 bg-white/80 text-blue-900 transition hover:border-blue-400 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 dark:border-slate-500 dark:bg-slate-700 dark:text-blue-100 dark:hover:border-blue-300 dark:hover:bg-slate-600"
    >
      <span aria-hidden="true" className="text-lg leading-none">
        {isDark ? "☀" : "☾"}
      </span>
    </button>
  );
}
