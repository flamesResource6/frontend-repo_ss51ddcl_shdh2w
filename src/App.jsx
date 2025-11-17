import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Booking from './components/Booking'
import Gallery from './components/Gallery'
import Marquee from './components/Marquee'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Marquee />
        <Services />
        <Booking />
        <Gallery />
        <footer id="contact" className="py-12 bg-white border-t border-purple-100">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-600">© {new Date().getFullYear()} Lumi Glow Studio. All rights reserved.</p>
            <div className="text-gray-700">
              <a href="mailto:hello@lumiglow.studio" className="hover:text-purple-600">hello@lumiglow.studio</a>
              <span className="mx-3">•</span>
              <a href="tel:+1234567890" className="hover:text-purple-600">+1 (234) 567-890</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
