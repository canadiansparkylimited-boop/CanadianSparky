import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { Reveal } from "../components/site/Reveal";
import { CTABanner } from "../components/site/CTABanner";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Canadian Sparky — Meet Ricky, Master Electrician" },
      { name: "description", content: "Canadian Sparky Limited is owned by Saurabh 'Ricky' Tandon, a master electrician with 10+ years of experience serving Cochrane and Calgary." },
      { property: "og:title", content: "About Canadian Sparky" },
      { property: "og:description", content: "A local master electrician you can actually trust." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        title="About Canadian Sparky"
        subtitle="A local master electrician you can actually trust."
      />
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink">
              Meet Ricky — <span className="text-brand">Master Electrician</span>
            </h2>
            <div className="mt-6 space-y-5 text-ink/80 leading-relaxed">
              <p>
                Canadian Sparky Limited is owned and operated by Saurabh Tandon — known to most of his clients
                simply as Ricky. With over 10 years of hands-on experience in residential and commercial
                electrical work, Ricky has built a reputation across Cochrane, Calgary, and surrounding
                Alberta communities for honest pricing, clean workmanship, and showing up when he says he will.
              </p>
              <p>
                Unlike larger electrical companies where you never know who's walking through your door, with
                Canadian Sparky, Ricky is personally on every job. He carries full licensing and insurance,
                pulls the necessary permits, and stands behind every project he completes.
              </p>
              <p>
                Whether you need a single pot light installed or a complete panel upgrade before a home sale,
                Ricky brings the same care and professionalism to every job — big or small.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-5 items-start sm:items-center">
              <a
                href="tel:+16478870029"
                className="inline-flex items-center rounded-md bg-brand text-white px-6 py-3 font-bold transition-all duration-200 hover:scale-[1.03] hover:shadow-lg"
              >
                Call Ricky: +1-647-887-0029
              </a>
              <a
                href="mailto:canadasparkylimited@gmail.com"
                className="text-ink font-semibold hover:text-brand transition-colors break-all"
              >
                canadasparkylimited@gmail.com
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-xl overflow-hidden shadow-lg border border-border h-full min-h-[400px]">
              <iframe
                title="Cochrane, AB"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82155.3!2d-114.4!3d51.1893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5375a1c6e9e1e4b1%3A0x7e1a2f1e8a8e1e8a!2sCochrane%2C%20AB!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 400 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
        <Reveal className="max-w-6xl mx-auto mt-16 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-brand font-bold">Service Area</p>
          <p className="mt-4 text-lg text-ink/80">
            We proudly serve: Cochrane · Calgary · Airdrie · Okotoks · Chestermere · Rocky View County
          </p>
        </Reveal>
      </section>
      <CTABanner />
    </>
  );
}
