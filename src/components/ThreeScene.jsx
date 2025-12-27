import React, { Suspense, useRef, useEffect, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import * as THREE from 'three'
import { gsap } from 'gsap'

function Planet({ radius = 2 }) {
  const ref = useRef()

  const texture = useMemo(() => {
    const size = 1024
    const canvas = document.createElement('canvas')
    canvas.width = size
    canvas.height = size
    const ctx = canvas.getContext('2d')

    // gradient base
    const grd = ctx.createRadialGradient(size * 0.3, size * 0.3, size * 0.02, size * 0.5, size * 0.5, size)
    grd.addColorStop(0, '#18305a')
    grd.addColorStop(0.6, '#0b2b4a')
    grd.addColorStop(1, '#031226')
    ctx.fillStyle = grd
    ctx.fillRect(0, 0, size, size)

    // add lighter patches
    for (let i = 0; i < 60; i++) {
      ctx.beginPath()
      const x = Math.random() * size
      const y = Math.random() * size
      const r = Math.random() * 40 + 10
      ctx.fillStyle = `rgba(${30 + Math.random() * 60}, ${80 + Math.random() * 60}, ${150 + Math.random() * 80}, ${0.04 + Math.random() * 0.12})`
      ctx.arc(x, y, r, 0, Math.PI * 2)
      ctx.fill()
    }

    const texture = new THREE.CanvasTexture(canvas)
    texture.needsUpdate = true
    return texture
  }, [])

  useFrame((state, delta) => {
    ref.current.rotation.y += 0.12 * delta
    ref.current.rotation.x += 0.02 * delta
  })

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <sphereGeometry args={[radius, 64, 64]} />
      <meshStandardMaterial map={texture} roughness={0.7} metalness={0.05} />
    </mesh>
  )
}

function FloatingDebris() {
  const group = useRef()
  const count = 30
  const positions = useMemo(() => {
    const arr = []
    for (let i = 0; i < count; i++) {
      arr.push([(Math.random() - 0.5) * 40, (Math.random() - 0.5) * 20, -Math.random() * 60 - 5])
    }
    return arr
  }, [count])

  useFrame((state) => {
    group.current.rotation.y += 0.002
  })

  return (
    <group ref={group}>
      {positions.map((p, i) => (
        <mesh key={i} position={p} rotation={[Math.random(), Math.random(), Math.random()]}>
          <icosahedronGeometry args={[0.2 + Math.random() * 0.6, 0]} />
          <meshStandardMaterial color="#6ee7ff" emissive="#0ff" emissiveIntensity={0.02} roughness={0.9} />
        </mesh>
      ))}
    </group>
  )
}

function SceneController() {
  const { camera } = useThree()

  useEffect(() => {
    const onScroll = () => {
      const t = window.scrollY / (document.body.scrollHeight - window.innerHeight)
      gsap.to(camera.position, { x: (t - 0.5) * 6, y: -t * 2, z: 12, duration: 1.2, ease: 'power2.out' })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [camera])

  return null
}

export default function ThreeScene() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        <Stars radius={200} depth={50} count={8000} factor={4} saturation={0} fade speed={0.2} />
        <Suspense fallback={null}>
          <Planet radius={2.4} />
          <FloatingDebris />
        </Suspense>
        <SceneController />
      </Canvas>
    </div>
  )
}
