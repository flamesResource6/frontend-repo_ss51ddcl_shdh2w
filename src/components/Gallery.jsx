export default function Gallery() {
  const items = [
    '/images/beauty1.jpg',
    '/images/beauty2.jpg',
    '/images/beauty3.jpg',
    '/images/beauty4.jpg',
    '/images/beauty5.jpg',
    '/images/beauty6.jpg',
  ]

  return (
    <section id="gallery" className="py-20 bg-gradient-to-t from-white to-purple-50/40">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Gallery</h2>
        <p className="text-gray-600 mt-2">A peek at soft glam, dewy skin, and timeless looks.</p>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((src, i) => (
            <div key={i} className="aspect-[4/5] overflow-hidden rounded-xl bg-gray-100">
              <img src={src} alt="makeup" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
