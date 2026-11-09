type IconProps = { className?: string }

export function LogoMark({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 34.13 42.66" fill="none" aria-hidden="true">
      <path d="M17.0634 8.5528L34.1266 17.0844V8.53161L17.0634 0V8.5528Z" fill="url(#nelteMark0)" />
      <path d="M17.0634 34.1055L34.1266 25.5739V34.1267L17.0634 42.6583V34.1055Z" fill="url(#nelteMark1)" />
      <path d="M17.0632 8.5528L0 17.0844V8.53161L17.0632 0V8.5528Z" fill="url(#nelteMark2)" />
      <path d="M17.0632 34.1055L0 25.5739V34.1267L17.0632 42.6583V34.1055Z" fill="url(#nelteMark3)" />
      <path d="M4.26062 19.2041L21.3132 27.7251L29.8554 23.454L12.8134 14.933L4.26062 19.2041Z" fill="url(#nelteMark4)" />
      <defs>
        <linearGradient id="nelteMark0" x1="34.0085" y1="12.7529" x2="17.057" y2="4.26626" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4500B6" />
          <stop offset="1" stopColor="#6100FF" />
        </linearGradient>
        <linearGradient id="nelteMark1" x1="34.0085" y1="29.905" x2="17.057" y2="38.3916" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4500B6" />
          <stop offset="1" stopColor="#6100FF" />
        </linearGradient>
        <linearGradient id="nelteMark2" x1="0.120291" y1="12.7529" x2="17.0718" y2="4.26626" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6100FF" />
          <stop offset="1" stopColor="#4500B6" />
        </linearGradient>
        <linearGradient id="nelteMark3" x1="0.120291" y1="29.905" x2="17.0718" y2="38.3916" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6100FF" />
          <stop offset="1" stopColor="#4500B6" />
        </linearGradient>
        <linearGradient id="nelteMark4" x1="26.1661" y1="25.8857" x2="7.81969" y2="16.7007" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6100FF" />
          <stop offset="1" stopColor="#4500B6" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function ChevronDown({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function ArrowRight({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function SearchIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="m13.5 13.5 3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function UserIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="7.25" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="10" cy="8.1" r="2.35" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M5.9 14.6c.95-1.55 2.35-2.35 4.1-2.35s3.15.8 4.1 2.35"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function SignInIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M8.2 4.2H5.6A1.6 1.6 0 0 0 4 5.8v8.4A1.6 1.6 0 0 0 5.6 15.8h2.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8.8 10H16M13.2 6.8 16.4 10l-3.2 3.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function PlayIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 8.5v7l6-3.5-6-3.5Z" fill="currentColor" />
    </svg>
  )
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="m3.5 8.2 3 3 6-6.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function XIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 4l12 12M16 4 4 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M4.5 7.2h2.4V16H4.5V7.2ZM5.7 4a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8ZM8.8 7.2h2.3v1.2h.03c.32-.6 1.1-1.35 2.36-1.35 2.52 0 3 1.66 3 3.82V16h-2.4v-4.3c0-1.02-.02-2.34-1.43-2.34-1.43 0-1.65 1.12-1.65 2.27V16H8.8V7.2Z" />
    </svg>
  )
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M11.4 16V10.4h1.9l.3-2.2h-2.2V6.8c0-.64.18-1.08 1.1-1.08H13.8V3.1C13.5 3.05 12.7 3 11.8 3 9.8 3 8.5 4.2 8.5 6.55v1.65H6.5v2.2h2V16h2.9Z" />
    </svg>
  )
}

export function YouTubeIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M17.4 6.4a2 2 0 0 0-1.4-1.4C14.7 4.6 10 4.6 10 4.6s-4.7 0-6 .4A2 2 0 0 0 2.6 6.4C2.2 7.7 2.2 10 2.2 10s0 2.3.4 3.6a2 2 0 0 0 1.4 1.4c1.3.4 6 .4 6 .4s4.7 0 6-.4a2 2 0 0 0 1.4-1.4c.4-1.3.4-3.6.4-3.6s0-2.3-.4-3.6ZM8.6 12.4V7.6L12.8 10l-4.2 2.4Z" />
    </svg>
  )
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}
