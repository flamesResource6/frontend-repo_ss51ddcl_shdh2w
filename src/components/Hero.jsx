import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80 pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
          Effortless Beauty, Elevated
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Bridal, editorial, and event makeup with a modern, radiant finish.
        </p>
        <a href="#booking" className="inline-flex mt-8 items-center justify-center rounded-full bg-purple-600 px-6 py-3 text-white font-semibold shadow-lg hover:shadow-xl hover:bg-purple-700 transition-all">
          Book an Appointment
        </a>
      </div>
    </section>
  )
}
