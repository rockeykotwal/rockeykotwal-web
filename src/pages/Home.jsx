import { Link } from 'react-router-dom'
import { products } from '../data/products'
import { useTheme } from '../context/ThemeContext'
import { themes } from '../styles/themes'
import rockeyPhoto from '../assets/rockey.png'

// ── Icons ──────────────────────────────────────────────────────────────────

function IconGitHub({ size = 18, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function IconLinkedIn({ size = 18, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function IconInstagram({ size = 18, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

function IconYouTube({ size = 18, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
    </svg>
  )
}

function IconSun({ size = 18, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

function IconMoon({ size = 18, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

// ── Topographic BG ─────────────────────────────────────────────────────────

function TopoBg({ c }) {
  return (
    <svg
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', userSelect: 'none' }}
      viewBox="0 0 1200 700"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      {[55, 115, 185, 265, 360, 465, 580, 705, 840].map((r, i) => (
        <ellipse
          key={i}
          cx="600"
          cy="350"
          rx={r * 1.7}
          ry={r}
          fill="none"
          stroke={c.accentTopoStroke}
          strokeWidth="0.7"
          opacity={Math.max(0.003, c.topoOpacityBase - i * 0.005)}
        />
      ))}
    </svg>
  )
}

// ── Stat Pill ──────────────────────────────────────────────────────────────

function StatPill({ value, label, c }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <p style={{ fontSize: 36, fontWeight: 900, letterSpacing: '-0.04em', color: c.text, lineHeight: 1 }}>
        {value}<span style={{ color: c.accent }}>.</span>
      </p>
      <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.25em', color: c.textMuted, fontFamily: 'JetBrains Mono, monospace', marginTop: 6 }}>
        {label}
      </p>
    </div>
  )
}

// ── Social Link ────────────────────────────────────────────────────────────

const SOCIAL = [
  { label: 'GitHub', href: 'https://github.com/rockeykotwal', Icon: IconGitHub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rockey-kotwal-2b7482142/', Icon: IconLinkedIn },
  { label: 'Instagram', href: 'https://www.instagram.com/tech_and_twirl/', Icon: IconInstagram },
  { label: 'YouTube', href: 'https://www.youtube.com/@Rockey_And_Simran', Icon: IconYouTube },
]

function SocialLink({ label, href, Icon, c }) {
  const [hovered, setHovered] = useState(false)
  const color = hovered ? c.accent : c.textMuted

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        textDecoration: 'none',
        color,
        fontSize: 13,
        fontFamily: 'JetBrains Mono, monospace',
        letterSpacing: '0.1em',
        transition: 'color 0.2s',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Icon size={16} color={color} />
      {label}
    </a>
  )
}

// ── Career Timeline ────────────────────────────────────────────────────────

const CAREER = [
  {
    period: '2024 – Now',
    company: 'ALFAN',
    role: 'Lead Engineer',
    highlight: '10K → 120K+ creators in 18 months · leads 3-engineer squad · CI/CD & Terraform IaC',
  },
  {
    period: '2022 – 2024',
    company: 'ALFAN',
    role: 'Senior Software Engineer',
    highlight: '$1.25M ARR payment system · multi-currency digital wallet · 1K+ daily transactions · −8% txn failures',
  },
  {
    period: '2020 – 2022',
    company: 'Covideo / Droplr',
    role: 'Senior Software Engineer',
    highlight: '2M+ shareable links · serverless video encoding pipeline · −40% API latency · Stripe billing',
  },
  {
    period: '2017 – 2020',
    company: 'Jungleworks',
    role: 'Software Engineer',
    highlight: 'Payment workflows on Checkout.com · proximity-based fleet auto-assignment · on-demand logistics APIs',
  },
]

function CareerTimeline({ c }) {
  return (
    <div style={{ textAlign: 'left', marginBottom: 48 }}>
      {CAREER.map((item, i) => (
        <div key={i} style={{ display: 'flex', gap: 20, paddingBottom: i < CAREER.length - 1 ? 32 : 0 }}>
          {/* spine */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: i === 0 ? c.accent : c.textMuted, flexShrink: 0, marginTop: 5 }} />
            {i < CAREER.length - 1 && (
              <div style={{ width: 1, flex: 1, background: c.borderSubtle, marginTop: 6 }} />
            )}
          </div>
          {/* content */}
          <div style={{ paddingBottom: i < CAREER.length - 1 ? 8 : 0 }}>
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: c.textMuted, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 4 }}>
              {item.period}
            </p>
            <p style={{ fontWeight: 700, fontSize: 15, color: c.text, marginBottom: 2 }}>
              {item.company}
              <span style={{ fontWeight: 400, color: c.textSec, fontSize: 13 }}> · {item.role}</span>
            </p>
            <p style={{ fontSize: 13, color: c.textSec, lineHeight: 1.5 }}>{item.highlight}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

// ── Main Component ─────────────────────────────────────────────────────────

import { useState } from 'react'

export default function Home() {
  const { theme, toggleTheme } = useTheme()
  const c = themes[theme]

  return (
    <div style={{ minHeight: '100vh', background: c.bg, color: c.text, fontFamily: 'Inter, system-ui, sans-serif', transition: 'background 0.3s, color 0.3s' }}>

      {/* ── NAV ── */}
      <nav
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 64px', borderBottom: `1px solid ${c.borderSubtle}` }}
      >
        <span style={{ fontSize: 18, fontWeight: 900, letterSpacing: '-0.04em', color: c.text }}>RK</span>

        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <a
            href="mailto:rockeykotwal1995@gmail.com"
            style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.2em', color: c.textMuted, textDecoration: 'none', fontFamily: 'JetBrains Mono, monospace', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.target.style.color = c.accent)}
            onMouseLeave={e => (e.target.style.color = c.textMuted)}
          >
            get in touch
          </a>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{ background: 'none', border: `1px solid ${c.border}`, borderRadius: 8, padding: '6px 10px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = c.accent)}
            onMouseLeave={e => (e.currentTarget.style.borderColor = c.border)}
          >
            {theme === 'dark'
              ? <IconSun size={16} color={c.textMuted} />
              : <IconMoon size={16} color={c.textMuted} />
            }
          </button>
        </div>
      </nav>

      {/* ── STATUS BAR ── */}
      <div style={{ borderBottom: `1px solid ${theme === 'dark' ? 'rgba(74,222,128,0.12)' : 'rgba(22,163,74,0.12)'}`, background: theme === 'dark' ? 'rgba(74,222,128,0.04)' : 'rgba(22,163,74,0.04)', padding: '9px 32px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
        <span style={{ position: 'relative', display: 'inline-flex', width: 8, height: 8, flexShrink: 0 }}>
          <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: c.green, opacity: 0.5, animation: 'ping 1.5s cubic-bezier(0,0,0.2,1) infinite' }} />
          <span style={{ position: 'relative', width: 8, height: 8, borderRadius: '50%', background: c.green, display: 'block' }} />
        </span>
        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: c.green, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          Open to work
        </p>
      </div>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', overflow: 'hidden', minHeight: 'calc(100vh - 73px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <TopoBg c={c} />

        {/* center glow */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: `radial-gradient(ellipse 60% 50% at 50% 50%, ${c.accentGlow} 0%, transparent 70%)` }} />

        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '80px 32px', maxWidth: 720, margin: '0 auto', width: '100%' }}>

          {/* Photo */}
          <div style={{ position: 'relative', display: 'inline-block', marginBottom: 32 }}>
            <div style={{ position: 'absolute', inset: -8, borderRadius: '50%', border: `1px solid ${c.accentRing1}` }} />
            <div style={{ position: 'absolute', inset: -18, borderRadius: '50%', border: `1px solid ${c.accentRing2}` }} />
            <img
              src={rockeyPhoto}
              alt="Rockey Kotwal"
              style={{ width: 160, height: 160, borderRadius: '50%', objectFit: 'cover', objectPosition: 'top center', display: 'block', position: 'relative', zIndex: 1 }}
            />
          </div>

          {/* Label */}
          <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.3em', color: c.accent, fontFamily: 'JetBrains Mono, monospace', marginBottom: 20 }}>
            software engineer · since 2017
          </p>

          {/* Name */}
          <h1 style={{ fontSize: 'clamp(3.2rem, 9vw, 7rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 0.95, color: c.text, marginBottom: 24 }}>
            ROCKEY<br />
            <span style={{ color: c.accent }}>KOTWAL</span>
          </h1>

          {/* Tagline */}
          <p style={{ fontSize: 18, color: c.textSec, lineHeight: 1.6, maxWidth: 480, margin: '0 auto 48px' }}>
            Hands-on backend engineer who loves a good challenge. I build systems that turn ideas into real, working results.
          </p>

          {/* Stats */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 0 }}>
            <StatPill value="9+" label="Years" c={c} />
            <div style={{ borderLeft: `1px solid ${c.borderSubtle}`, margin: '0 40px' }} />
            <StatPill value="$1.25M" label="ARR Built" c={c} />
            <div style={{ borderLeft: `1px solid ${c.borderSubtle}`, margin: '0 40px' }} />
            <StatPill value="2" label="Products" c={c} />
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, letterSpacing: '0.25em', color: c.textDim, textTransform: 'uppercase' }}>scroll</span>
          <div style={{ width: 1, height: 32, background: c.accent, opacity: 0.2 }} className="animate-bounce" />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section style={{ borderTop: `1px solid ${c.borderSubtle}`, padding: '96px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.3em', color: c.textMuted, fontFamily: 'JetBrains Mono, monospace', marginBottom: 20 }}>
            // about
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.03em', color: c.text, marginBottom: 24, lineHeight: 1.1 }}>
            Building things that<br />
            <span style={{ color: c.accent }}>actually work.</span>
          </h2>
          <p style={{ fontSize: 17, color: c.textSec, lineHeight: 1.7, marginBottom: 16 }}>
            Senior Backend Engineer and Engineering Lead specialising in payments, billing, and distributed systems. Nine years across fintech, creator platforms, and video tech — always on the backend, always where the real complexity lives.
          </p>
          <CareerTimeline c={c} />

          {/* Terminal card */}
          <div style={{ background: c.surface, border: `1px solid ${c.border}`, borderRadius: 20, overflow: 'hidden', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '14px 20px', borderBottom: `1px solid ${c.borderSubtle}` }}>
              <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ff5f57', display: 'block' }} />
              <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#febc2e', display: 'block' }} />
              <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#28c840', display: 'block' }} />
              <span style={{ marginLeft: 12, fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: c.textDim }}>rockey@terminal ~ $</span>
            </div>
            <div style={{ padding: '28px 28px', fontFamily: 'JetBrains Mono, monospace', fontSize: 13, lineHeight: 2 }}>
              <p><span style={{ color: c.accent }}>$ </span><span style={{ color: c.text }}>whoami</span></p>
              <p style={{ color: c.textSec }}>lead engineer · payments & fintech · since 2017</p>
              <br />
              <p><span style={{ color: c.accent }}>$ </span><span style={{ color: c.text }}>cat highlights.txt</span></p>
              <p style={{ color: c.textSec }}><span style={{ color: c.green }}>→</span> $1.25M ARR payment system · ALFAN</p>
              <p style={{ color: c.textSec }}><span style={{ color: c.green }}>→</span> 10K → 120K+ creators · 18 months</p>
              <p style={{ color: c.textSec }}><span style={{ color: c.green }}>→</span> 2M+ shareable links · Droplr</p>
              <p style={{ color: c.textSec }}><span style={{ color: c.green }}>→</span> −40% API latency · Covideo</p>
              <br />
              <p><span style={{ color: c.accent }}>$ </span><span style={{ color: c.text }}>uptime</span></p>
              <p style={{ color: c.textSec }}>9 years, still running <span style={{ color: c.accent }} className="animate-pulse">▋</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section style={{ borderTop: `1px solid ${c.borderSubtle}`, padding: '96px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.3em', color: c.textMuted, fontFamily: 'JetBrains Mono, monospace', marginBottom: 20 }}>
            // products
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.03em', color: c.text, marginBottom: 12, lineHeight: 1.1 }}>
            Building on the side.
          </h2>
          <p style={{ fontSize: 15, color: c.textSec, marginBottom: 56, fontFamily: 'JetBrains Mono, monospace' }}>
            Hobby projects. ~30 mins a day. Scratching my own itches.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 20 }}>
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} c={c} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BEYOND THE BUILD ── */}
      <section style={{ borderTop: `1px solid ${c.borderSubtle}`, padding: '96px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.3em', color: c.textMuted, fontFamily: 'JetBrains Mono, monospace', marginBottom: 20 }}>
            // beyond the build
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.03em', color: c.text, marginBottom: 20, lineHeight: 1.1 }}>
            Mountains, miles<br />
            <span style={{ color: c.accent }}>&amp; open trails.</span>
          </h2>
          <p style={{ fontSize: 17, color: c.textSec, lineHeight: 1.7, marginBottom: 48 }}>
            When the terminal is closed, I'm on a trail. Running teaches pacing — when to push, when to breathe. Mountains give perspective that no screen can match. Every trek sharpens something I bring back to the keyboard.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 16 }}>
            {[
              { symbol: '⟋', label: 'Running', sub: 'daily miles, clear mind' },
              { symbol: '△', label: 'Mountains', sub: 'camping & trekking' },
              { symbol: '◉', label: 'Gym', sub: 'discipline over motivation' },
              { symbol: '⬡', label: 'Sports', sub: 'team, sweat, repeat' },
            ].map((item) => (
              <div
                key={item.label}
                style={{ padding: '36px 20px', background: c.surface, border: `1px solid ${c.border}`, borderRadius: 20, textAlign: 'center' }}
              >
                <span style={{ display: 'block', fontFamily: 'JetBrains Mono, monospace', fontSize: 26, color: c.accent, opacity: 0.75, marginBottom: 12 }}>
                  {item.symbol}
                </span>
                <p style={{ fontWeight: 600, fontSize: 14, color: c.text, marginBottom: 4 }}>{item.label}</p>
                <p style={{ fontSize: 11, color: c.textMuted, fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.05em' }}>{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: `1px solid ${c.borderSubtle}`, padding: '48px 32px 80px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 32, marginBottom: 32 }}>
          {SOCIAL.map(({ label, href, Icon }) => (
            <SocialLink key={label} label={label} href={href} Icon={Icon} c={c} />
          ))}
        </div>
        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: c.textDim, letterSpacing: '0.1em' }}>
          © {new Date().getFullYear()} ROCKEY KOTWAL
        </p>
      </footer>

    </div>
  )
}

// ── Product Card ────────────────────────────────────────────────────────────

function ProductCard({ product, c }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link to={`/product/${product.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
      <div
        style={{
          height: '100%',
          padding: '32px',
          background: hovered ? c.surfaceHover : c.surface,
          border: hovered ? `1px solid ${c.borderAccent}` : `1px solid ${c.border}`,
          borderRadius: 20,
          textAlign: 'left',
          transition: 'background 0.2s, border-color 0.2s',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
          <h3 style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.02em', color: c.text }}>{product.name}</h3>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 16, color: hovered ? c.accent : c.textDim, transition: 'color 0.2s' }}>↗</span>
        </div>
        <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.2em', color: c.accent, fontFamily: 'JetBrains Mono, monospace', marginBottom: 16 }}>
          {product.tagline}
        </p>
        <p style={{ fontSize: 14, color: c.textSec, lineHeight: 1.6, marginBottom: 24 }}>
          {product.description}
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {product.features.slice(0, 2).map((f, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: c.textMuted }}>
              <span style={{ color: c.green, marginTop: 1, flexShrink: 0 }}>→</span>
              <span>{f.title}</span>
            </li>
          ))}
        </ul>
        <div style={{ borderTop: `1px solid ${c.borderSubtle}`, marginTop: 28, paddingTop: 20 }}>
          <span style={{ fontSize: 11, color: c.textMuted, fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            view product
          </span>
        </div>
      </div>
    </Link>
  )
}
