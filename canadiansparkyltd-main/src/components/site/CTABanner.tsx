import { Reveal } from "./Reveal";

export function CTABanner() {
  return (
    <section className="shimmer-bg bg-brand text-white py-20 px-4">
      <Reveal className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold">Ready to Get Started?</h2>
        <p className="mt-4 text-white/90 text-lg">
          Call or email us today for a free quote. We serve Cochrane, Calgary, Airdrie, and surrounding Alberta areas.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+16478870029"
            className="inline-flex justify-center items-center rounded-md bg-white text-brand px-7 py-3.5 font-bold transition-all duration-200 hover:scale-[1.03] hover:shadow-xl"
          >
            Call +1-647-887-0029
          </a>
          <a
            href="mailto:canadasparkylimited@gmail.com"
            className="inline-flex justify-center items-center rounded-md border-2 border-white text-white px-7 py-3.5 font-bold transition-all duration-200 hover:scale-[1.03] hover:bg-white hover:text-brand"
          >
            canadasparkylimited@gmail.com
          </a>
        </div>
      </Reveal>
    </section>
  );
}
