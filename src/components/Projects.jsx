import { useScrollReveal } from './useScrollReveal'
import { useRef, useEffect } from 'react'
import myFinanceImg from '../assets/my-finance-jg.png'
import immersiveImg   from '../assets/immersive-devs.png'
import sneakerImg     from '../assets/online-products.png'
import steticImg      from '../assets/modern-stetic.png'
import petshopImg     from '../assets/petshop-platform.png'

const projects = [
  {
    id: 1,
    title: 'Premium Finance',
    tech: ['React', 'Flask', 'SQLite', 'Chart.js', 'Tailwind'],
    description:
      'A full-stack personal finance dashboard featuring income and expense tracking, interactive charts, date filters, and a premium dark UI with amber accents — built with React, Flask REST API, and Chart.js.',
    image: myFinanceImg,
    link: 'https://my-finance-jg.netlify.app/',
  },
  {
    id: 2,
    title: "Immersive Dev's",
    tech: ['React', 'Vite', 'Tailwind', 'JavaScript'],
    description:
      'An interactive neural brain map of the dev universe — over 35 technologies visualized as animated nodes. Click any language to explore descriptions, connections, and technical details, with matrix effects and glowing bezier pulses.',
    image: immersiveImg,
    link: 'https://immersive-devs.netlify.app/',
  },
  {
    id: 3,
    title: 'Modern System Stetic',
    tech: ['React', 'Tailwind', 'Vite'],
    description:
      'A sleek presentation website for an aesthetic clinic, showcasing services, team, and booking call-to-action. Designed with a modern, elegant visual identity to convert visitors into clients.',
    image: steticImg,
    link: 'https://apresentacao-clinica-estetic.netlify.app/',
  },
  {
    id: 4,
    title: 'On-line Products Preview',
    tech: ['React', 'Tailwind', 'Vite'],
    description:
      'A modern e-commerce presentation page for a sneaker outlet store, featuring product display, WhatsApp conversion flow, and a fully responsive layout built to drive sales for small businesses.',
    image: sneakerImg,
    link: 'https://apresentacao-urban-kick-outlet.netlify.app/',
  },
  {
    id: 5,
    title: "PetShop's Platform",
    tech: ['React', 'Tailwind', 'Vite'],
    description:
      'A warm and professional presentation platform for a pet shop, highlighting services like grooming, veterinary care, and products — designed to build trust and attract pet owners online.',
    image: petshopImg,
    link: 'https://apresentacao-pata-feliz-care.netlify.app/',
  },
]

function ProjectCard({ title, tech, description, image, link }) {
  return (
    <div
      className="glow-border"
      style={{
        background: 'var(--surface)',
        borderRadius: 18,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        width: 'var(--card-w, 280px)',
        flexShrink: 0,
        transition: 'transform 0.3s ease',
        position: 'relative',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)' }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
    >
      {/* Image area */}
      <div style={{
        width: '100%', height: 160,
        background: image ? 'none' : 'linear-gradient(135deg, var(--surface2) 0%, var(--bg3) 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        {image ? (
          <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(ellipse at center, rgba(221,153,0,0.08) 0%, transparent 70%)',
            }} />
            <div style={{
              width: 56, height: 56, borderRadius: '50%',
              border: '1.5px dashed rgba(221,153,0,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(221,153,0,0.4)" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="m3 9 4-4 4 4 4-4 4 4" />
                <circle cx="8.5" cy="14.5" r="2.5" />
              </svg>
            </div>
          </>
        )}
        <div style={{
          position: 'absolute', top: 12, right: 12,
          background: 'rgba(8,10,15,0.8)', backdropFilter: 'blur(10px)',
          border: '1px solid rgba(221,153,0,0.2)', borderRadius: 99,
          padding: '0.2rem 0.6rem',
          fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', color: 'var(--gold)',
          letterSpacing: '0.12em',
        }}>
          PROJECT
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.65rem', flex: 1 }}>
        <h3 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text)' }}>{title}</h3>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
          {tech.map(t => (
            <span key={t} style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem',
              color: 'var(--gold)', border: '1px solid rgba(221,153,0,0.2)',
              borderRadius: 99, padding: '0.15rem 0.6rem',
              background: 'rgba(221,153,0,0.05)', letterSpacing: '0.08em',
            }}>
              {t}
            </span>
          ))}
        </div>

        <p style={{ color: 'var(--muted)', fontSize: '0.82rem', lineHeight: 1.7, flex: 1 }}>
          {description}
        </p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            alignSelf: 'flex-start',
            padding: '0.5rem 1.2rem',
            background: 'transparent',
            border: '1px solid rgba(221,153,0,0.4)',
            color: 'var(--gold)',
            borderRadius: 8,
            fontFamily: "'Syne', sans-serif",
            fontWeight: 600,
            fontSize: '0.78rem',
            letterSpacing: '0.08em',
            textDecoration: 'none',
            transition: 'all 0.25s ease',
            display: 'flex', alignItems: 'center', gap: '0.4rem',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(221,153,0,0.12)'
            e.currentTarget.style.boxShadow = '0 0 20px rgba(221,153,0,0.2)'
            e.currentTarget.style.borderColor = 'rgba(221,153,0,0.7)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.boxShadow = 'none'
            e.currentTarget.style.borderColor = 'rgba(221,153,0,0.4)'
          }}
        >
          View More
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  )
}

