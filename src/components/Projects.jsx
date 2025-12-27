import React from 'react'

const projects = [
  { title: 'Orbit Studio', desc: 'Interactive 3D landing with WebGL' },
  { title: 'Nebula Dashboard', desc: 'Data viz with immersive UI' },
  { title: 'Stellar Shop', desc: 'E‑commerce with 3D product previews' }
]

export default function Projects() {
  return (
    <section className="py-12">
      <h3 className="text-xl font-semibold mb-4">Projects</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.title} className="p-6 rounded-2xl bg-gradient-to-br from-white/3 to-white/2 border border-white/5 hover:-translate-y-2 transform transition-all shadow-glow">
            <h4 className="font-semibold text-lg">{p.title}</h4>
            <p className="mt-2 text-slate-300">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
