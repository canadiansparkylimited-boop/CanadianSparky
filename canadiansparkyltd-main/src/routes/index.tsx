import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Reveal, StaggerGrid, StaggerItem } from "../components/site/Reveal";
import { ServiceCard } from "../components/site/ServiceCard";
import { CTABanner } from "../components/site/CTABanner";
import { CountUp } from "../components/site/CountUp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Canadian Sparky — Master Electrician in Cochrane & Calgary" },
      { name: "description", content: "Licensed, insured master electrician serving Cochrane, Calgary and surrounding Alberta. Panel upgrades, EV chargers, pot lights, basement wiring." },
      { property: "og:title", content: "Canadian Sparky — Master Electrician" },
      { property: "og:description", content: "Reliable electrical work, done right. Cochrane, Calgary & surrounding Alberta." },
    ],
  }),
  component: Home,
});

const PREVIEW_SERVICES = [
  { name: "Tesla Charger Installation", desc: "Certified EV charger installation for your home or business." },
  { name: "Panel Upgrade", desc: "Upgrade your electrical panel safely and to current code." },
  { name: "Pot Lights", desc: "Clean, modern recessed lighting installed with precision." },
  { name: "Basement Wiring", desc: "Full rough-in and finish wiring for basement builds and renovations." },
  { name: "Landscape Lighting", desc: "Outdoor lighting design and installation that lasts." },
  { name: "New Construction", desc: "Complete electrical for new builds from foundation to finish." },
];

const REVIEWS = [
  {
    name: "Jason M.",
    location: "Cochrane, AB",
    body: "Ricky installed pot lights throughout our main floor and did a phenomenal job. Clean work, on time, and very reasonably priced. Would absolutely call him again.",
  },
  {
    name: "Priya S.",
    location: "Calgary, AB",
    body: "We needed a panel upgrade before selling our home and Canadian Sparky came in, did the job right, and passed inspection the first time. Highly recommend.",
  },
  {
    name: "Derek O.",
    location: "Airdrie, AB",
    body: "Had an electrical emergency late on a Friday and Ricky picked up. Had us sorted out within two hours. That kind of service is hard to find.",
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center ken-burns image-reveal"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1800')" }}
          />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.62)" }} />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-24 text-center">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-brand text-xs sm:text-sm font-bold tracking-[0.25em] uppercase"
          >
            Master Electrician — Cochrane & Calgary
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05]"
          >
            Reliable Electrical Work,<br />
            <span className="text-brand">Done Right.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto"
          >
            Licensed, insured, and trusted across Cochrane, Calgary, and surrounding Alberta communities.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="tel:+16478870029"
              className="inline-flex justify-center items-center rounded-md bg-brand px-7 py-4 text-base font-bold text-white shadow-lg transition-all duration-200 hover:scale-[1.03] hover:shadow-2xl hover:bg-brand/90"
            >
              Call +1-647-887-0029
            </a>
            <Link
              to="/services"
              className="inline-flex justify-center items-center rounded-md border-2 border-white px-7 py-4 text-base font-bold text-white transition-all duration-200 hover:scale-[1.03] hover:bg-white hover:text-ink"
            >
              View Our Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-ink text-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { v: 10, suffix: "+", label: "Years Experience" },
            { v: 500, suffix: "+", label: "Jobs Completed" },
            { v: 100, suffix: "%", label: "Licensed & Insured" },
            { v: 5, suffix: "★", label: "Rated Service" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-4xl sm:text-5xl font-extrabold text-brand">
                <CountUp to={s.v} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm sm:text-base text-white/70 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink">What We Do</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              From panel upgrades to pot lights — we handle it all.
            </p>
          </Reveal>
          <StaggerGrid className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PREVIEW_SERVICES.map((s) => (
              <ServiceCard key={s.name} {...s} />
            ))}
          </StaggerGrid>
          <Reveal className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center rounded-md bg-ink text-white px-7 py-3.5 font-bold transition-all duration-200 hover:scale-[1.03] hover:bg-brand"
            >
              See All Services
            </Link>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="grid md:grid-cols-2">
        <Reveal className="bg-ink text-white p-10 sm:p-16 lg:p-20 flex items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              Why Cochrane & Calgary Trust <span className="text-brand">Canadian Sparky</span>
            </h2>
            <StaggerGrid className="mt-10 space-y-7" stagger={0.1}>
              {[
                { h: "Master Electrician on Every Job", b: "Ricky personally handles or supervises every project." },
                { h: "No Job Too Big or Too Small", b: "Pot lights to full panel replacements, we do it all." },
                { h: "Straightforward Pricing", b: "No hidden fees, no surprises. You get a clear quote upfront." },
                { h: "Local & Available", b: "Based in Cochrane, we serve Calgary and surrounding areas fast." },
              ].map((p) => (
                <StaggerItem key={p.h}>
                  <div className="border-l-2 border-brand pl-5">
                    <h3 className="text-lg font-bold">{p.h}</h3>
                    <p className="mt-1 text-white/70">{p.b}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </div>
        </Reveal>
        <div className="relative min-h-[400px] md:min-h-0 overflow-hidden hover-zoom group">
          <div
            className="absolute inset-0 bg-cover bg-center ken-burns-reverse image-reveal hover-zoom-inner"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent pointer-events-none" />
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 px-4 bg-surface">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink">What Our Clients Say</h2>
          </Reveal>
          <StaggerGrid className="mt-14 grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r) => (
              <StaggerItem key={r.name}>
                <div className="h-full bg-white rounded-xl p-7 shadow-sm transition-all duration-300 hover:scale-[1.01] hover:shadow-xl">
                  <div className="text-gold text-lg tracking-widest">★★★★★</div>
                  <p className="mt-4 text-ink/80 leading-relaxed">{r.body}</p>
                  <div className="mt-6 pt-4 border-t border-border">
                    <div className="font-bold text-ink">{r.name}</div>
                    <div className="text-sm text-muted-foreground">{r.location}</div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
