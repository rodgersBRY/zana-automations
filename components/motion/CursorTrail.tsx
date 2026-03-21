'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

const COLORS = [
  '#6C63FF', // brand-accent purple
  '#00E5A0', // brand-accent2 green
  '#8888A0', // brand-subtle
  '#3A3A4A', // brand-muted
  '#AFA9EC', // soft purple
  '#5DCAA5', // soft teal
]

interface TrailDot {
  id: number
  x: number
  y: number
  color: string
}

let _dotId = 0

export default function CursorTrail() {
  const prefersReducedMotion = useReducedMotion()

  // Touch detection — runs only on the client
  const [isTouch, setIsTouch] = useState(false)
  useEffect(() => {
    setIsTouch(window.matchMedia('(pointer: coarse)').matches)
  }, [])

  const [ballColor, setBallColor] = useState(COLORS[0])
  const [cursorVisible, setCursorVisible] = useState(false)
  const [trailDots, setTrailDots] = useState<TrailDot[]>([])

  // Keep a ref to the current color so mousemove can read it without stale closure
  const ballColorRef = useRef(COLORS[0])
  const lastDotTimeRef = useRef(0)
  const colorTimerRef = useRef<ReturnType<typeof setTimeout>>()

  // Spring-lagged ball position
  const mouseX = useMotionValue(-200)
  const mouseY = useMotionValue(-200)
  const ballX = useSpring(mouseX, { stiffness: 150, damping: 18, mass: 0.6 })
  const ballY = useSpring(mouseY, { stiffness: 150, damping: 18, mass: 0.6 })

  // Randomised color cycler
  useEffect(() => {
    if (prefersReducedMotion || isTouch) return

    const scheduleNext = (): ReturnType<typeof setTimeout> => {
      const delay = 2000 + Math.random() * 1500 // 2000–3500 ms
      return setTimeout(() => {
        const others = COLORS.filter((c) => c !== ballColorRef.current)
        const next = others[Math.floor(Math.random() * others.length)]
        ballColorRef.current = next
        setBallColor(next)
        colorTimerRef.current = scheduleNext()
      }, delay)
    }

    colorTimerRef.current = scheduleNext()
    return () => clearTimeout(colorTimerRef.current)
  }, [prefersReducedMotion, isTouch])

  // Mouse tracking + trail dot creation
  useEffect(() => {
    if (prefersReducedMotion || isTouch) return

    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)

      // Throttle trail to ~40 fps so the array stays small
      const now = Date.now()
      if (now - lastDotTimeRef.current < 25) return
      lastDotTimeRef.current = now

      const id = _dotId++
      const color = ballColorRef.current
      setTrailDots((prev) => [...prev, { id, x: e.clientX, y: e.clientY, color }])

      // Remove the dot after its animation finishes
      setTimeout(() => {
        setTrailDots((prev) => prev.filter((d) => d.id !== id))
      }, 650)
    }

    const handleEnter = () => setCursorVisible(true)
    const handleLeave = () => setCursorVisible(false)

    document.addEventListener('mousemove', handleMove, { passive: true })
    document.addEventListener('mouseenter', handleEnter)
    document.addEventListener('mouseleave', handleLeave)

    return () => {
      document.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseenter', handleEnter)
      document.removeEventListener('mouseleave', handleLeave)
    }
  }, [prefersReducedMotion, isTouch, mouseX, mouseY])

  if (prefersReducedMotion || isTouch) return null

  return (
    <>
      {/* Trail dots — each inherits the ball color at creation time */}
      {trailDots.map((dot) => (
        <motion.div
          key={dot.id}
          aria-hidden="true"
          initial={{ opacity: 0.55, scale: 1 }}
          animate={{ opacity: 0, scale: 0.15 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{
            position: 'fixed',
            left: dot.x - 5,
            top: dot.y - 5,
            width: 10,
            height: 10,
            borderRadius: '50%',
            backgroundColor: dot.color,
            filter: 'blur(3px)',
            pointerEvents: 'none',
            zIndex: 9998,
          }}
        />
      ))}

      {/* Main glowing ball */}
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
