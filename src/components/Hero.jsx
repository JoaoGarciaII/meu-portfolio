import { useState, useEffect } from 'react'

const roles = ['Full Stack Developer', 'Information Security', 'Problem Solver', 'Creative Builder']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

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
        setRoleIndex((i) => (i + 1) % roles.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  return (
    <section
      style={{
        minHeight: '88vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '4rem 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background radial glow */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(221,153,0,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Decorative rotating ring */}
      <div className="animate-float" style={{
        position: 'absolute', width: 500, height: 500, borderRadius: '50%',
        border: '1px solid rgba(221,153,0,0.06)',
        top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        pointerEvents: 'none', zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', width: 340, height: 340, borderRadius: '50%',
        border: '1px dashed rgba(221,153,0,0.09)',
        top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        animation: 'rotateSlow 20s linear infinite',
        pointerEvents: 'none', zIndex: 0,
      }} />

      {/* Label */}
      <p className="animate-fade-up section-label" style={{ marginBottom: '1.2rem', zIndex: 1 }}>
        ✦ Welcome to my portfolio ✦
      </p>

      {/* Main name */}
      <h1
        className="animate-fade-up delay-200 glow-text shimmer-text"
        style={{
          fontSize: 'clamp(3rem, 8vw, 7rem)',
          fontWeight: 800,
          letterSpacing: '-0.02em',
          lineHeight: 1.05,
          zIndex: 1,
          marginBottom: '1.2rem',
        }}
      >
        Joao Garcia
      </h1>

      {/* Typewriter role */}
      <div
        className="animate-fade-up delay-400"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 'clamp(0.9rem, 2.5vw, 1.3rem)',
          color: 'var(--muted)',
          zIndex: 1,
          minHeight: '2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.3rem',
          marginBottom: '2.5rem',
        }}
      >
        <span style={{ color: 'var(--gold)' }}>&gt;</span>
        <span style={{ color: 'var(--text)' }}>{displayed}</span>
        <span style={{
          display: 'inline-block', width: 2, height: '1.2em',
          background: 'var(--gold)', marginLeft: 2,
          animation: 'cursorBlink 1s step-end infinite',
        }} />
      </div>

      {/* CTA buttons */}
      <div className="animate-fade-up delay-600" style={{ display: 'flex', gap: '1rem', zIndex: 1 }}>
        <button
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          style={{
            background: 'var(--gold)', color: '#080A0F',
            border: 'none', padding: '0.75rem 2rem', borderRadius: '8px',
            fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '0.9rem',
            letterSpacing: '0.06em', cursor: 'pointer',
            boxShadow: '0 0 30px rgba(221,153,0,0.45)',
            transition: 'all 0.25s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'var(--gold-light)'
            e.currentTarget.style.boxShadow = '0 0 50px rgba(221,153,0,0.7)'
            e.currentTarget.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'var(--gold)'
            e.currentTarget.style.boxShadow = '0 0 30px rgba(221,153,0,0.45)'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          View Projects
        </button>
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          style={{
            background: 'transparent', color: 'var(--gold)',
            border: '1px solid rgba(221,153,0,0.5)', padding: '0.75rem 2rem', borderRadius: '8px',
            fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: '0.9rem',
            letterSpacing: '0.06em', cursor: 'pointer', transition: 'all 0.25s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(221,153,0,0.1)'
            e.currentTarget.style.boxShadow = '0 0 24px rgba(221,153,0,0.2)'
            e.currentTarget.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.boxShadow = 'none'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          Get in Touch
        </button>
      </div>

      {/* Scroll indicator */}
      <div
        className="animate-fade-up delay-800"
        style={{
          position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
          zIndex: 1,
        }}
      >
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', color: 'var(--muted)', letterSpacing: '0.2em' }}>
          SCROLL
        </span>
        <div style={{
          width: 1, height: 40, background: 'linear-gradient(to bottom, var(--gold), transparent)',
          animation: 'float 2s ease-in-out infinite',
        }} />
      </div>
    </section>
  )
}