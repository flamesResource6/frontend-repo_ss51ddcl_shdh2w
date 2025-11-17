import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  const LinkItem = ({ id, label }) => (
    <button onClick={() => scrollTo(id)} className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-purple-600">
      {label}
    </button>
  )

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-purple-100">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-400" />
          <span className="font-semibold text-gray-800">Lumi Glow Studio</span>
        </div>
        <nav className="hidden md:flex items-center">
          <LinkItem id="services" label="Services" />
          <LinkItem id="booking" label="Book" />
          <LinkItem id="gallery" label="Gallery" />
          <LinkItem id="contact" label="Contact" />
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          <Menu className="h-6 w-6 text-gray-700" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-purple-100 bg-white">
          <div className="px-4 py-3 flex flex-col">
            <LinkItem id="services" label="Services" />
            <LinkItem id="booking" label="Book" />
            <LinkItem id="gallery" label="Gallery" />
            <LinkItem id="contact" label="Contact" />
          </div>
        </div>
      )}
    </header>
  )
}
