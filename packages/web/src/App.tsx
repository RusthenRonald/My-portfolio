import Header from './components/layout/Header'
import Hero from './features/hero/Hero'
import About from './features/about/About'
import Skills from './features/skills/Skills'
import Experience from './features/experience/Experience'
import Projects from './features/projects/Projects'
import Certificates from './features/certificates/Certificates'
import Footer from './components/layout/Footer'
import CV from './features/hero/CV'
import Contact from './features/contact/Contact'
function App() {

  return (
    <>
    <Header />
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certificates />
      <CV />
      <Contact />
    </main>
    <Footer />
    </>
  )
}

export default App
