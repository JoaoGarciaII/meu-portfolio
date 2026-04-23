import { useState } from 'react'
import { useScrollReveal } from './useScrollReveal'

const CATEGORIES = ['Todos', 'Frontend', 'Backend', 'Mobile', 'Database', 'DevOps', 'Tooling', 'Data']

const skills = [
  { name: 'HTML', level: 89, icon: '🧱', color: '#E34F26', category: 'Frontend', description: 'Estruturação semântica de páginas web com HTML5. Domínio de acessibilidade, formulários, SEO on-page e integração com frameworks modernos.', related: ['CSS', 'JavaScript', 'React'] },
  { name: 'CSS', level: 78, icon: '🎨', color: '#1572B6', category: 'Frontend', description: 'Estilização avançada com CSS3: Flexbox, Grid, animações, variáveis, pseudo-elementos e design responsivo mobile-first.', related: ['HTML', 'Tailwind', 'SASS'] },
  { name: 'JavaScript', level: 66, icon: '⚡', color: '#F7DF1E', category: 'Frontend', description: 'Linguagem base da web. ES6+, assincronismo (async/await), manipulação do DOM, fetch API e integração com backends REST.', related: ['React', 'Node.js', 'Vue'] },
  { name: 'React', level: 72, icon: '⚛️', color: '#61DAFB', category: 'Frontend', description: 'Biblioteca para construção de SPAs. Uso de hooks, context API, roteamento com React Router e deploy via Netlify.', related: ['JavaScript', 'Vite', 'React Native'] },
  { name: 'Vue', level: 76, icon: '💚', color: '#42B883', category: 'Frontend', description: 'Framework progressivo para interfaces reativas. Composition API, Vue Router, reatividade declarativa e ecossistema Vite.', related: ['JavaScript', 'Vite', 'Tailwind'] },
  { name: 'Tailwind', level: 75, icon: '🌊', color: '#38BDF8', category: 'Frontend', description: 'Framework CSS utility-first para estilização rápida e consistente. Uso com Vite, React e Vue para design systems.', related: ['CSS', 'React', 'Vue'] },
  { name: 'SASS', level: 35, icon: '💅', color: '#CC6699', category: 'Frontend', description: 'Pré-processador CSS com variáveis, mixins, aninhamento e funções. Organização de estilos em projetos de média e grande escala.', related: ['CSS', 'Tailwind'] },
  { name: 'Python', level: 54, icon: '🐍', color: '#3776AB', category: 'Backend', description: 'Linguagem versátil para backends, automação e scripts. Uso com Flask para APIs REST e deploy no Render.', related: ['Node.js', 'Docker', 'MySQL'] },
  { name: 'Node.js', level: 67, icon: '🟢', color: '#68A063', category: 'Backend', description: 'Runtime JavaScript server-side para APIs e serviços. Express.js, autenticação JWT e integração com bancos SQL e NoSQL.', related: ['JavaScript', 'MongoDB', 'PostgreSQL'] },
  { name: 'Go', level: 23, icon: '🐹', color: '#00ADD8', category: 'Backend', description: 'Linguagem compilada de alta performance para microsserviços e CLIs. Exploração inicial de concorrência com goroutines.', related: ['Docker', 'Linux', 'AWS'] },
  { name: 'React Native', level: 43, icon: '📱', color: '#61DAFB', category: 'Mobile', description: 'Desenvolvimento mobile cross-platform com Expo. Navegação, câmera, notificações push e geração de APK via EAS Build.', related: ['React', 'JavaScript', 'Flutter'] },
  { name: 'Flutter', level: 56, icon: '🦋', color: '#54C5F8', category: 'Mobile', description: 'Framework Dart da Google para apps mobile, web e desktop a partir de um único código. Widgets customizados e animações fluidas.', related: ['React Native'] },
  { name: 'MySQL', level: 74, icon: '🐬', color: '#4479A1', category: 'Database', description: 'Banco relacional amplamente usado. Modelagem de tabelas, joins, índices, procedures e integração com Python e Node.', related: ['PostgreSQL', 'Node.js', 'Python'] },
  { name: 'PostgreSQL', level: 55, icon: '🐘', color: '#336791', category: 'Database', description: 'Banco relacional robusto com suporte a JSON, full-text search e extensões avançadas. Uso em APIs Node e Python.', related: ['MySQL', 'Node.js', 'Docker'] },
  { name: 'MongoDB', level: 67, icon: '🍃', color: '#4DB33D', category: 'Database', description: 'Banco NoSQL orientado a documentos. Modelagem flexível com coleções, agregações e integração via Mongoose.', related: ['Node.js', 'PostgreSQL'] },
  { name: 'Git', level: 89, icon: '🔀', color: '#F05032', category: 'DevOps', description: 'Controle de versão com domínio de branches, merges, rebase e resolução de conflitos em projetos colaborativos.', related: ['GitHub', 'Docker'] },
  { name: 'GitHub', level: 92, icon: '🐙', color: '#ffffff', category: 'DevOps', description: 'Plataforma central de versionamento e CI/CD. Deploy automático via GitHub Actions, Pages, Netlify e Render.', related: ['Git', 'Vite', 'Docker'] },
  { name: 'Docker', level: 48, icon: '🐳', color: '#2496ED', category: 'DevOps', description: 'Conteinerização de aplicações para ambientes reproduzíveis. Dockerfiles, docker-compose e deploy em VPS e AWS.', related: ['Linux', 'AWS', 'Node.js'] },
  { name: 'Linux', level: 90, icon: '🐧', color: '#FCC624', category: 'DevOps', description: 'Administração de sistemas Linux para servidor e desenvolvimento. Bash scripting, SSH, permissões e gerenciamento de pacotes.', related: ['Docker', 'AWS', 'GitHub'] },
  { name: 'Windows', level: 90, icon: '🪟', color: '#0078D4', category: 'DevOps', description: 'Ambiente de desenvolvimento completo no Windows com WSL2, PowerShell, configuração de ambientes e troubleshooting avançado.', related: ['Linux', 'Git'] },
  { name: 'AWS', level: 35, icon: '☁️', color: '#FF9900', category: 'DevOps', description: 'Exploração de serviços cloud: EC2, S3, Lambda e configuração de ambientes de deploy escaláveis.', related: ['Docker', 'Linux', 'Node.js'] },
  { name: 'Vite', level: 56, icon: '⚡', color: '#646CFF', category: 'Tooling', description: 'Build tool ultrarrápido para projetos front-end modernos. Configuração de React, Vue e TypeScript com HMR instantâneo.', related: ['React', 'Vue', 'JavaScript'] },
  { name: 'Power BI', level: 34, icon: '📊', color: '#F2C811', category: 'Data', description: 'Criação de dashboards e relatórios interativos a partir de fontes SQL e Excel. Uso em projetos de consultoria empresarial.', related: ['MySQL', 'PostgreSQL'] },
]

