import Particles from './components/Particles'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function Divider() {
  return <div className="gold-divider" style={{ margin: '0 2.5rem' }} />
}

export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: `
        radial-gradient(ellipse 80% 60% at 10% 15%, rgba(221,153,0,0.06) 0%, transparent 55%),
        radial-gradient(ellipse 60% 50% at 90% 85%, rgba(221,153,0,0.04) 0%, transparent 55%),
        linear-gradient(135deg, #080A0F 0%, #0D1017 50%, #080A0F 100%)
      `,
      backgroundAttachment: 'fixed',
      position: 'relative',
    }}>
      {/* Grid texture overlay */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(221,153,0,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(221,153,0,0.025) 1px, transparent 1px)
        `,
        backgroundSize: '70px 70px',
      }} />

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