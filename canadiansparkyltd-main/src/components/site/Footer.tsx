import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <Logo dark />
          <p className="mt-4 text-white/70 text-sm max-w-xs">No Job Is Too Big Or Too Small</p>
          <p className="mt-6 text-white/50 text-xs">Canadian Sparky Limited</p>
        </div>
        <div>
          <h4 className="text-sm font-bold tracking-wider uppercase text-white/90">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="group inline-block text-white/70 hover:text-white text-sm relative"
                >
                  {l.label}
                  <span className="absolute left-0 -bottom-0.5 h-0.5 w-full bg-brand scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold tracking-wider uppercase text-white/90">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="tel:+16478870029" className="text-white/80 hover:text-brand transition-colors">
                +1-647-887-0029
              </a>
            </li>
            <li>
              <a
                href="mailto:canadasparkylimited@gmail.com"
                className="text-white/80 hover:text-brand transition-colors break-all"
              >
                canadasparkylimited@gmail.com
              </a>
            </li>
            <li className="text-white/60">Cochrane, Calgary & Surrounding Areas, AB</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 text-xs text-white/50 text-center">
          © 2025 Canadian Sparky Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
