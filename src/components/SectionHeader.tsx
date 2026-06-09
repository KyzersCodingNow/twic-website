// Section header with a thin gold rule beneath — a recurring broadcast motif.

interface SectionHeaderProps {
  title: string;
  kicker?: string;
  className?: string;
}

export function SectionHeader({ title, kicker, className = "" }: SectionHeaderProps) {
  return (
    <div className={className}>
      {kicker ? (
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-gold">
          {kicker}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-extrabold tracking-tightest text-bone sm:text-4xl">
        {title}
      </h2>
      <div className="gold-rule mt-4 w-16" />
    </div>
  );
}
