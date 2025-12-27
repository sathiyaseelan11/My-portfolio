import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Hero() {
  const ref = useRef()

  useEffect(() => {
    gsap.fromTo(ref.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' })
  }, [])

  return (
    <section className="py-20">
      <div ref={ref} className="backdrop-blur-sm bg-white/5 border border-white/5 rounded-2xl p-8 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-electric to-neon">Hi, I’m Alex</h1>
        <p className="mt-3 text-lg text-slate-200">Frontend developer & 3D web designer — I build immersive experiences on the web.</p>
        <p className="mt-6 text-sm text-slate-300">I craft performant 3D interfaces, motion-driven UIs, and creative visuals.</p>
      </div>
    </section>
  )
}
