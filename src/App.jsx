import Particles from './components/Particles'
import Header    from './components/Header'
import Hero      from './components/Hero'
import About     from './components/About'
import Skills    from './components/Skills'
import Projects  from './components/Projects'
import Contact   from './components/Contact'
import Footer    from './components/Footer'
import Cursor    from './components/Cursor'

function Divider() {
  return <div className="gold-divider" style={{ margin: '0 2.5rem' }} />
}

export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#000',
      position: 'relative',
    }}>
      {/* Grain overlay */}
      <div className="grain" aria-hidden />

      {/* Ambient orbs */}
      <div aria-hidden style={{ pointerEvents: 'none' }}>
        <div style={{
          position: 'fixed', top: '8%', left: '12%', zIndex: 0,
          width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.018) 0%, transparent 65%)',
          filter: 'blur(80px)',
          animation: 'orb 20s ease-in-out infinite',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'fixed', top: '55%', right: '8%', zIndex: 0,
          width: 500, height: 500, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.014) 0%, transparent 65%)',
          filter: 'blur(80px)',
          animation: 'orb 26s ease-in-out infinite reverse',
          pointerEvents: 'none',
        }} />
      </div>

      {/* Custom cursor */}
      <Cursor />

      <Particles />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Header />
        <main>
          <Hero />
          <Divider />
          <About />
          <Divider />
          <Skills />
          <Divider />
          <Projects />
          <Divider />
          <Contact />
        </main>
        <Divider />
        <Footer />
      </div>
    </div>
  )
}