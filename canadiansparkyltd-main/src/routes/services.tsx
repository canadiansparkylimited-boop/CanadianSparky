import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { StaggerGrid } from "../components/site/Reveal";
import { ServiceCard } from "../components/site/ServiceCard";
import { CTABanner } from "../components/site/CTABanner";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Electrical Services — Canadian Sparky | Cochrane & Calgary" },
      { name: "description", content: "Full residential and commercial electrical services: panel upgrades, EV chargers, pot lights, basement wiring, new construction, and more." },
      { property: "og:title", content: "Our Electrical Services — Canadian Sparky" },
      { property: "og:description", content: "Licensed residential and commercial electrical work across Cochrane, Calgary & Alberta." },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  { name: "Tesla Charger Installation", desc: "We install Level 2 EV chargers for Tesla and all major brands. Whether it's a home garage or a commercial parking facility, we handle permitting, panel assessment, and a safe, code-compliant install." },
  { name: "Panel Upgrade", desc: "Older panels can be a fire hazard and limit your home's capacity. We upgrade to modern breaker panels that handle today's electrical loads safely and efficiently." },
  { name: "Basement Wiring", desc: "Planning a basement suite, rec room, or home office? We handle complete rough-in and finish wiring, including outlets, lighting, and dedicated circuits." },
  { name: "New Construction", desc: "From the initial rough-in to the final trim, we wire new builds to Alberta electrical code. We work with builders, contractors, and individual homeowners." },
  { name: "Landscape Lighting & Troubleshooting", desc: "We design and install outdoor lighting for driveways, pathways, and yards. We also diagnose and fix existing landscape lighting problems." },
  { name: "Appliance Installation", desc: "Safe, code-compliant wiring and hookup for stoves, washers, dryers, dishwashers, and other major appliances requiring dedicated circuits." },
  { name: "Duct Smoke Alarm", desc: "We install interconnected duct smoke detectors required in HVAC systems for residential and commercial buildings to meet Alberta fire code." },
  { name: "Pot Lights", desc: "Recessed LED pot light installation throughout your home. Clean finishes, energy-efficient bulbs, and dimmer-compatible options available." },
  { name: "All Residential & Commercial Electrical Work", desc: "From small repairs to full rewires, Canadian Sparky handles any electrical job. If you don't see your need listed, just call — we likely do it." },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Electrical Services"
        subtitle="Licensed residential and commercial electrical work across Cochrane, Calgary & Alberta."
      />
      <section className="py-20 px-4 bg-surface">
        <div className="max-w-6xl mx-auto">
          <StaggerGrid className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <ServiceCard key={s.name} {...s} />
            ))}
          </StaggerGrid>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
