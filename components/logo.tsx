import Link from "next/link"

interface LogoMarkProps {
  size?: number
  className?: string
}

/**
 * Canonical Flow Contents mark.
 * Source of truth: flow-contents-platform/Flow Contents Design System/logo_final.html
 * Blue-600 tile, 14px corner radius on a 64-unit grid (~22%), "FC" in Geist 800,
 * white, font-size 32, letter-spacing -1.5, anchored center at (32, 44).
 */
export function LogoMark({ size = 32, className = "" }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <rect width="64" height="64" rx="14" fill="#2563eb" />
      <text
        x="32"
        y="44"
        fontFamily='"Geist", ui-sans-serif, system-ui, sans-serif'
        fontSize="32"
        fontWeight="800"
        letterSpacing="-1.5"
        textAnchor="middle"
        fill="#ffffff"
      >
        FC
      </text>
    </svg>
  )
}

interface WordmarkProps {
  size?: number
  href?: string
  showText?: boolean
}

/**
 * Mark + "Flow Contents" wordmark, used in nav and footer.
 */
export function Wordmark({ size = 28, href = "/", showText = true }: WordmarkProps) {
  const inner = (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark size={size} />
      {showText && (
        <span
          className="font-semibold text-[15px] tracking-tight text-slate-900"
          style={{ letterSpacing: "-0.01em" }}
        >
          Flow Contents
        </span>
      )}
    </span>
  )

  if (!href) return inner

  return (
    <Link href={href} className="inline-flex items-center no-underline">
      {inner}
    </Link>
  )
}
