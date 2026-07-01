import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 bg-white transition-all duration-300 ${
        scrolled ? "shadow-md py-2" : "shadow-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        <Link to="/" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-1 relative">
          {NAV.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className="relative px-4 py-2 text-sm font-semibold text-ink/80 hover:text-ink transition-colors"
              >
                {item.label}
                <span
                  className={`absolute left-3 right-3 -bottom-0.5 h-0.5 bg-brand origin-left transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
                <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-brand scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100 peer-hover:scale-x-100" />
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <a
            href="tel:+16478870029"
            className="inline-flex items-center rounded-md bg-brand px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:scale-[1.03] hover:shadow-lg hover:bg-brand/90"
          >
            Call Now
          </a>
        </div>

        <button
          className="md:hidden inline-flex flex-col justify-center items-center w-10 h-10"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-0.5 w-6 bg-ink transition-transform duration-300 ${
              open ? "translate-y-1.5 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-ink mt-1.5 transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-ink mt-1.5 transition-transform duration-300 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-x-0 top-[var(--mobile-nav-top,0)] bg-white border-t"
            style={{ top: scrolled ? 56 : 72 }}
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.06, duration: 0.3 }}
                >
                  <Link
                    to={item.to}
                    className={`block py-3 text-lg font-semibold border-b border-border ${
                      pathname === item.to ? "text-brand" : "text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href="tel:+16478870029"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="mt-4 inline-flex items-center justify-center rounded-md bg-brand px-5 py-3 text-base font-bold text-white"
              >
                Call +1-647-887-0029
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
