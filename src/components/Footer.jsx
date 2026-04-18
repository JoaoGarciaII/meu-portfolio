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
      {/* Top glow line */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '40%', height: 1,
        background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
        opacity: 0.3,
      }} />

      {/* Logo mark */}
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.7rem', letterSpacing: '0.3em',
        color: 'var(--gold)', textTransform: 'uppercase',
        marginBottom: '0.4rem',
        opacity: 0.7,
      }}>
        ✦ JG Dev ✦
      </div>

      <p style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>
        &copy; {year} Developed by{' '}
        <span style={{ color: 'var(--gold)', fontWeight: 600 }}>Joao Garcia</span>
      </p>
      <p style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.7rem', color: 'rgba(107,122,148,0.6)',
        letterSpacing: '0.05em',
      }}>
        joaohogarcia@hotmail.com
      </p>
    </footer>
  )
}