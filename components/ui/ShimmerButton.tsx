'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface Props {
  href: string
  children?: React.ReactNode
  className?: string
  icon?: boolean
}

export default function ShimmerButton({ href, children = 'Book a free call', className = '', icon = true }: Props) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <Link
      href={href}
      className={`relative inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-white font-body font-medium px-6 py-3 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent overflow-hidden ${className}`}
    >
      {!prefersReducedMotion && (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 w-[60%] bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12"
          initial={{ x: '-100%' }}
          whileHover={{ x: '260%' }}
          transition={{ duration: 0.5, ease: 'easeIn' }}
        />
      )}
      <span className="relative">{children}</span>
      {icon && <ArrowRight className="relative w-4 h-4" />}
    </Link>
  )
}
