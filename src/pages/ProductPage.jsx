import { useParams, Link } from 'react-router-dom'
import { products } from '../data/products'
import { useTheme } from '../context/ThemeContext'
import { themes } from '../styles/themes'

function IconSun({ size = 18, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

function IconMoon({ size = 18, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

export default function ProductPage() {
  const { slug } = useParams()
  const { theme, toggleTheme } = useTheme()
  const c = themes[theme]
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    return (
      <div style={{ minHeight: '100vh', background: c.bg, color: c.text, fontFamily: 'Inter, system-ui, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: c.textMuted, letterSpacing: '0.2em', marginBottom: 16 }}>404 · NOT FOUND</p>
          <Link to="/" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: c.accent, textDecoration: 'none' }}>← back home</Link>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: c.bg, color: c.text, fontFamily: 'Inter, system-ui, sans-serif', transition: 'background 0.3s, color 0.3s' }}>

      {/* NAV */}
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 64px', borderBottom: `1px solid ${c.borderSubtle}` }}>
        <Link
          to="/"
          style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: c.textMuted, textDecoration: 'none', letterSpacing: '0.2em', textTransform: 'uppercase', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.target.style.color = c.accent)}
          onMouseLeave={e => (e.target.style.color = c.textMuted)}
        >
          ← RK
        </Link>
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          style={{ background: 'none', border: `1px solid ${c.border}`, borderRadius: 8, padding: '6px 10px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          {theme === 'dark' ? <IconSun size={16} color={c.textMuted} /> : <IconMoon size={16} color={c.textMuted} />}
        </button>
      </nav>

      {/* HERO */}
      <section style={{ padding: '96px 32px', textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
        <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.3em', color: c.textMuted, fontFamily: 'JetBrains Mono, monospace', marginBottom: 20 }}>
          // product
        </p>
        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 0.95, color: c.text, marginBottom: 20 }}>
          {product.name}
        </h1>
        <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.25em', color: c.accent, fontFamily: 'JetBrains Mono, monospace', marginBottom: 24 }}>
          {product.tagline}
        </p>
        <p style={{ fontSize: 18, color: c.textSec, lineHeight: 1.7, marginBottom: 40 }}>
          {product.description}
        </p>
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c.accent, color: '#fff', fontWeight: 700, fontSize: 14, padding: '14px 32px', borderRadius: 100, textDecoration: 'none', letterSpacing: '-0.01em', transition: 'background 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.background = c.accentHover)}
          onMouseLeave={e => (e.currentTarget.style.background = c.accent)}
        >
          Launch App ↗
        </a>
      </section>

      {/* FEATURES */}
      {product.features.length > 0 && (
        <section style={{ borderTop: `1px solid ${c.borderSubtle}`, padding: '80px 32px', textAlign: 'center' }}>
          <div style={{ maxWidth: 960, margin: '0 auto' }}>
            <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.3em', color: c.textMuted, fontFamily: 'JetBrains Mono, monospace', marginBottom: 48 }}>
              // features
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
              {product.features.map((feature, i) => (
                <div key={i} style={{ padding: '28px', background: c.surface, border: `1px solid ${c.border}`, borderRadius: 20, textAlign: 'left' }}>
                  <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: c.accent, letterSpacing: '0.15em', marginBottom: 12 }}>0{i + 1}</p>
                  <h3 style={{ fontWeight: 600, fontSize: 16, color: c.text, letterSpacing: '-0.01em', marginBottom: 10 }}>{feature.title}</h3>
                  <p style={{ color: c.textSec, fontSize: 14, lineHeight: 1.6 }}>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer style={{ borderTop: `1px solid ${c.borderSubtle}`, padding: '40px 32px 80px', textAlign: 'center' }}>
        <Link
          to="/"
          style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: c.textMuted, textDecoration: 'none', letterSpacing: '0.15em', textTransform: 'uppercase', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.target.style.color = c.accent)}
          onMouseLeave={e => (e.target.style.color = c.textMuted)}
        >
          ← back to all products
        </Link>
      </footer>
    </div>
  )
}
