import { useState } from 'react'

const initial = { name: '', email: '', phone: '', service: 'Event Makeup', date: '', time: '', message: '' }

export default function Booking() {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState({ loading: false, message: '' })

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const submit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, message: '' })
    try {
      const payload = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        service: form.service,
        appointment_date: form.date,
        appointment_time: form.time,
        message: form.message,
      }
      const res = await fetch(`${baseUrl}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to book')
      setStatus({ loading: false, message: 'Request received! We will confirm shortly.' })
      setForm(initial)
    } catch (err) {
      setStatus({ loading: false, message: err.message })
    }
  }

  return (
    <section id="booking" className="py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Book your glow</h2>
          <p className="text-gray-600 mt-3">Tell us about your event and preferred time. We’ll confirm availability right away.</p>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li>• Quick confirmation</li>
            <li>• On-location available</li>
            <li>• Hygiene-first kit</li>
          </ul>
        </div>

        <form onSubmit={submit} className="bg-white/80 backdrop-blur rounded-2xl border border-purple-100 p-6 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input required placeholder="Full name" className="input" value={form.name} onChange={(e)=>setForm({ ...form, name: e.target.value })} />
            <input required type="email" placeholder="Email" className="input" value={form.email} onChange={(e)=>setForm({ ...form, email: e.target.value })} />
            <input required placeholder="Phone" className="input" value={form.phone} onChange={(e)=>setForm({ ...form, phone: e.target.value })} />
            <select className="input" value={form.service} onChange={(e)=>setForm({ ...form, service: e.target.value })}>
              <option>Event Makeup</option>
              <option>Bridal Glam</option>
              <option>Photoshoot</option>
            </select>
            <input required type="date" className="input" value={form.date} onChange={(e)=>setForm({ ...form, date: e.target.value })} />
            <input required type="time" className="input" value={form.time} onChange={(e)=>setForm({ ...form, time: e.target.value })} />
          </div>
          <textarea placeholder="Notes" className="input mt-4 h-28" value={form.message} onChange={(e)=>setForm({ ...form, message: e.target.value })} />

          <button disabled={status.loading} className="mt-4 w-full rounded-full bg-purple-600 text-white py-3 font-semibold hover:bg-purple-700 transition-colors">
            {status.loading ? 'Booking…' : 'Request Booking'}
          </button>
          {status.message && <p className="text-sm text-gray-700 mt-3">{status.message}</p>}
        </form>
      </div>
    </section>
  )
}
