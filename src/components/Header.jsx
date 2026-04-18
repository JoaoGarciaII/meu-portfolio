import { useState, useEffect } from 'react'

const navLinks = ['About', 'Skills', 'Projects', 'Contact']

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      style={{
        background: scrolled ? 'rgba(8,10,15,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(221,153,0,0.12)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 40px rgba(0,0,0,0.6)' : 'none',
        transition: 'all 0.4s ease',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        padding: '1rem 2.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {/* Logo + Name */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
        <div className="animate-pulse-glow" style={{
          width: 44, height: 44, borderRadius: '50%',
          border: '2px solid var(--gold)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: "'JetBrains Mono', monospace", fontWeight: 700,
          fontSize: '0.85rem', color: 'var(--gold)',
          boxShadow: '0 0 16px rgba(221,153,0,0.35), inset 0 0 16px rgba(221,153,0,0.08)',
          flexShrink: 0,
        }}>
          JG
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
          <span style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text)', letterSpacing: '0.02em' }}>
            JG Dev
          </span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: 'var(--gold)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Full Stack
          </span>
        </div>
      </div>

      {/* Nav */}
  <nav className="hidden md:flex gap-2">
  {navLinks.map((link) => (
    <button
      key={link}
      onClick={() => handleNav(link)}
      className="
        border border-yellow-500/20
        text-gray-400
        font-medium
        text-xs md:text-sm
        tracking-widest
        px-3 py-2 md:px-4
        rounded-md
        transition-all duration-300

        hover:text-yellow-400
        hover:border-yellow-400/60
        hover:bg-yellow-400/10
        hover:shadow-[0_0_14px_rgba(221,153,0,0.2)]
      "
    >
      {link}
    </button>
  ))}
</nav>
    </header>
  )
}