'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

const COLORS = [
  '#6C63FF', // brand-accent purple
  '#00E5A0', // brand-accent2 green
  '#9696B0', // brand-subtle
  '#3A3A4A', // brand-muted
  '#AFA9EC', // soft purple
  '#5DCAA5', // soft teal
]

interface Particle {
  x: number
  y: number
  alpha: number
  radius: number
  color: string
}

function hexToRgb(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return [r, g, b]
}

export default function CursorTrail() {
  const prefersReducedMotion = useReducedMotion()
  const [isTouch, setIsTouch] = useState(false)

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const colorRef = useRef(COLORS[0])
  const rafRef = useRef<number>()
  const lastDotTimeRef = useRef(0)
  const colorTimerRef = useRef<ReturnType<typeof setTimeout>>()

  // Spring ball — motion values don't trigger React re-renders
  const mouseX = useMotionValue(-200)
  const mouseY = useMotionValue(-200)
  const ballX = useSpring(mouseX, { stiffness: 150, damping: 18, mass: 0.6 })
  const ballY = useSpring(mouseY, { stiffness: 150, damping: 18, mass: 0.6 })
  const [ballColor, setBallColor] = useState(COLORS[0])
  const [cursorVisible, setCursorVisible] = useState(false)

  useEffect(() => {
    setIsTouch(window.matchMedia('(pointer: coarse)').matches)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion || isTouch) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize, { passive: true })

    // Color cycler — only updates ball color state (every 2–3.5s, negligible)
    const scheduleColor = (): ReturnType<typeof setTimeout> => {
      const delay = 2000 + Math.random() * 1500
      return setTimeout(() => {
        const others = COLORS.filter((c) => c !== colorRef.current)
        const next = others[Math.floor(Math.random() * others.length)]
        colorRef.current = next
        setBallColor(next)
        colorTimerRef.current = scheduleColor()
      }, delay)
    }
    colorTimerRef.current = scheduleColor()

    // RAF draw loop — no React state, no re-renders
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current = particlesRef.current.filter((p) => p.alpha > 0.015)

      for (const p of particlesRef.current) {
        p.alpha *= 0.87
        p.radius *= 0.91

        const [r, g, b] = hexToRgb(p.color)
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius)
        gradient.addColorStop(0, `rgba(${r},${g},${b},${p.alpha})`)
        gradient.addColorStop(1, `rgba(${r},${g},${b},0)`)
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)

    // Mouse tracking — only pushes to ref array, no setState
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)

      const now = Date.now()
      if (now - lastDotTimeRef.current < 30) return
      lastDotTimeRef.current = now

      particlesRef.current.push({
        x: e.clientX,
        y: e.clientY,
        alpha: 0.55,
        radius: 8,
        color: colorRef.current,
      })
    }

    const handleEnter = () => setCursorVisible(true)
    const handleLeave = () => setCursorVisible(false)

    document.addEventListener('mousemove', handleMove, { passive: true })
    document.addEventListener('mouseenter', handleEnter)
    document.addEventListener('mouseleave', handleLeave)

    return () => {
      window.removeEventListener('resize', resize)
      document.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseenter', handleEnter)
      document.removeEventListener('mouseleave', handleLeave)
      clearTimeout(colorTimerRef.current)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [prefersReducedMotion, isTouch, mouseX, mouseY])

  if (prefersReducedMotion || isTouch) return null

  return (
    <>
      {/* Canvas trail — drawn entirely off React's render cycle */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 9998,
        }}
      />

      {/* Spring ball — motion values bypass React state */}
      <motion.div
        aria-hidden="true"
        animate={{
          backgroundColor: ballColor,
          opacity: cursorVisible ? 1 : 0,
        }}
        transition={{
          backgroundColor: { duration: 1.2, ease: 'easeInOut' },
          opacity: { duration: 0.25, ease: 'easeInOut' },
        }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: ballX,
          y: ballY,
          marginLeft: -7,
          marginTop: -7,
          width: 14,
          height: 14,
          borderRadius: '50%',
          filter: 'blur(4px)',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      />
    </>
  )
}
