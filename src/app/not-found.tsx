import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not found",
};

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-5 py-20 text-center">
      <p className="font-display text-8xl font-black tracking-tightest text-gold">
        404
      </p>
      <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tightest text-bone">
        Off air.
      </h1>
      <p className="mt-3 text-muted">
        That page doesn&rsquo;t exist. Let&rsquo;s get you back to the show.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block border border-gold bg-gold px-6 py-3 font-display text-sm font-extrabold uppercase tracking-wide text-ink transition-colors hover:bg-transparent hover:text-gold"
      >
        Back to home
      </Link>
    </div>
  );
}
