import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Insights from './components/Insights'
import Stats from './components/Stats'
import About from './components/About'
import Careers from './components/Careers'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <Insights />
      <About />
      <Careers />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
