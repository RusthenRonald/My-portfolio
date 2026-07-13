import Header from './components/layout/Header'
import Hero from './features/hero/Hero'
import About from './features/about/About'
function App() {

  return (
    <>
    <Header />
    <main>
      <Hero />
      <About />
      {/* Main content goes here */}
    </main>
    </>
  )
}

export default App
