// Shared responsive Mint Ops authentication shell for local and cloud login.
// The brand panel is hidden on small screens; the form retains the BSI mark.

import type { ReactNode } from "react";

import { BrandLogo } from "@/components/BrandLogo";

const HIGHLIGHTS = [
  "Speech-to-speech",
  "MCP-native",
  "BYOK - any model",
];

export function AuthShell({
  children,
  enterpriseSlot,
}: {
  children: ReactNode;
  enterpriseSlot?: ReactNode;
}) {
  return (
    <div className="grid min-h-screen w-full bg-background lg:grid-cols-[55%_45%]">
      {/* Scrollable form column. */}
      <main className="auth-imprint flex min-h-screen flex-col overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-6 sm:p-10">
          <div className="w-full max-w-md space-y-6 rounded-xl border border-border/60 bg-card p-6 shadow-none sm:p-8">
            {/* Mobile-only wordmark (brand panel is hidden) */}
            <div className="lg:hidden">
              <BrandLogo className="h-7" />
            </div>
            {children}
          </div>
        </div>
      </main>

      {/* Brand / value panel (RIGHT) — hidden on mobile */}
      <aside className="relative hidden flex-col justify-between overflow-hidden border-l border-border/60 bg-sidebar p-10 lg:flex xl:p-14">
        <div className="relative">
          <BrandLogo className="h-8" />
        </div>

        <div className="relative max-w-md space-y-5">
          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-foreground xl:text-4xl">
            the Busines Solution Intelegent AI platform
          </h1>
          <ul className="flex flex-wrap gap-2">
            {HIGHLIGHTS.map((point) => (
              <li
                key={point}
                className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Enterprise CTA block (Bland-style) — bottom margin lifts it off the
            viewport edge while justify-between keeps the column layout */}
        <div className="relative mb-12 max-w-md space-y-3 rounded-xl border border-border bg-card p-5 xl:mb-16">
          <h2 className="text-sm font-semibold text-foreground">
            Need on-prem, data residency &amp; a data perimeter?
          </h2>
          <p className="text-sm text-muted-foreground">
            We deploy BSI inside your environment for regulated and
            high-scale teams.
          </p>
          {enterpriseSlot}
        </div>
      </aside>
    </div>
  );
}
