// Desenhos "flash" originais em SVG, usados como peças do portfólio.
// Traço usa currentColor; o preenchimento de destaque usa var(--accent).

const base = {
  viewBox: '0 0 120 120',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function Rosa(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M60 30c-14 0-24 10-24 22 0 14 11 22 24 22s24-8 24-22c0-12-10-22-24-22z" fill="var(--accent)" fillOpacity=".85" />
      <path d="M60 40c-7 0-12 5-12 11 0 7 6 11 12 11s12-4 12-11" />
      <path d="M54 50c2-4 9-5 12-1" />
      <path d="M36 52c-6-3-8-10-4-16M84 52c6-3 8-10 4-16" />
      <path d="M60 74v34" />
      <path d="M60 88c-10-2-18 2-22 10 9 2 17-1 22-10zM60 96c10-2 17 1 21 8-9 2-16 0-21-8z" />
    </svg>
  )
}

export function Serpente(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M30 100c20 0 46-6 46-22S44 62 44 46s16-24 32-24" />
      <path d="M36 100c18 0 46-5 46-22S50 62 50 46s12-18 26-18" />
      <path d="M76 22c8-2 16 2 18 8-4 6-12 8-18 6" fill="var(--accent)" fillOpacity=".85" />
      <circle cx="84" cy="27" r="1.6" fill="currentColor" />
      <path d="M94 31l8 2-6 4" />
      <path d="M30 100l-8 4M30 100l-6-6" />
    </svg>
  )
}

export function Adaga(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M60 14l8 52H52z" fill="var(--accent)" fillOpacity=".85" />
      <path d="M60 18v44" />
      <path d="M38 66h44" />
      <path d="M38 66c-4 0-6 4-4 6M82 66c4 0 6 4 4 6" />
      <rect x="55" y="70" width="10" height="24" rx="2" />
      <path d="M55 78h10M55 86h10" />
      <circle cx="60" cy="102" r="6" />
    </svg>
  )
}

export function Lua(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M70 20a40 40 0 1 0 30 62A32 32 0 1 1 70 20z" fill="var(--accent)" fillOpacity=".85" />
      <path d="M86 30l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" />
      <path d="M96 60l2 4 4 2-4 2-2 4-2-4-4-2 4-2z" />
      <path d="M44 56c3 2 7 2 10 0M44 70c4 4 12 4 16 0" />
    </svg>
  )
}

export function Andorinha(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M22 50c18-4 30 2 38 14 8-12 20-18 38-14-10 4-18 12-22 22l12 26-22-16-6 2-6-2-22 16 12-26c-4-10-12-18-22-22z" />
      <path d="M52 64c4-8 12-8 16 0-4 6-12 6-16 0z" fill="var(--accent)" fillOpacity=".85" />
      <circle cx="56" cy="62" r="1.4" fill="currentColor" />
      <path d="M48 62l-6-2" />
    </svg>
  )
}

export function Caveira(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M60 20c-20 0-32 14-32 32 0 12 6 20 14 24v14h36V76c8-4 14-12 14-24 0-18-12-32-32-32z" />
      <path d="M38 52c0-6 5-10 11-8 4 1 6 6 4 10s-8 6-12 4c-2-1-3-3-3-6zM82 52c0-6-5-10-11-8-4 1-6 6-4 10s8 6 12 4c2-1 3-3 3-6z" fill="var(--accent)" fillOpacity=".85" />
      <path d="M60 62l-5 10h10z" />
      <path d="M50 90v-8M60 90v-8M70 90v-8" />
      <path d="M30 100l60-8M30 92l60 8" />
    </svg>
  )
}

export function Olho(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M60 18l44 76H16z" />
      <path d="M34 66c14-16 38-16 52 0-14 16-38 16-52 0z" />
      <circle cx="60" cy="66" r="9" fill="var(--accent)" fillOpacity=".85" />
      <circle cx="60" cy="66" r="3" fill="currentColor" />
      <path d="M60 10V2M84 16l4-6M36 16l-4-6M100 34l7-3M20 34l-7-3" />
    </svg>
  )
}

export function Ancora(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <circle cx="60" cy="20" r="7" />
      <path d="M60 27v74" />
      <path d="M44 40h32" />
      <path d="M24 72c2 18 18 30 36 30s34-12 36-30" />
      <path d="M24 72l-6 8M24 72l10 4M96 72l6 8M96 72l-10 4" />
      <path d="M40 48c10 8 30 8 40 0-6 18-34 18-40 0z" fill="var(--accent)" fillOpacity=".85" />
    </svg>
  )
}

export function Mao(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M44 104V58l-8-14c-2-4 4-8 7-4l9 12V24c0-5 7-5 7 0v26-32c0-5 7-5 7 0v32-28c0-5 7-5 7 0v30-22c0-5 7-5 7 0v42c0 18-8 32-22 32H44z" />
      <path d="M58 78c0-6 4-10 8-10s8 4 8 10-4 10-8 10-8-4-8-10z" fill="var(--accent)" fillOpacity=".85" />
      <circle cx="66" cy="78" r="2" fill="currentColor" />
    </svg>
  )
}

export const desenhos = { Rosa, Serpente, Adaga, Lua, Andorinha, Caveira, Olho, Ancora, Mao }
