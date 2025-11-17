export default function Marquee() {
  const items = [
    { src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop', alt: 'Soft glam' },
    { src: 'https://images.unsplash.com/photo-1751047856479-0697049e8016?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTb2Z0JTIwZ2xhbXxlbnwwfDB8fHwxNzYzMzg0MjI0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', alt: 'Bridal glow' },
    { src: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&auto=format&fit=crop', alt: 'Editorial look' },
    { src: 'https://images.unsplash.com/photo-1751047856479-0697049e8016?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTb2Z0JTIwZ2xhbXxlbnwwfDB8fHwxNzYzMzg0MjI0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', alt: 'Natural radiance' },
    { src: 'https://images.unsplash.com/photo-1751047856479-0697049e8016?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTb2Z0JTIwZ2xhbXxlbnwwfDB8fHwxNzYzMzg0MjI0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', alt: 'Classic glam' },
    { src: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop', alt: 'Dewy skin' },
  ]

  return (
    <section className="relative py-10 bg-white/60 border-y border-purple-100 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

      <div className="marquee-track flex items-center gap-6 will-change-transform">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="h-24 w-40 md:h-28 md:w-48 shrink-0 rounded-xl overflow-hidden bg-gray-100 border border-purple-100">
            <img src={item.src} alt={item.alt} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <p className="text-sm text-gray-500">Hover to pause • Infinite showcase</p>
      </div>
    </section>
  )
}
