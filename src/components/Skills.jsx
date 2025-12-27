import React from 'react'

const skills = ['React', 'Three.js', 'GSAP', 'Tailwind', 'TypeScript', 'WebGL', 'UI/UX']

export default function Skills() {
  return (
    <section className="py-12">
      <h3 className="text-xl font-semibold mb-4">Skills</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((s) => (
          <div key={s} className="p-4 rounded-xl bg-white/3 border border-white/5 backdrop-blur-sm hover:scale-105 transition-transform">
            <div className="text-sm font-medium">{s}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
