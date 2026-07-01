import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { Reveal } from "../components/site/Reveal";
import { CTABanner } from "../components/site/CTABanner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Canadian Sparky — Cochrane & Calgary Electrician" },
      { name: "description", content: "Get in touch with Canadian Sparky for a free electrical quote or to book service. Call, text, or email Ricky directly." },
      { property: "og:title", content: "Contact Canadian Sparky" },
      { property: "og:description", content: "Get in touch for a free quote or to book a service." },
    ],
  }),
  component: ContactPage,
});

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.2em] text-brand font-bold">{label}</div>
      <div className="mt-2 text-ink/85 text-lg">{children}</div>
    </div>
  );
}

function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Canadian Sparky"
        subtitle="Get in touch for a free quote or to book a service."
      />
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink">Get In Touch</h2>
            <div className="mt-8 space-y-6">
              <Row label="Phone">
                <a href="tel:+16478870029" className="hover:text-brand transition-colors font-semibold">
                  +1-647-887-0029
                </a>
              </Row>
              <Row label="Email">
                <a
                  href="mailto:canadasparkylimited@gmail.com"
                  className="hover:text-brand transition-colors font-semibold break-all"
                >
                  canadasparkylimited@gmail.com
                </a>
              </Row>
              <Row label="Location">Cochrane, Calgary & Surrounding Areas, Alberta</Row>
              <Row label="Hours">
                Monday – Saturday: 7:00 AM – 7:00 PM
                <br />
                <span className="text-base text-muted-foreground">Emergency calls accepted 24/7</span>
              </Row>
              <div className="pt-4 border-t border-border">
                <p className="text-ink/75">
                  Prefer texting? You can also reach Ricky by SMS at{" "}
                  <a href="sms:+16478870029" className="font-bold text-brand hover:underline">
                    +1-647-887-0029
                  </a>
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-xl overflow-hidden shadow-lg border border-border">
              <iframe
                title="Cochrane, AB"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82155.3!2d-114.4!3d51.1893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5375a1c6e9e1e4b1%3A0x7e1a2f1e8a8e1e8a!2sCochrane%2C%20AB!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
