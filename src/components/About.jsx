import { useScrollReveal } from './useScrollReveal'
import profilePhoto from '../assets/profile.jpeg'

export default function About() {
  const { ref, visible } = useScrollReveal()

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: '6rem 2.5rem',
        maxWidth: 1100,
        margin: '0 auto',
        position: 'relative',
      }}
    >
      {/* Section label */}
      <p className={`section-label ${visible ? 'animate-fade-up' : 'opacity-0'}`} style={{ marginBottom: '0.6rem' }}>
        01 — About Me
      </p>

      <h2
        className={`gold-text ${visible ? 'animate-fade-up delay-100' : 'opacity-0'}`}
        style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '3rem' }}
      >
        Who I Am
      </h2>

      <div style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
        {/* Text block */}
        <div
          className={`glow-border ${visible ? 'animate-fade-left delay-200' : 'opacity-0'}`}
          style={{
            flex: '1 1 320px',
            background: 'var(--surface)',
            borderRadius: 16,
            padding: '2.5rem',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative corner accent */}
          <div style={{
            position: 'absolute', top: 0, left: 0,
            width: 80, height: 80,
            background: 'radial-gradient(circle at top left, rgba(221,153,0,0.12), transparent 70%)',
            borderRadius: '16px 0 0 0',
          }} />

          <h3 style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem',
            color: 'var(--gold)', letterSpacing: '0.25em', textTransform: 'uppercase',
            marginBottom: '1.2rem',
          }}>
            About
          </h3>

          <p style={{
            color: 'var(--muted)', lineHeight: 1.85, fontSize: '0.97rem',
            borderLeft: '2px solid rgba(221,153,0,0.3)', paddingLeft: '1.2rem',
          }}>
            My name is <span style={{ color: 'var(--gold)', fontWeight: 600 }}>João Pedro Garcia</span> — a passionate and dedicated Full Stack developer, currently studying Information Security and Analysis <span style={{ color: 'var(--text)', fontWeight: 500 }}>FMU</span>. Beyond my degree,
            I have completed several specialization courses in Front-End development and am always looking to expand my skills. I believe that great software arises from the intersection of clean code, security awareness, and an unyielding curiosity to keep learning. Whether building robust back-ends or creating refined front-ends, I am always committed to delivering increasingly better solutions.
          </p>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.8rem' }}>
            {['FMU Student', 'Full Stack', 'InfoSec', 'Self-taught'].map(tag => (
              <span key={tag} style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.65rem', letterSpacing: '0.1em',
                color: 'var(--gold)', border: '1px solid rgba(221,153,0,0.25)',
                borderRadius: 99, padding: '0.25rem 0.75rem',
                background: 'rgba(221,153,0,0.06)',
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Photo block */}
        <div
          className={`animate-float glow-border ${visible ? 'animate-fade-right delay-400' : 'opacity-0'}`}
          style={{
            width: 280, height: 340, flexShrink: 0,
            background: 'var(--surface)',
            borderRadius: 16,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column', gap: '0.6rem',
            position: 'relative', overflow: 'hidden',
            boxShadow: '0 0 50px rgba(221,153,0,0.1)',
          }}
        >
          {/* Corner accents */}
          <div style={{ position:'absolute', top:0, right:0, width:60, height:60,
            background:'radial-gradient(circle at top right, rgba(221,153,0,0.15), transparent 70%)' }} />
          <div style={{ position:'absolute', bottom:0, left:0, width:60, height:60,
            background:'radial-gradient(circle at bottom left, rgba(221,153,0,0.1), transparent 70%)' }} />

          {/* Photo placeholder — replace with <img src={yourPhoto} ... /> */}
          <img
             src={profilePhoto}
              alt="João Pedro Garcia"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                borderRadius: 12,
                display: 'block',
                }}
              />
        </div>
      </div>
    </section>
  )
}