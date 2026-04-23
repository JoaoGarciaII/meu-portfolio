import { useState, useEffect } from 'react'

const navLinks = ['About', 'Skills', 'Projects', 'Contact']

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    const onResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  const handleNav = id => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      padding: '0.85rem 2rem',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      transition: 'all 0.4s ease',
      background: scrolled ? 'rgba(0,0,0,0.75)' : 'transparent',
      backdropFilter: scrolled ? 'blur(40px) saturate(180%)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(40px) saturate(180%)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
      boxShadow: scrolled ? '0 1px 0 rgba(255,255,255,0.05) inset, 0 8px 32px rgba(0,0,0,0.5)' : 'none',
    }}>

      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexShrink: 0 }}>
        <div style={{
          width: 40, height: 40, borderRadius: '50%',
          background: 'rgba(255,255,255,0.06)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.15)',
          boxShadow: '0 2px 0 rgba(255,255,255,0.12) inset, 0 0 20px rgba(255,255,255,0.04)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: 700, fontSize: '0.82rem',
          color: 'rgba(255,255,255,0.85)', flexShrink: 0,
        }}>
          JG
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.25 }}>
          <span style={{ fontWeight: 800, fontSize: '1rem', color: '#fff', letterSpacing: '0.01em' }}>
            João Garcia
          </span>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.6rem', color: 'rgba(255,255,255,0.28)',
            letterSpacing: '0.22em', textTransform: 'uppercase',
          }}>
            Full Stack
          </span>
        </div>
      </div>

      {/* Nav desktop */}
      {!isMobile && (
        <nav style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          {navLinks.map(link => (
            <button
              key={link}
              onClick={() => handleNav(link)}
              data-hover
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 500, fontSize: 13,
                letterSpacing: '0.08em',
                color: 'rgba(255,255,255,0.45)',
                padding: '7px 16px', borderRadius: 100,
                border: '1px solid transparent',
                background: 'transparent',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#fff'
                e.currentTarget.style.background = 'rgba(255,255,255,0.07)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.45)'
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.borderColor = 'transparent'
              }}
            >
              {link}
            </button>
          ))}

          <button
            onClick={() => handleNav('Contact')}
            data-hover
            style={{
              marginLeft: 8, padding: '8px 20px', borderRadius: 100,
              fontSize: 13, fontFamily: "'Syne', sans-serif", fontWeight: 600,
              cursor: 'pointer',
              background: 'rgba(255,255,255,0.09)',
              border: '1px solid rgba(255,255,255,0.18)',
              color: '#fff',
              display: 'flex', alignItems: 'center', gap: '0.4rem',
              transition: 'all 0.25s ease',
              boxShadow: '0 2px 0 rgba(255,255,255,0.08) inset',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.15)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
              e.currentTarget.style.boxShadow = '0 2px 0 rgba(255,255,255,0.1) inset, 0 0 20px rgba(255,255,255,0.08)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.09)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'
              e.currentTarget.style.boxShadow = '0 2px 0 rgba(255,255,255,0.08) inset'
            }}
          >
            Hire Me
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </button>
        </nav>
      )}

      {/* Hamburger mobile — só aparece em mobile */}
      {isMobile && (
        <button
          onClick={() => setOpen(o => !o)}
          style={{
            width: 38, height: 38, borderRadius: 10,
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: 5,
            cursor: 'pointer', flexShrink: 0,
          }}
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block',
              width: 18, height: 1.5, borderRadius: 1,
              background: 'rgba(255,255,255,0.7)',
              transition: 'all 0.3s ease',
              transform:
                open && i === 0 ? 'rotate(45deg) translate(4.5px, 4.5px)' :
                open && i === 2 ? 'rotate(-45deg) translate(4.5px, -4.5px)' :
                open && i === 1 ? 'scaleX(0)' : 'none',
            }} />
          ))}
        </button>
      )}

      {/* Mobile menu dropdown */}
      {isMobile && open && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'rgba(6,8,14,0.95)',
          backdropFilter: 'blur(40px) saturate(180%)',
          WebkitBackdropFilter: 'blur(40px) saturate(180%)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          padding: '0.75rem 1.5rem 1.25rem',
          display: 'flex', flexDirection: 'column', gap: 4,
          animation: 'menuDown 0.25s cubic-bezier(0.4,0,0.2,1)',
        }}>
          {navLinks.map(link => (
            <button
              key={link}
              onClick={() => handleNav(link)}
              style={{
                textAlign: 'left', padding: '11px 14px', borderRadius: 10,
                fontFamily: "'Syne', sans-serif", fontWeight: 500, fontSize: 15,
                color: 'rgba(255,255,255,0.55)', background: 'transparent',
                border: '1px solid transparent', cursor: 'pointer',
                transition: 'all 0.2s',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#fff'
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.55)'
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.borderColor = 'transparent'
              }}
            >
              {link}
              <span style={{ fontSize: '0.7rem', opacity: 0.3 }}>↗</span>
            </button>
          ))}

          {/* Hire Me mobile */}
          <button
            onClick={() => handleNav('Contact')}
            style={{
              marginTop: '0.5rem', padding: '12px 20px', borderRadius: 12,
              fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: 14,
              cursor: 'pointer',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
              transition: 'all 0.2s',
              boxShadow: '0 2px 0 rgba(255,255,255,0.06) inset',
            }}
          >
            Hire Me
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </button>
        </div>
      )}

      <style>{`
        @keyframes menuDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  )
}