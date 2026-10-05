'use client'

import React from 'react'
import { motion, useReducedMotion } from 'motion/react'

export interface AstrolabeProps {
  size?: number
  className?: string
}

// Round to 2 decimal places to guarantee identical server and client SVG attributes
const round = (val: number): number => Math.round(val * 100) / 100

export function Astrolabe({ size = 520, className = '' }: AstrolabeProps) {
  const shouldReduceMotion = useReducedMotion()

  const rashis = [
    { num: '०१', name: 'मेष', latin: 'Aries' },
    { num: '०२', name: 'वृषभ', latin: 'Taurus' },
    { num: '०३', name: 'मिथुन', latin: 'Gemini' },
    { num: '०४', name: 'कर्क', latin: 'Cancer' },
    { num: '०५', name: 'सिंह', latin: 'Leo' },
    { num: '०६', name: 'कन्या', latin: 'Virgo' },
    { num: '०७', name: 'तुला', latin: 'Libra' },
    { num: '०८', name: 'वृश्चिक', latin: 'Scorpio' },
    { num: '०९', name: 'धनु', latin: 'Sagittarius' },
    { num: '१०', name: 'मकर', latin: 'Capricorn' },
    { num: '११', name: 'कुम्भ', latin: 'Aquarius' },
    { num: '१२', name: 'मीन', latin: 'Pisces' },
  ]

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-turmeric overflow-visible"
        aria-hidden="true"
        suppressHydrationWarning
      >
        <defs>
          <radialGradient id="astrolabeAura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.08" />
            <stop offset="60%" stopColor="currentColor" stopOpacity="0.02" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Central Subtle Celestial Glow */}
        <circle cx="300" cy="300" r="280" fill="url(#astrolabeAura)" />

        {/* 1. Outermost Graduation Ring (Static Degree Scale) */}
        <circle cx="300" cy="300" r="290" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
        <circle cx="300" cy="300" r="284" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 6" opacity="0.4" />
        <circle cx="300" cy="300" r="270" stroke="currentColor" strokeWidth="1" opacity="0.6" />

        {/* Cardinal Axis Crosshairs */}
        <line x1="300" y1="5" x2="300" y2="595" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 8" opacity="0.3" />
        <line x1="5" y1="300" x2="595" y2="300" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 8" opacity="0.3" />
        <line x1="91" y1="91" x2="509" y2="509" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 10" opacity="0.2" />
        <line x1="509" y1="91" x2="91" y2="509" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 10" opacity="0.2" />

        {/* 2. Rotating Rashi / Zodiac Ring */}
        <motion.g
          animate={shouldReduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 160, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '300px 300px' }}
        >
          <circle cx="300" cy="300" r="240" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
          <circle cx="300" cy="300" r="200" stroke="currentColor" strokeWidth="1.2" opacity="0.7" />

          {/* 12 Radial Rashi Dividers & Sacred Sanskrit Glyphs */}
          {rashis.map((rashi, i) => {
            const angle = (i * 30 * Math.PI) / 180
            const x1 = round(300 + 200 * Math.cos(angle))
            const y1 = round(300 + 200 * Math.sin(angle))
            const x2 = round(300 + 240 * Math.cos(angle))
            const y2 = round(300 + 240 * Math.sin(angle))

            // Text midpoint placement (rotated along tangent)
            const midAngle = ((i * 30 + 15) * Math.PI) / 180
            const tx = round(300 + 220 * Math.cos(midAngle))
            const ty = round(300 + 220 * Math.sin(midAngle))
            const textRot = round(i * 30 + 15 + 90)

            return (
              <g key={rashi.name}>
                <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
                <text
                  x={tx}
                  y={ty}
                  textAnchor="middle"
                  dominantBaseline="central"
                  transform={`rotate(${textRot}, ${tx}, ${ty})`}
                  fill="currentColor"
                  fontSize="9"
                  fontFamily="var(--font-serif), serif"
                  className="tracking-widest opacity-85"
                >
                  {rashi.name}
                </text>
              </g>
            )
          })}
        </motion.g>

        {/* 3. Counter-Rotating Nakshatra Ring (27 Lunar Mansions ticks) */}
        <motion.g
          animate={shouldReduceMotion ? undefined : { rotate: -360 }}
          transition={{ duration: 220, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '300px 300px' }}
        >
          <circle cx="300" cy="300" r="160" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
          <circle cx="300" cy="300" r="130" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />

          {Array.from({ length: 27 }).map((_, i) => {
            const angle = (i * (360 / 27) * Math.PI) / 180
            const x1 = round(300 + 130 * Math.cos(angle))
            const y1 = round(300 + 130 * Math.sin(angle))
            const x2 = round(300 + 160 * Math.cos(angle))
            const y2 = round(300 + 160 * Math.sin(angle))
            return (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="0.6" opacity="0.35" />
            )
          })}
        </motion.g>

        {/* 4. Core Sacred Sacred Geometry: 9 Interlocking Triangles (Sri Yantra core) */}
        <g stroke="currentColor" strokeWidth="1" opacity="0.85">
          <polygon points="300,200 380,350 220,350" />
          <polygon points="300,380 220,240 380,240" />
          <polygon points="300,215 365,340 235,340" opacity="0.7" />
          <polygon points="300,365 235,250 365,250" opacity="0.7" />
          <polygon points="300,230 350,330 250,330" opacity="0.6" />
          <polygon points="300,350 250,260 350,260" opacity="0.6" />
          <polygon points="300,245 338,320 262,320" opacity="0.5" />
          <polygon points="300,335 262,270 338,270" opacity="0.5" />
          <polygon points="300,320 275,280 325,280" opacity="0.4" />
        </g>

        {/* Central Luminous Bindu */}
        <circle cx="300" cy="300" r="5" fill="currentColor" opacity="0.9" />
        <circle cx="300" cy="300" r="1.8" fill="#F2EDE3" />
      </svg>
    </div>
  )
}