function Popup({ skill, onClose }) {
  if (!skill) return null
  return (
    <>
      <div onClick={onClose} style={{
        position: 'fixed', inset: 0, zIndex: 999,
        background: 'rgba(0,0,0,0.4)',
        backdropFilter: 'blur(4px)',
        animation: 'fadeIn 0.2s ease',
      }} />
      <div style={{
        position: 'fixed', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1000,
        width: 'min(380px, 90vw)',
        background: 'rgba(12,14,22,0.92)',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: 20, padding: '2rem',
        boxShadow: `0 0 0 1px rgba(255,255,255,0.04), 0 32px 64px rgba(0,0,0,0.7), 0 0 80px ${skill.color}15`,
        backdropFilter: 'blur(28px) saturate(180%)',
        animation: 'popupIn 0.28s cubic-bezier(0.34,1.56,0.64,1)',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${skill.color}66, transparent)` }} />
        <div style={{ position: 'absolute', top: 0, left: 0, width: 140, height: 140, background: `radial-gradient(circle at top left, ${skill.color}18, transparent 70%)`, pointerEvents: 'none' }} />

        <button onClick={onClose} style={{
          position: 'absolute', top: '1rem', right: '1rem',
          width: 28, height: 28, borderRadius: 8,
          background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
          color: 'rgba(255,255,255,0.35)', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '0.85rem', transition: 'all 0.2s',
        }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#fff' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'rgba(255,255,255,0.35)' }}
        >✕</button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', marginBottom: '1.4rem' }}>
          <div style={{
            width: 52, height: 52, borderRadius: 14, flexShrink: 0,
            background: `${skill.color}12`, border: `1px solid ${skill.color}30`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.6rem',
            filter: `drop-shadow(0 0 8px ${skill.color}66)`,
          }}>
            {skill.icon}
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
              <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem' }}>{skill.name}</h3>
              <span style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: '0.55rem',
                letterSpacing: '0.12em', color: skill.color,
                background: `${skill.color}15`, border: `1px solid ${skill.color}30`,
                borderRadius: 99, padding: '0.15rem 0.5rem', textTransform: 'uppercase',
              }}>{skill.category}</span>
            </div>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.15em' }}>
              PROFICIENCY — {skill.level}%
            </p>
          </div>
        </div>

        <div style={{ height: 4, borderRadius: 99, background: 'rgba(255,255,255,0.06)', marginBottom: '1.4rem', overflow: 'hidden' }}>
          <div style={{
            height: '100%', borderRadius: 99, width: `${skill.level}%`,
            background: `linear-gradient(90deg, ${skill.color}77, ${skill.color})`,
            boxShadow: `0 0 10px ${skill.color}66`,
            animation: 'barGrow 0.7s 0.15s cubic-bezier(0.4,0,0.2,1) both',
          }} />
        </div>

        <p style={{
          color: 'rgba(255,255,255,0.48)', fontSize: '0.88rem', lineHeight: 1.8,
          borderLeft: `2px solid ${skill.color}33`, paddingLeft: '1rem', marginBottom: '1.4rem',
        }}>
          {skill.description}
        </p>

        <div>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.58rem', letterSpacing: '0.22em', color: 'rgba(255,255,255,0.18)', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
            Conecta com
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {skill.related.map(r => (
              <span key={r} style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem',
                color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 99, padding: '0.22rem 0.65rem', background: 'rgba(255,255,255,0.04)',
              }}>{r}</span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes popupIn {
          from { opacity: 0; transform: translate(-50%, -46%) scale(0.93); }
          to   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; } to { opacity: 1; }
        }
        @keyframes barGrow {
          from { width: 0%; opacity: 0; }
        }
      `}</style>
    </>
  )
}

