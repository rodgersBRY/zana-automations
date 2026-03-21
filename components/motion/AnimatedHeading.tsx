'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { wordContainer, wordReveal, viewportConfig } from '@/lib/motion'

type Tag = 'h1' | 'h2' | 'h3'

interface Props {
  as?: Tag
  children: React.ReactNode
  className?: string
  id?: string
  /** 'inView' triggers on scroll (default); 'onMount' triggers immediately */
  animate?: 'inView' | 'onMount'
}

const motionTags = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
}

function renderWords(children: React.ReactNode): React.ReactNode[] {
  const result: React.ReactNode[] = []
  React.Children.forEach(children, (child, childIdx) => {
    if (typeof child === 'string') {
      child.split(/(\s+)/).filter(Boolean).forEach((segment, i) => {
        if (/^\s+$/.test(segment)) {
          result.push(segment)
        } else {
          result.push(
            <motion.span
              key={`${childIdx}-${i}`}
              variants={wordReveal}
              style={{ display: 'inline-block' }}
            >
              {segment}
            </motion.span>
          )
        }
      })
    } else if (React.isValidElement(child)) {
      result.push(
        <motion.span
          key={`el-${childIdx}`}
          variants={wordReveal}
          style={{ display: 'inline-block' }}
        >
          {child}
        </motion.span>
      )
    } else {
      result.push(child)
    }
  })
  return result
}

export default function AnimatedHeading({
  as = 'h2',
  children,
  className,
  id,
  animate = 'inView',
}: Props) {
  const prefersReducedMotion = useReducedMotion()
  const Tag = as

  if (prefersReducedMotion) {
    return <Tag id={id} className={className}>{children}</Tag>
  }

  const MotionTag = motionTags[as]

  const inViewProps =
    animate === 'inView'
      ? { whileInView: 'visible' as const, viewport: viewportConfig }
      : { animate: 'visible' as const }

  return (
    <MotionTag
      id={id}
      className={className}
      variants={wordContainer}
      initial="hidden"
      {...inViewProps}
    >
      {renderWords(children)}
    </MotionTag>
  )
}
