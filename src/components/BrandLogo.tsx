import { useState } from 'react'

type BrandLogoProps = {
  className?: string
  showTagline?: boolean
  variant?: 'full' | 'mark'
}

export function BrandLogo({
  className = '',
  showTagline = false,
  variant = 'full',
}: BrandLogoProps) {
  const [useImage, setUseImage] = useState(true)

  if (useImage && variant === 'full') {
    return (
      <img
        src="/logo.png"
        alt="S&S Product Approvals — Engineering Compliance and Certification Support"
        className={`h-12 w-auto max-w-[min(100%,280px)] object-contain object-left ${className}`}
        onError={() => setUseImage(false)}
      />
    )
  }

  if (useImage && variant === 'mark') {
    return (
      <img
        src="/logo.png"
        alt=""
        className={`h-10 w-auto object-contain ${className}`}
        onError={() => setUseImage(false)}
      />
    )
  }
  const mark = (
    <div className="relative flex h-14 w-14 shrink-0 items-center justify-center">
      <svg
        className="animate-spin-slow absolute inset-0 h-full w-full text-sky-400/80"
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden
      >
        <ellipse
          cx="50"
          cy="50"
          rx="42"
          ry="18"
          stroke="currentColor"
          strokeWidth="2.5"
          transform="rotate(-18 50 50)"
        />
        <path
          d="M12 58 C28 78, 72 78, 88 58"
          stroke="#1a2b56"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <span className="relative z-10 text-xl font-extrabold italic tracking-tight">
        <span className="text-navy-900">S</span>
        <span className="text-sky-400">&</span>
        <span className="text-navy-900">S</span>
      </span>
    </div>
  )

  if (variant === 'mark') {
    return <div className={className}>{mark}</div>
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {mark}
      <div className="hidden min-w-0 sm:block">
        <div className="flex items-stretch gap-2">
          <span className="w-px shrink-0 bg-sky-400/70" aria-hidden />
          <div className="text-left leading-tight">
            <p className="text-sm font-bold tracking-wide text-navy-900 uppercase">
              Product
            </p>
            <p className="text-sm font-bold tracking-wide text-navy-900 uppercase">
              Approvals
            </p>
          </div>
        </div>
        {showTagline && (
          <p className="mt-1 max-w-[14rem] text-[0.65rem] font-medium text-slate-brand">
            Engineering Compliance & Certification Support
          </p>
        )}
      </div>
    </div>
  )
}
