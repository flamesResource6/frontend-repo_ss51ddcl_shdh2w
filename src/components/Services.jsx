export default function Services() {
  const services = [
    { title: 'Bridal Glam', desc: 'Flawless, camera-ready bridal makeup tailored to your features.', price: '$180' },
    { title: 'Event Makeup', desc: 'Soft glam or bold editorial looks for any occasion.', price: '$120' },
    { title: 'Photoshoot', desc: 'On-set beauty for creative and commercial shoots.', price: '$150' },
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-purple-50/40">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Services</h2>
        <p className="text-gray-600 mt-2 max-w-2xl">Choose a package or mix-and-match to craft your perfect look.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-purple-100 bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold text-gray-800">{s.title}</h3>
                <span className="text-purple-600 font-semibold">{s.price}</span>
              </div>
              <p className="text-gray-600 mt-3">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
