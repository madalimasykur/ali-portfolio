'use client'

import { useEffect, useRef } from 'react'

type Particle = {
  x: number
  y: number
  baseX: number
  baseY: number
  vx: number
  vy: number
  opacity: number
  baseOpacity: number
}

const SIZE = 1.5
const SPACING = 43
const LIGHT_R = 150
const LIGHT_R2 = LIGHT_R * LIGHT_R
const WAVE_R = 280
const WAVE_R2 = WAVE_R * WAVE_R
const PUSH = 3
const FRICTION = 0.84
const RETURN = 0.08

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const particlesRef = useRef<Particle[]>([])
  const rafRef = useRef<number>(0)

  const buildGrid = () => {
    const cols = Math.ceil(window.innerWidth / SPACING) + 1
    const rows = Math.ceil(window.innerHeight / SPACING) + 1
    const particles: Particle[] = []

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = c * SPACING
        const y = r * SPACING
        const baseOpacity = 0.15 + Math.random() * 0.1
        particles.push({ x, y, baseX: x, baseY: y, vx: 0, vy: 0, opacity: baseOpacity, baseOpacity })
      }
    }

    particlesRef.current = particles
  }

  const updateParticles = () => {
    const mx = mouseRef.current.x
    const my = mouseRef.current.y

    for (const p of particlesRef.current) {
      const dx = p.x - mx
      const dy = p.y - my
      const d2 = dx * dx + dy * dy

      if (d2 < WAVE_R2 && d2 > 0) {
        const dist = Math.sqrt(d2)
        const f = 1 - dist / WAVE_R
        p.vx += (dx / dist) * PUSH * f * f
        p.vy += (dy / dist) * PUSH * f * f
      }

      p.vx = p.vx * FRICTION + (p.baseX - p.x) * RETURN
      p.vy = p.vy * FRICTION + (p.baseY - p.y) * RETURN
      p.x += p.vx
      p.y += p.vy

      if (d2 < LIGHT_R2) {
        const glow = 1 - Math.sqrt(d2) / LIGHT_R
        p.opacity = p.baseOpacity + glow * 0.7
      } else {
        p.opacity += (p.baseOpacity - p.opacity) * 0.06
      }
    }
  }

  const drawParticles = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    const mx = mouseRef.current.x
    const my = mouseRef.current.y

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.beginPath()
    for (const p of particlesRef.current) {
      const dx = p.x - mx
      const dy = p.y - my
      if (dx * dx + dy * dy >= LIGHT_R2) {
        ctx.moveTo(p.x + SIZE, p.y)
        ctx.arc(p.x, p.y, SIZE, 0, Math.PI * 2)
      }
    }
    ctx.fillStyle = 'rgba(240,240,240,0.22)'
    ctx.fill()

    for (const p of particlesRef.current) {
      const dx = p.x - mx
      const dy = p.y - my
      const d2 = dx * dx + dy * dy
      if (d2 < LIGHT_R2) {
        const t = 1 - Math.sqrt(d2) / LIGHT_R
        const r = Math.round(240 + (229 - 240) * t)
        const g = Math.round(240 + (57 - 240) * t)
        const b = Math.round(240 + (53 - 240) * t)
        ctx.beginPath()
        ctx.arc(p.x, p.y, SIZE, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${r},${g},${b},${Math.min(1, p.opacity)})`
        ctx.fill()
      }
    }

    if (mx > 0 && my > 0) {
      const grad = ctx.createRadialGradient(mx, my, 0, mx, my, LIGHT_R)
      grad.addColorStop(0, 'rgba(229,57,53,0.07)')
      grad.addColorStop(0.5, 'rgba(229,57,53,0.02)')
      grad.addColorStop(1, 'rgba(229,57,53,0)')
      ctx.beginPath()
      ctx.arc(mx, my, LIGHT_R, 0, Math.PI * 2)
      ctx.fillStyle = grad
      ctx.fill()
    }
  }

  const animate = () => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    updateParticles()
    drawParticles(ctx, canvas)
    rafRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const setSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      buildGrid()
    }

    setSize()
    window.addEventListener('resize', setSize)

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }

    const onMouseLeave = () => {
      mouseRef.current.x = -9999
      mouseRef.current.y = -9999
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseleave', onMouseLeave)

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', setSize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
      cancelAnimationFrame(rafRef.current)
    }
  })

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  )
}

export default ParticleBackground;