'use client'

import React from 'react'
import { motion, useReducedMotion } from 'motion/react'

export interface YantraProps {
  size?: number
  className?: string
  animate?: boolean
}

export function Yantra({ size = 120, className = '', animate = false }: YantraProps) {
  const shouldReduceMotion = useReducedMotion()
  const runAnimation = animate && !shouldReduceMotion

  const transitionConfig = {
    duration: 2.2,
    ease: 'easeInOut' as const,
  }

  // 9 interlocking triangles of the sacred Sri Yantra geometry
  // Coordinates in a 200x200 viewBox centered at (100, 100)
  const triangles = [
    // Upward 1 (central major)
    'M 100,28 L 165,145 L 35,145 Z',
    // Downward 1 (central major)
    'M 100,172 L 35,55 L 165,55 Z',
    // Upward 2
    'M 100,42 L 152,136 L 48,136 Z',
    // Downward 2
    'M 100,158 L 48,64 L 152,64 Z',
    // Upward 3
    'M 100,56 L 142,126 L 58,126 Z',
    // Downward 3
    'M 100,144 L 58,74 L 142,74 Z',
    // Upward 4
    'M 100,70 L 132,118 L 68,118 Z',
    // Downward 4
    'M 100,132 L 68,82 L 132,82 Z',
    // Downward 5 (innermost shakti triangle)
    'M 100,122 L 78,90 L 122,90 Z',
  ]

  // Concentric circle rings
  const circles = [
    { cx: 100, cy: 100, r: 76 },
    { cx: 100, cy: 100, r: 84 },
    { cx: 100, cy: 100, r: 90 },
  ]

  // Outer Bhupura (sacred square gateway enclosure)
  const bhupuraPath = `
    M 20,20 L 75,20 L 75,12 L 125,12 L 125,20 L 180,20 L 180,75 L 188,75 L 188,125 L 180,125 L 180,180
    L 125,180 L 125,188 L 75,188 L 75,180 L 20,180 L 20,125 L 12,125 L 12,75 L 20,75 Z
  `

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      {/* Outer Bhupura */}
      {runAnimation ? (
        <motion.path
          d={bhupuraPath}
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="square"
          initial={{ pathLength: 0, opacity: 0.2 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={transitionConfig}
        />
      ) : (
        <path
          d={bhupuraPath}
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="square"
        />
      )}

      {/* Concentric rings */}
      {circles.map((c, i) =>
        runAnimation ? (
          <motion.circle
            key={i}
            cx={c.cx}
            cy={c.cy}
            r={c.r}
            stroke="currentColor"
            strokeWidth="0.8"
            initial={{ pathLength: 0, opacity: 0.2 }}
            animate={{ pathLength: 1, opacity: 0.9 }}
            transition={{ ...transitionConfig, delay: 0.15 * i }}
          />
        ) : (
          <circle
            key={i}
            cx={c.cx}
            cy={c.cy}
            r={c.r}
            stroke="currentColor"
            strokeWidth="0.8"
          />
        )
      )}

      {/* 9 Interlocking Triangles */}
      {triangles.map((d, index) =>
        runAnimation ? (
          <motion.path
            key={index}
            d={d}
            stroke="currentColor"
            strokeWidth="1"
            strokeLinejoin="miter"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ ...transitionConfig, delay: 0.2 + index * 0.08 }}
          />
        ) : (
          <path
            key={index}
            d={d}
            stroke="currentColor"
            strokeWidth="1"
            strokeLinejoin="miter"
          />
        )
      )}

      {/* Central Bindu */}
      <circle cx="100" cy="100" r="2.2" fill="currentColor" />
    </svg>
  )
}
