export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      padding: '3rem 2.5rem 2.5rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.6rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Top shimmer line */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '40%', height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
      }} />

      {/* Ambient glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 80% at 50% 100%, rgba(255,255,255,0.02), transparent)',
      }} />

      {/* Logo mark */}
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.68rem', letterSpacing: '0.3em',
        color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase',
        marginBottom: '0.4rem',
      }}>
        ✦ JG Dev ✦
      </div>

      <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.85rem' }}>
        &copy; {year} Developed by{' '}
        <span style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>Joao Garcia</span>
      </p>

      <p style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.68rem', color: 'rgba(255,255,255,0.1)',
        letterSpacing: '0.05em',
      }}>
        joaohogarcia@hotmail.com
      </p>
    </footer>
  )
}