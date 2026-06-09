"use client";

// Email capture — the single primary CTA across the whole site.
//
// If NEXT_PUBLIC_BEEHIIV_URL is set we embed Beehiiv's iframe. Otherwise we
// render a styled placeholder form (no backend wired — submit is inert).

const BEEHIIV_URL = process.env.NEXT_PUBLIC_BEEHIIV_URL;

interface EmailCaptureProps {
  // Headline above the form.
  heading?: string;
  // Button label — defaults to the show's CTA.
  cta?: string;
  // Visual size — "hero" is larger, used directly under the homepage hero.
  variant?: "hero" | "default";
  className?: string;
}

export function EmailCapture({
  heading,
  cta = "Get TWIC weekly.",
  variant = "default",
  className = "",
}: EmailCaptureProps) {
  const isHero = variant === "hero";

  if (BEEHIIV_URL) {
    return (
      <div className={className}>
        {heading ? (
          <h2 className="mb-4 font-display text-2xl font-extrabold tracking-tightest text-bone">
            {heading}
          </h2>
        ) : null}
        <iframe
          src={BEEHIIV_URL}
          title="Subscribe to the TWIC newsletter"
          className="h-[150px] w-full border-0 bg-transparent"
          scrolling="no"
        />
      </div>
    );
  }

  // Placeholder form — styled to match, submit is inert until Beehiiv is wired.
  return (
    <form
      className={`w-full ${className}`}
      aria-label="Newsletter signup"
      onSubmit={(e) => e.preventDefault()}
    >
      {heading ? (
        <h2
          className={`mb-4 font-display font-extrabold tracking-tightest text-bone ${
            isHero ? "text-2xl sm:text-3xl" : "text-xl"
          }`}
        >
          {heading}
        </h2>
      ) : null}
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor={`email-${variant}`} className="sr-only">
          Email address
        </label>
        <input
          id={`email-${variant}`}
          type="email"
          required
          autoComplete="email"
          placeholder="you@fund.xyz"
          className="min-w-0 flex-1 border border-[#2a2a2a] bg-panel px-4 py-3 font-sans text-bone placeholder:text-muted focus:border-gold"
        />
        <button
          type="submit"
          className="whitespace-nowrap border border-gold bg-gold px-6 py-3 font-display text-sm font-extrabold uppercase tracking-wide text-ink transition-colors hover:bg-transparent hover:text-gold"
        >
          {cta}
        </button>
      </div>
      <p className="mt-2 text-xs text-muted">
        One email a week. The week in crypto, distilled. No spam.
      </p>
    </form>
  );
}