export default function Skills() {
  const { ref, visible } = useScrollReveal()
  const [selected, setSelected] = useState(null)
  const [filter, setFilter] = useState('Todos')

  const filtered = filter === 'Todos' ? skills : skills.filter(s => s.category === filter)

  return (
    <section
      id="skills"
      ref={ref}
      style={{ padding: '6rem 2.5rem', maxWidth: 1100, margin: '0 auto' }}
    >
      <p className={`section-label ${visible ? 'animate-fade-up' : 'opacity-0'}`} style={{ marginBottom: '0.6rem' }}>
        02 — Skills
      </p>
      <h2
        className={visible ? 'animate-fade-up delay-100' : 'opacity-0'}
        style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '0.5rem', color: '#fff', textShadow: '0 0 60px rgba(255,255,255,0.08)' }}
      >
        Tech Stack
      </h2>
      <p className={visible ? 'animate-fade-up delay-150' : 'opacity-0'}
        style={{ color: 'rgba(255,255,255,0.25)', marginBottom: '2rem', fontSize: '0.88rem' }}>
        Clique em qualquer skill para saber mais
      </p>

      {/* Category filter */}
      <div className={visible ? 'animate-fade-up delay-200' : 'opacity-0'}
        style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '2.5rem' }}>
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.6rem', letterSpacing: '0.14em',
              padding: '0.35rem 0.9rem', borderRadius: 99, cursor: 'pointer',
              border: `1px solid ${filter === cat ? 'rgba(255,255,255,0.28)' : 'rgba(255,255,255,0.08)'}`,
              background: filter === cat ? 'rgba(255,255,255,0.09)' : 'transparent',
              color: filter === cat ? '#fff' : 'rgba(255,255,255,0.28)',
              transition: 'all 0.2s ease', textTransform: 'uppercase',
            }}
            onMouseEnter={e => { if (filter !== cat) { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)' } }}
            onMouseLeave={e => { if (filter !== cat) { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.28)' } }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid de ícones */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
        {filtered.map((skill, i) => (
          <div
            key={skill.name}
            onClick={() => setSelected(skill)}
            className={visible ? 'animate-fade-up' : 'opacity-0'}
            style={{
              animationDelay: `${0.2 + (i % 8) * 0.04}s`,
              cursor: 'pointer',
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem 0.75rem',
              borderRadius: 16,
              width: 88,
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
              transition: 'all 0.25s ease',
              position: 'relative', overflow: 'hidden',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = `${skill.color}12`
              e.currentTarget.style.borderColor = `${skill.color}44`
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = `0 8px 32px ${skill.color}22, 0 0 0 1px ${skill.color}22`
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            {/* Glow atrás do ícone */}
            <div style={{
              position: 'absolute', top: 18, left: '50%',
              transform: 'translateX(-50%)',
              width: 36, height: 36, borderRadius: '50%',
              background: `${skill.color}22`,
              filter: 'blur(10px)', pointerEvents: 'none',
            }} />

            {/* Ícone */}
            <span style={{
              fontSize: '1.6rem',
              filter: `drop-shadow(0 0 6px ${skill.color}88)`,
              position: 'relative', zIndex: 1,
            }}>
              {skill.icon}
            </span>

            {/* Nome */}
            <p style={{
              color: 'rgba(255,255,255,0.7)', fontSize: '0.68rem',
              fontWeight: 600, textAlign: 'center',
              lineHeight: 1.2, letterSpacing: '0.02em',
            }}>
              {skill.name}
            </p>

            {/* Barra */}
            <div style={{ width: '100%', height: 3, borderRadius: 99, background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
              <div style={{
                height: '100%', borderRadius: 99,
                width: visible ? `${skill.level}%` : '0%',
                background: `linear-gradient(90deg, ${skill.color}66, ${skill.color})`,
                boxShadow: `0 0 6px ${skill.color}55`,
                transition: `width 0.9s ${0.3 + i * 0.03}s cubic-bezier(0.4,0,0.2,1)`,
              }} />
            </div>

            {/* % */}
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.55rem', color: skill.color,
              letterSpacing: '0.08em', opacity: 0.8,
            }}>
              {skill.level}%
            </span>
          </div>
        ))}
      </div>

      <Popup skill={selected} onClose={() => setSelected(null)} />
    </section>
  )
}