// Calcula largura do card e quantos mostrar baseado na tela
function getCardConfig() {
  const w = window.innerWidth
  if (w >= 960)  return { cardW: 280, visible: 3, gap: 24 }
  if (w >= 600)  return { cardW: 260, visible: 2, gap: 20 }
  return             { cardW: 260, visible: 1, gap: 16 }
}

export default function Projects() {
  const { ref, visible } = useScrollReveal()
  const trackRef   = useRef(null)
  const animRef    = useRef(null)
  const pausedRef  = useRef(false)
  const configRef  = useRef(getCardConfig())

  useEffect(() => {
    // Atualiza config em resize
    const onResize = () => { configRef.current = getCardConfig() }
    window.addEventListener('resize', onResize)

    const track = trackRef.current
    if (!track) return

    let pos = 0

    const step = () => {
      if (!pausedRef.current) {
        const { cardW, gap } = configRef.current
        const CARD_STEP = cardW + gap
        pos += 0.5
        if (pos >= CARD_STEP * projects.length) pos = 0
        track.style.transform = `translateX(-${pos}px)`
      }
      animRef.current = requestAnimationFrame(step)
    }

    animRef.current = requestAnimationFrame(step)
    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  const allProjects = [...projects, ...projects, ...projects]

  return (
    <section
      id="projects"
      ref={ref}
      style={{ padding: '6rem 2.5rem', maxWidth: 1100, margin: '0 auto' }}
    >
      <p className={`section-label ${visible ? 'animate-fade-up' : 'opacity-0'}`} style={{ marginBottom: '0.6rem' }}>
        03 — Portfolio
      </p>
      <h2
        className={`gold-text ${visible ? 'animate-fade-up delay-100' : 'opacity-0'}`}
        style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '0.6rem', textAlign: 'center' }}
      >
        Projects
      </h2>
      <p
        className={`${visible ? 'animate-fade-up delay-200' : 'opacity-0'}`}
        style={{ color: 'var(--muted)', textAlign: 'center', marginBottom: '3rem', fontSize: '0.95rem' }}
      >
        A selection of things I've built
      </p>

      {/* Janela responsiva */}
      <div
        style={{
          width: '100%',
          maxWidth: 888,   /* desktop: 3 cards */
          margin: '0 auto',
          overflow: 'hidden',
          position: 'relative',
          borderRadius: 18,
        }}
        onMouseEnter={() => { pausedRef.current = true }}
        onMouseLeave={() => { pausedRef.current = false }}
        onTouchStart={() => { pausedRef.current = true }}
        onTouchEnd={() => { setTimeout(() => { pausedRef.current = false }, 1500) }}
      >
        {/* Fades laterais */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: 48, zIndex: 2,
          background: 'linear-gradient(to right, var(--bg, #080a0f) 10%, transparent)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: 48, zIndex: 2,
          background: 'linear-gradient(to left, var(--bg, #080a0f) 10%, transparent)',
          pointerEvents: 'none',
        }} />

        {/* Track */}
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            gap: '1.5rem',
            width: 'max-content',
            willChange: 'transform',
            paddingBottom: '0.5rem',
          }}
        >
          {allProjects.map((project, i) => (
            <ProjectCard
              key={`${project.id}-${i}`}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  )
}