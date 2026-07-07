import type { Utility } from "@/data/utilities";
import { FLIPCASH_URL, ALL_ENQUIRY_EMAIL } from "@/data/all";

// Resolves the row's safe hand-off. Never returns a bearer/claim link — the
// only actions are: open Flipcash (payer acts / pays into their own wallet or
// TWIC's published token) or an arm's-length email enquiry. Amounts and any
// private payout are handled off-site by a person.
function resolveAction(u: Utility): { label: string; href: string; external: boolean } | null {
  switch (u.handoff) {
    case "flipcash":
      return { label: "Open Flipcash →", href: FLIPCASH_URL, external: true };
    case "enquiry": {
      const subject =
        u.id === "community-spotlight"
          ? "Community Spotlight bid"
          : "TWIC advertising enquiry";
      return {
        label: u.id === "community-spotlight" ? "Submit a bid →" : "Enquire →",
        href: `mailto:${ALL_ENQUIRY_EMAIL}?subject=${encodeURIComponent(subject)}`,
        external: false,
      };
    }
    case "none":
    default:
      return null;
  }
}

export function UtilityRow({ utility }: { utility: Utility }) {
  const action = resolveAction(utility);
  const isSoon = utility.status === "soon";

  return (
    <div className="grid gap-4 border-b border-[#1f1f1f] py-8 md:grid-cols-[1fr_auto] md:items-center md:gap-8">
      <div>
        <div className="flex items-center gap-3">
          <h3 className="font-display text-2xl font-extrabold tracking-tightest text-bone sm:text-3xl">
            {utility.name}
          </h3>
          <StatusBadge status={utility.status} />
        </div>
        <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-gold">
          {utility.payLine}
        </p>
        <p className="mt-3 max-w-2xl text-bone">{utility.blurb}</p>
        <p className="mt-2 font-mono text-sm tnum text-muted">{utility.priceModel}</p>
        {utility.note ? (
          <p className="mt-3 max-w-2xl border-l-2 border-[#2a2a2a] pl-3 text-xs text-muted">
            {utility.note}
          </p>
        ) : null}
      </div>

      <div className="md:text-right">
        {action ? (
          <a
            href={action.href}
            {...(action.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="inline-flex items-center gap-2 border border-gold px-5 py-3 font-display text-sm font-extrabold uppercase tracking-wide text-gold transition-colors hover:bg-gold hover:text-ink"
          >
            {action.label}
          </a>
        ) : isSoon ? (
          <span className="inline-flex items-center gap-2 border border-[#2a2a2a] px-5 py-3 font-display text-sm font-extrabold uppercase tracking-wide text-muted">
            Coming soon
          </span>
        ) : null}
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: Utility["status"] }) {
  if (status === "live") {
    return (
      <span className="inline-flex items-center gap-1.5 border border-gold/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-gold">
        <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
        Live
      </span>
    );
  }
  return (
    <span className="inline-flex items-center border border-[#2a2a2a] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted">
      Soon
    </span>
  );
}
