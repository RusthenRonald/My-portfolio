import Header from './components/layout/Header'
import Hero from './features/hero/Hero'
import About from './features/about/About'
import Skills from './features/skills/Skills'
import Experience from './features/experience/Experience'
function App() {

  return (
    <>
    <Header />
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
    </main>
    </>
  )
}

export default App
