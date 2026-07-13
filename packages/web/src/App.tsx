import Header from './components/layout/Header'
import Hero from './features/hero/Hero'
import About from './features/about/About'
import Skills from './features/skills/Skills'
function App() {

  return (
    <>
    <Header />
    <main>
      <Hero />
      <About />
      <Skills />
    </main>
    </>
  )
}

export default App
