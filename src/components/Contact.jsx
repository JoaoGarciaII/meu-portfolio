import { useScrollReveal } from './useScrollReveal'

const socials = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/joaophereny/',
    color: '#0A66C2',
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/JoaoGarciaII',
    color: '#ffffff',
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/+551981660341',
    color: '#25D366',
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
      </svg>
    ),
  },
]

export default function Contact() {
  const { ref, visible } = useScrollReveal()

  return (
    <section
      id="contact"
      ref={ref}
      style={{ padding: '6rem 2.5rem', maxWidth: 1100, margin: '0 auto' }}
    >
      <p className={`section-label ${visible ? 'animate-fade-up' : 'opacity-0'}`}
        style={{ marginBottom: '0.6rem' }}>
        04 — Get In Touch
      </p>
      <h2
        className={visible ? 'animate-fade-up delay-100' : 'opacity-0'}
        style={{
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800,
          marginBottom: '0.5rem', textAlign: 'center', color: '#fff',
          textShadow: '0 0 60px rgba(255,255,255,0.1)',
        }}
      >
        Social Media
      </h2>
      <p className={visible ? 'animate-fade-up delay-200' : 'opacity-0'}
        style={{ color: 'rgba(255,255,255,0.28)', textAlign: 'center', marginBottom: '3rem', fontSize: '0.95rem' }}>
        Let's build something together
      </p>

      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>

        {/* Left: Contact info */}
        <div
          className={`glass ${visible ? 'animate-fade-left delay-300' : 'opacity-0'}`}
          style={{ flex: '1 1 260px', borderRadius: 20, padding: '2rem' }}
        >
          <div className="glass-shimmer" />

          <div className="glass-inner" style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>

            {/* Ambient accent */}
            <div style={{
              position: 'absolute', top: 0, left: 0, width: 100, height: 100,
              background: 'radial-gradient(circle at top left, rgba(255,255,255,0.05), transparent 70%)',
              pointerEvents: 'none',
            }} />

            {/* Email */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <div>
                <p style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem',
                  color: 'rgba(255,255,255,0.25)', letterSpacing: '0.22em',
                  textTransform: 'uppercase', marginBottom: '0.3rem',
                }}>Email</p>
                <a href="mailto:joaohogarcia@hotmail.com"
                  style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                >
                  joaohogarcia@hotmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <p style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem',
                  color: 'rgba(255,255,255,0.25)', letterSpacing: '0.22em',
                  textTransform: 'uppercase', marginBottom: '0.3rem',
                }}>Location</p>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.88rem' }}>São Paulo, Brazil</p>
              </div>
            </div>

          </div>
        </div>

        {/* Right: Social icons */}
        <div
          className={`glass ${visible ? 'animate-fade-right delay-300' : 'opacity-0'}`}
          style={{
            flex: '1 1 260px', borderRadius: 20, padding: '2rem',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '1.2rem', flexWrap: 'wrap',
          }}
        >
          <div className="glass-shimmer" />
          <div style={{
            position: 'absolute', bottom: 0, right: 0, width: 100, height: 100,
            background: 'radial-gradient(circle at bottom right, rgba(255,255,255,0.04), transparent 70%)',
            pointerEvents: 'none',
          }} />

          {socials.map(s => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              data-hover
              style={{
                width: 64, height: 64, borderRadius: 16, flexShrink: 0,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'rgba(255,255,255,0.35)',
                textDecoration: 'none',
                transition: 'all 0.25s ease',
                position: 'relative', zIndex: 2,
                boxShadow: '0 2px 0 rgba(255,255,255,0.08) inset',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = s.color
                e.currentTarget.style.borderColor = s.color + '55'
                e.currentTarget.style.background = s.color + '12'
                e.currentTarget.style.boxShadow = `0 2px 0 rgba(255,255,255,0.1) inset, 0 0 24px ${s.color}33`
                e.currentTarget.style.transform = 'translateY(-5px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.35)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                e.currentTarget.style.boxShadow = '0 2px 0 rgba(255,255,255,0.08) inset'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}