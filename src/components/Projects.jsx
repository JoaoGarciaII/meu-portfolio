import { useScrollReveal } from './useScrollReveal'
import myFinanceImg from '../assets/my-finance.png'

const projects = [
  {
    id: 1,
    title: 'Premium Finance',
    tech: ['React', 'Flask', 'SQLite', 'Chart.js', 'Tailwind'],
    description: 'A full-stack personal finance dashboard featuring income and expense tracking, interactive charts, date filters, and a premium dark UI with amber accents — built with React, Flask REST API, and Chart.js.',
    image: myFinanceImg,
    link: 'https://my-finance-jg.netlify.app/',
  },
  {
    id: 2,
    title: 'Project Two',
    tech: ['Python', 'MySQL', 'Vue'],
    description: 'A brief description of what this project does, the technologies used, and the problem it solves. Edit this in Projects.jsx.',
    image: null,
    link: '#',
  },
  {
    id: 3,
    title: 'Project Three',
    tech: ['JavaScript', 'Tailwind', 'Vite'],
    description: 'A brief description of what this project does, the technologies used, and the problem it solves. Edit this in Projects.jsx.',
    image: null,
    link: '#',
  },
]

function ProjectCard({ title, tech, description, image, link, delay, visible }) {
  return (
    <div
      className={`glow-border ${visible ? 'animate-fade-up' : 'opacity-0'}`}
      style={{
        animationDelay: `${delay}s`,
        background: 'var(--surface)',
        borderRadius: 18,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        flex: '1 1 280px',
        transition: 'transform 0.3s ease',
        position: 'relative',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)' }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
    >
      {/* Image area */}
      <div style={{
        width: '100%', height: 180,
        background: image ? 'none' : 'linear-gradient(135deg, var(--surface2) 0%, var(--bg3) 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        {image ? (
          <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <>
            {/* Decorative placeholder */}
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
        {/* Top badge */}
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
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
        <h3 style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text)' }}>{title}</h3>

        {/* Tech tags */}
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

        <p style={{ color: 'var(--muted)', fontSize: '0.87rem', lineHeight: 1.7, flex: 1 }}>
          {description}
        </p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            alignSelf: 'flex-start',
            padding: '0.55rem 1.4rem',
            background: 'transparent',
            border: '1px solid rgba(221,153,0,0.4)',
            color: 'var(--gold)',
            borderRadius: 8,
            fontFamily: "'Syne', sans-serif",
            fontWeight: 600,
            fontSize: '0.8rem',
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
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </div>
  )
}

export default function Projects() {
  const { ref, visible } = useScrollReveal()

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

      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            {...project}
            visible={visible}
            delay={0.2 + i * 0.12}
          />
        ))}
      </div>
    </section>
  )
}