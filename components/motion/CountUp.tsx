'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform, animate, useInView, useReducedMotion } from 'framer-motion'

interface Props {
  to: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

export default function CountUp({ to, duration = 1.2, suffix = '', prefix = '', className }: Props) {
  const prefersReducedMotion = useReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  const count = useMotionValue(prefersReducedMotion ? to : 0)
  const rounded = useTransform(count, (v) => `${prefix}${Math.round(v)}${suffix}`)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView || prefersReducedMotion) return
    const controls = animate(count, to, { duration, ease: 'easeOut' })
    return controls.stop
  }, [isInView, prefersReducedMotion, count, to, duration])

  return (
    <motion.span ref={ref} className={className}>
      {rounded}
    </motion.span>
  )
}
