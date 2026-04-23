import { useState, useEffect } from 'react'

const roles = ['Full Stack Developer', 'Information Security', 'Problem Solver', 'Creative Builder']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing,    setTyping]    = useState(true)

  useEffect(() => {
    const target = roles[roleIndex]
    let timeout
    if (typing) {
      if (displayed.length < target.length) {
        timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60)
      } else {
        timeout = setTimeout(() => setTyping(false), 2000)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
      } else {
        setRoleIndex(i => (i + 1) % roles.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  return (
    <section style={{
      minHeight: '92vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '4rem 2rem',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Ambient glow centre */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 65% 55% at 50% 50%, rgba(255,255,255,0.04) 0%, transparent 70%)',
      }} />

      {/* Decorative rings */}
      <div style={{
        position: 'absolute', width: 520, height: 520, borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.04)',
        top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        pointerEvents: 'none', zIndex: 0,
        animation: 'float 8s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', width: 350, height: 350, borderRadius: '50%',
        border: '1px dashed rgba(255,255,255,0.06)',
        top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        animation: 'rotateSlow 22s linear infinite',
        pointerEvents: 'none', zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', width: 700, height: 700, borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.02)',
        top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        animation: 'rotateSlow 40s linear infinite reverse',
        pointerEvents: 'none', zIndex: 0,
      }} />

      {/* Available to work badge */}
      <div className="animate-fade-up" style={{ zIndex: 1, marginBottom: '1.4rem' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '6px 16px 6px 10px',
          borderRadius: 100,
          background: 'rgba(255,255,255,0.06)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.12)',
          boxShadow: '0 2px 0 rgba(255,255,255,0.1) inset, 0 8px 24px rgba(0,0,0,0.3)',
        }}>
          {/* Pulsing dot */}
          <span style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 8, height: 8 }}>
            <span style={{
              position: 'absolute', width: 14, height: 14, borderRadius: '50%',
              background: 'rgba(74,222,128,0.25)',
              animation: 'pulseGlow 2s ease-in-out infinite',
            }} />
            <span style={{
              width: 7, height: 7, borderRadius: '50%',
              background: '#4ade80',
              boxShadow: '0 0 8px #4ade80',
              display: 'block',
            }} />
          </span>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11, letterSpacing: '0.12em',
            color: 'rgba(255,255,255,0.6)',
          }}>
            Available to work
          </span>
        </div>
      </div>

      {/* Section label */}
      <p className="animate-fade-up section-label" style={{ marginBottom: '1rem', zIndex: 1 }}>
        ✦ Welcome to my portfolio ✦
      </p>

      {/* Main name */}
      <h1 className="animate-fade-up delay-200" style={{
        fontSize: 'clamp(3rem, 8vw, 7rem)',
        fontWeight: 800,
        letterSpacing: '-0.03em',
        lineHeight: 1.05,
        zIndex: 1,
        marginBottom: '1.2rem',
        color: '#fff',
        textShadow: '0 0 80px rgba(255,255,255,0.15)',
      }}>
        João Garcia
      </h1>

      {/* Typewriter */}
      <div className="animate-fade-up delay-400" style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 'clamp(0.85rem, 2.2vw, 1.2rem)',
        color: 'rgba(255,255,255,0.35)',
        zIndex: 1,
        minHeight: '2rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem',
        marginBottom: '2.8rem',
      }}>
        <span style={{ color: 'rgba(255,255,255,0.2)' }}>&gt;</span>
        <span style={{ color: 'rgba(255,255,255,0.75)' }}>{displayed}</span>
        <span style={{
          display: 'inline-block', width: 2, height: '1.1em',
          background: 'rgba(255,255,255,0.7)', marginLeft: 2,
          animation: 'blink 1s step-end infinite',
        }} />
      </div>

      {/* CTA buttons */}
      <div className="animate-fade-up delay-600" style={{
        display: 'flex', gap: '0.9rem', flexWrap: 'wrap',
        justifyContent: 'center', zIndex: 1,
      }}>
        {/* Primary */}
        <button
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          className="btn btn-primary"
          style={{ borderRadius: 100, padding: '12px 28px', fontSize: 13 }}
        >
          View Projects
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>

        {/* Ghost */}
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="btn btn-ghost"
          style={{ borderRadius: 100, padding: '12px 28px', fontSize: 13 }}
        >
          Get in Touch
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="animate-fade-up delay-800" style={{
        position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
        zIndex: 1,
      }}>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.58rem', color: 'rgba(255,255,255,0.18)',
          letterSpacing: '0.3em',
        }}>
          SCROLL
        </span>
        <div style={{
          width: 1, height: 38,
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)',
          animation: 'float 2.2s ease-in-out infinite',
        }} />
      </div>

    </section>
  )
}