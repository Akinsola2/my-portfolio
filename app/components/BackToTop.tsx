"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 480);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Back to top"
          title="Back to top"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
          transition={{ duration: 0.18 }}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: shouldReduceMotion ? "auto" : "smooth",
            })
          }
          className="fixed bottom-5 right-5 z-40 inline-flex size-12 items-center justify-center rounded-full bg-blue-950 text-xl text-white shadow-lg shadow-blue-950/20 transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 dark:bg-blue-600 dark:hover:bg-blue-500 sm:bottom-7 sm:right-7"
        >
          <span aria-hidden="true">↑</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
