import { useEffect, useRef } from 'react'

export default function Gallery() {
  const items = [
    'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1556228453-efd1e3f0b23a?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1512499583175-0231b8ccf4a1?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1512203492609-8f9f7a0b2e1a?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
  ]

  const scrollerRef = useRef(null)

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    let idx = 0
    const id = setInterval(() => {
      const cardWidth = el.firstChild?.getBoundingClientRect().width || 300
      idx += 1
      el.scrollTo({ left: (idx % items.length) * (cardWidth + 16), behavior: 'smooth' })
    }, 3500)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="gallery" className="py-20 bg-gradient-to-t from-white to-purple-50/40">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Gallery</h2>
        <p className="text-gray-600 mt-2">A peek at soft glam, dewy skin, and timeless looks.</p>

        {/* Slider */}
        <div className="mt-10 relative">
          <div
            ref={scrollerRef}
            className="no-scrollbar flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pr-4"
          >
            {items.map((src, i) => (
              <div key={i} className="shrink-0 w-64 md:w-72 lg:w-80 aspect-[4/5] rounded-xl overflow-hidden bg-gray-100 border border-purple-100 snap-start">
                <img src={src} alt="makeup" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <span className="text-sm text-gray-500">Auto-sliding • Drag to explore</span>
          </div>
        </div>
      </div>
    </section>
  )
}
