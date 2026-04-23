import { useScrollReveal } from './useScrollReveal'
import profilePhoto from '../assets/profile.jpeg'

export default function About() {
  const { ref, visible } = useScrollReveal()

  return (
    <section
      id="about"
      ref={ref}
      style={{ padding: '6rem 2.5rem', maxWidth: 1100, margin: '0 auto', position: 'relative' }}
    >
      <p className={`section-label ${visible ? 'animate-fade-up' : 'opacity-0'}`}
        style={{ marginBottom: '0.6rem' }}>
        01 — About Me
      </p>
      <h2
        className={visible ? 'animate-fade-up delay-100' : 'opacity-0'}
        style={{
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800,
          marginBottom: '3rem', color: '#fff',
          textShadow: '0 0 60px rgba(255,255,255,0.1)',
        }}
      >
        Who I Am
      </h2>

      <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>

        {/* Text block */}
        <div
          className={`glass ${visible ? 'animate-fade-left delay-200' : 'opacity-0'}`}
          style={{ flex: '1 1 320px', padding: '2.5rem', borderRadius: 20 }}
        >
          <div className="glass-shimmer" />

          {/* Top shine accent */}
          <div style={{
            position: 'absolute', top: 0, left: 0, width: 100, height: 100,
            background: 'radial-gradient(circle at top left, rgba(255,255,255,0.06), transparent 70%)',
            borderRadius: '20px 0 0 0', pointerEvents: 'none',
          }} />

          <h3 className="glass-inner" style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem',
            color: 'rgba(255,255,255,0.3)', letterSpacing: '0.28em',
            textTransform: 'uppercase', marginBottom: '1.2rem',
          }}>
            About
          </h3>

          <p className="glass-inner" style={{
            color: 'rgba(255,255,255,0.45)', lineHeight: 1.85, fontSize: '0.96rem',
            borderLeft: '2px solid rgba(255,255,255,0.12)', paddingLeft: '1.2rem',
          }}>
            My name is{' '}
            <span style={{ color: '#fff', fontWeight: 600 }}>João Pedro Garcia</span>
            {' '}— a passionate and dedicated Full Stack developer, currently studying Information Security and Analysis at{' '}
            <span style={{ color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>FMU</span>.
            {' '}Beyond my degree, I have completed several specialization courses in Front-End development and am always looking to expand my skills. I believe that great software arises from the intersection of clean code, security awareness, and an unyielding curiosity to keep learning. Whether building robust back-ends or creating refined front-ends, I am always committed to delivering increasingly better solutions.
          </p>

          {/* Tags */}
          <div className="glass-inner" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.8rem' }}>
            {['FMU Student', 'Full Stack', 'InfoSec', 'Self-taught'].map(tag => (
              <span key={tag} style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.62rem', letterSpacing: '0.1em',
                color: 'rgba(255,255,255,0.55)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 99, padding: '0.25rem 0.75rem',
                background: 'rgba(255,255,255,0.05)',
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Photo block */}
        <div
          className={`glass animate-float ${visible ? 'animate-fade-right delay-400' : 'opacity-0'}`}
          style={{
            width: 280, height: 340, flexShrink: 0,
            borderRadius: 20, overflow: 'hidden',
            padding: 0,
            boxShadow: '0 2px 0 rgba(255,255,255,0.15) inset, 0 0 60px rgba(255,255,255,0.04), 0 32px 64px rgba(0,0,0,0.6)',
          }}
        >
          <div style={{
            position: 'absolute', top: 0, right: 0, width: 80, height: 80,
            background: 'radial-gradient(circle at top right, rgba(255,255,255,0.08), transparent 70%)',
            pointerEvents: 'none', zIndex: 2,
          }} />
          <div style={{
            position: 'absolute', bottom: 0, left: 0, width: 80, height: 80,
            background: 'radial-gradient(circle at bottom left, rgba(255,255,255,0.05), transparent 70%)',
            pointerEvents: 'none', zIndex: 2,
          }} />
          <img
            src={profilePhoto}
            alt="João Pedro Garcia"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center top',
              display: 'block', position: 'relative', zIndex: 1,
            }}
          />
        </div>

      </div>
    </section>
  )
}