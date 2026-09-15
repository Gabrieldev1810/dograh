import { cn } from "@/lib/utils";

// Mint Ops identity, with a compact symbol for narrow layouts.
export function BrandLogo({ className, inverse = false, mark = false }: {
  className?: string;
  inverse?: boolean;
  mark?: boolean;
}) {
  return (
    <svg viewBox={mark ? "0 0 32 32" : "0 0 92 32"} role="img" aria-label="BSI"
      className={cn("w-auto shrink-0 select-none", inverse ? "text-zinc-50" : "text-foreground", className)}>
      <rect width="32" height="32" rx="7" fill="var(--cta)" />
      <path d="M8 19c2-10 4-10 6 0s4 10 6 0 3-10 5 0" fill="none"
        stroke="var(--cta-foreground)" strokeWidth="2" strokeLinecap="round" />
      {!mark && (
        <text x="43" y="23" fill="currentColor" fontFamily="Arial, Helvetica, sans-serif"
          fontSize="20" fontWeight="700" letterSpacing="-.6">BSI</text>
      )}
    </svg>
  );
}
