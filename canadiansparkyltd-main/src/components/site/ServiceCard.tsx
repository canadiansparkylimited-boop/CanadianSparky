import { StaggerItem } from "./Reveal";

export function ServiceCard({ name, desc }: { name: string; desc: string }) {
  return (
    <StaggerItem>
      <div className="group h-full rounded-xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-xl">
        <div className="h-0.5 w-10 bg-brand transition-all duration-300 group-hover:w-16" />
        <h3 className="mt-4 text-lg font-bold text-ink">{name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
      </div>
    </StaggerItem>
  );
}
