const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  size: Math.random() * 2.5 + 0.5,
  left: Math.random() * 100,
  duration: Math.random() * 16 + 12,
  delay: Math.random() * 14,
  blur: i % 3 === 0,
  opacity: Math.random() * 0.4 + 0.15,
}))

export default function Particles() {
  return (
    <div style={{
      position: 'fixed', inset: 0,
      overflow: 'hidden', pointerEvents: 'none', zIndex: 0,
    }}>
      {PARTICLES.map(p => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            bottom: '-10px',
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: p.blur
              ? `rgba(255,255,255,${p.opacity * 0.5})`
              : `rgba(255,255,255,${p.opacity})`,
            opacity: 0,
            filter: p.blur ? 'blur(1.5px)' : 'none',
            boxShadow: p.blur ? 'none' : `0 0 ${p.size * 3}px rgba(255,255,255,0.4)`,
            animation: `particleRise ${p.duration}s ${p.delay}s linear infinite`,
          }}
        />
      ))}
    </div>
  )
}