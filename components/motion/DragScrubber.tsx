'use client'

import { useRef, useEffect, useState } from 'react'
import {
  motion,
  useMotionValue,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
} from 'framer-motion'
import { ChevronsLeftRight, TrendingDown, TrendingUp } from 'lucide-react'

interface Props {
  before: { label: string; steps: string[]; pain: string }
  after: { label: string; steps: string[]; result: string }
}

function PanelContent({
  type,
  steps,
  summary,
}: {
  type: 'before' | 'after'
  steps: string[]
  summary: string
}) {
  const isBefore = type === 'before'
  return (
    <div className="p-8 h-full">
      <div className="flex items-center gap-2 mb-5">
        {isBefore ? (
          <TrendingDown className="w-4 h-4 text-red-400" aria-hidden="true" />
        ) : (
          <TrendingUp className="w-4 h-4 text-brand-accent2" aria-hidden="true" />
        )}
        <span
          className={`font-body text-xs font-medium uppercase tracking-widest ${
            isBefore ? 'text-red-400' : 'text-brand-accent2'
          }`}
        >
          {isBefore ? 'Before' : 'After'}
        </span>
      </div>
      <ul className="flex flex-col gap-3 mb-5" role="list">
        {steps.map((step, i) => (
          <li key={i} className="flex items-start gap-3">
            {isBefore ? (
              <span className="font-body text-xs text-brand-muted mt-0.5 shrink-0">{i + 1}.</span>
            ) : (
              <span
                className="w-1.5 h-1.5 bg-brand-accent2 rounded-full mt-2 shrink-0"
                aria-hidden="true"
              />
            )}
            <span className="font-body text-sm text-brand-subtle leading-relaxed">{step}</span>
          </li>
        ))}
      </ul>
      <p
        className={`font-body text-xs rounded-lg px-4 py-2.5 ${
          isBefore
            ? 'text-red-400/80 bg-red-400/10 border border-red-400/20'
            : 'text-brand-accent2 bg-brand-accent2/10 border border-brand-accent2/20'
        }`}
      >
        {summary}
      </p>
    </div>
  )
}

export default function DragScrubber({ before, after }: Props) {
  const prefersReducedMotion = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(640)

  useEffect(() => {
    const update = () => {
      if (containerRef.current) setContainerWidth(containerRef.current.offsetWidth)
    }
    update()
    const observer = new ResizeObserver(update)
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  const dragX = useMotionValue(0)
  const splitFraction = useMotionValue(0.5)

  useMotionValueEvent(dragX, 'change', (v) => {
    const fraction = (v + containerWidth / 2) / containerWidth
    splitFraction.set(Math.max(0.05, Math.min(0.95, fraction)))
  })

  const beforeClip = useTransform(
    splitFraction,
    (f) => `inset(0 ${(1 - f) * 100}% 0 0)`,
  )
  const afterClip = useTransform(
    splitFraction,
    (f) => `inset(0 0 0 ${f * 100}%)`,
  )
  const handleLeft = useTransform(splitFraction, (f) => `${f * 100}%`)

  const halfWidth = containerWidth / 2
  const HANDLE_HALF = 24 // half of w-12 (48px)

  // Static fallback for reduced motion
  if (prefersReducedMotion) {
    return (
      <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-brand-border">
        <PanelContent type="before" steps={before.steps} summary={before.pain} />
        <PanelContent type="after" steps={after.steps} summary={after.result} />
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden"
      style={{ minHeight: 420 }}
      aria-label="Drag to compare before and after"
    >
      {/* After panel — base layer */}
      <motion.div
        className="absolute inset-0 bg-brand-accent2/5"
        style={{ clipPath: afterClip }}
        aria-hidden="true"
      >
        <PanelContent type="after" steps={after.steps} summary={after.result} />
      </motion.div>

      {/* Before panel — top layer */}
      <motion.div
        className="absolute inset-0 bg-red-950/10"
        style={{ clipPath: beforeClip }}
        aria-hidden="true"
      >
        <PanelContent type="before" steps={before.steps} summary={before.pain} />
      </motion.div>

      {/* Drag handle */}
      <motion.div
        drag="x"
        dragConstraints={{ left: -(halfWidth - HANDLE_HALF), right: halfWidth - HANDLE_HALF }}
        dragElastic={0}
        dragMomentum={false}
        style={{
          x: dragX,
          left: '50%',
          marginLeft: -HANDLE_HALF,
        }}
        className="absolute top-0 bottom-0 w-12 flex flex-col items-center justify-center cursor-ew-resize z-20 touch-none"
      >
        {/* Vertical divider line */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-white/20 pointer-events-none" />
        {/* Handle pill */}
        <div className="relative w-10 h-10 bg-brand-bg border border-brand-border rounded-full flex items-center justify-center shadow-xl">
          <ChevronsLeftRight className="w-4 h-4 text-brand-text" />
        </div>
      </motion.div>

      {/* Screen-reader accessible content */}
      <div className="sr-only">
        <p>Before: {before.pain}</p>
        <p>After: {after.result}</p>
      </div>
    </div>
  )
}
