import logoAsset from "@/assets/canadian-sparky-logo.png";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex items-center gap-3 select-none">
      <img
        src={logoAsset}
        alt="Canadian Sparky"
        className="h-10 w-auto md:h-11 shrink-0"
        loading="eager"
        decoding="async"
      />
      <span className={`font-extrabold tracking-tight text-lg leading-none ${dark ? "text-white" : "text-ink"}`}>
        Canadian <span className="text-brand">Sparky</span>
      </span>
    </div>
  );
}
