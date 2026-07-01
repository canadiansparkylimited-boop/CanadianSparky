export function EmergencyBanner() {
  return (
    <div className="shimmer-bg bg-brand text-white text-center text-sm py-2 px-4 relative z-50">
      <span className="relative z-10">
        24/7 Emergency Electrical Service — Call Now:{" "}
        <a href="tel:+16478870029" className="font-bold underline-offset-2 hover:underline">
          +1-647-887-0029
        </a>
      </span>
    </div>
  );
}
