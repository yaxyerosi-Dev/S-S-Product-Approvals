import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Process } from './components/Process'
import { Services } from './components/Services'
import { StatsBar } from './components/StatsBar'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
