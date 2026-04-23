import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
  const ring = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
  const raf = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ringEl = ringRef.current

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }

      // Dot follows instantly
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    }

    const onEnterClickable = () => {
      dot.style.transform += ' scale(0)'
      ringEl.style.width = '48px'
      ringEl.style.height = '48px'
      ringEl.style.background = 'rgba(255,255,255,0.08)'
      ringEl.style.borderColor = 'rgba(255,255,255,0.6)'
    }

    const onLeaveClickable = () => {
      ringEl.style.width = '32px'
      ringEl.style.height = '32px'
      ringEl.style.background = 'transparent'
      ringEl.style.borderColor = 'rgba(255,255,255,0.25)'
    }

    // Smooth ring lerp
    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12
      ring.current.y += (pos.current.y - ring.current.y) * 0.12
      ringEl.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`
      raf.current = requestAnimationFrame(animate)
    }

    const addListeners = () => {
      document.querySelectorAll('a, button, [data-hover]').forEach(el => {
        el.addEventListener('mouseenter', onEnterClickable)
        el.addEventListener('mouseleave', onLeaveClickable)
      })
    }

    window.addEventListener('mousemove', onMove)
    raf.current = requestAnimationFrame(animate)

    // Re-attach on DOM changes
    const mutObs = new MutationObserver(addListeners)
    mutObs.observe(document.body, { childList: true, subtree: true })
    addListeners()

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
      mutObs.disconnect()
    }
  }, [])

  return (
    <>
      {/* Dot — sharp white glow */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed', top: 0, left: 0,
          width: 6, height: 6,
          borderRadius: '50%',
          background: '#fff',
          pointerEvents: 'none',
          zIndex: 9999,
          marginLeft: -3, marginTop: -3,
          boxShadow: '0 0 6px 2px rgba(255,255,255,0.9), 0 0 14px 4px rgba(255,255,255,0.4)',
          willChange: 'transform',
          transition: 'transform 0.1s ease',
        }}
      />

      {/* Trailing ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed', top: 0, left: 0,
          width: 32, height: 32,
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.25)',
          background: 'transparent',
          pointerEvents: 'none',
          zIndex: 9998,
          marginLeft: -16, marginTop: -16,
          backdropFilter: 'blur(0px)',
          willChange: 'transform',
          transition: 'width 0.3s ease, height 0.3s ease, background 0.3s ease, border-color 0.3s ease',
        }}
      />
    </>
  )
}