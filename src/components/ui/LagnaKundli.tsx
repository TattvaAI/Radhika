'use client'

import React from 'react'

export interface LagnaKundliProps {
  size?: number
  className?: string
  lagnaRashi?: number // 1 to 12
  highlightHouse?: number
}

// Classical North Indian Diamond Chart (12 Bhavas)
export function LagnaKundli({
  size = 320,
  className = '',
  lagnaRashi = 1,
  highlightHouse,
}: LagnaKundliProps) {
  // House numbers and classical astrological house significations
  const houses = [
    { num: 1, cx: 100, cy: 70, label: 'तनु (Self)' },
    { num: 2, cx: 50, cy: 35, label: 'धन (Wealth)' },
    { num: 3, cx: 25, cy: 75, label: 'सहज (Siblings)' },
    { num: 4, cx: 65, cy: 100, label: 'सुख (Home)' },
    { num: 5, cx: 25, cy: 125, label: 'सुत (Intellect)' },
    { num: 6, cx: 50, cy: 165, label: 'रिपु (Health)' },
    { num: 7, cx: 100, cy: 130, label: 'जाया (Partner)' },
    { num: 8, cx: 150, cy: 165, label: 'मृत्यु (Longevity)' },
    { num: 9, cx: 175, cy: 125, label: 'भाग्य (Fortune)' },
    { num: 10, cx: 135, cy: 100, label: 'कर्म (Career)' },
    { num: 11, cx: 175, cy: 75, label: 'आय (Gains)' },
    { num: 12, cx: 150, cy: 35, label: 'व्यय (Loss)' },
  ]

  return (
    <div className={`relative inline-block ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-full text-turmeric select-none"
        aria-label="North Indian Lagna Kundli Chart"
      >
        {/* Outer Square */}
        <rect
          x="10"
          y="10"
          width="180"
          height="180"
          stroke="currentColor"
          strokeWidth="1.2"
          className="opacity-80"
        />

        {/* Diagonal Cross (Corner to Corner) */}
        <line x1="10" y1="10" x2="190" y2="190" stroke="currentColor" strokeWidth="1" className="opacity-60" />
        <line x1="190" y1="10" x2="10" y2="190" stroke="currentColor" strokeWidth="1" className="opacity-60" />

        {/* Inner Diamond (Midpoint to Midpoint) */}
        <polygon
          points="100,10 190,100 100,190 10,100"
          stroke="currentColor"
          strokeWidth="1.2"
          className="opacity-85"
        />

        {/* Central Lagna House Accent (House 1) */}
        <polygon
          points="100,10 145,55 100,100 55,55"
          fill="currentColor"
          fillOpacity="0.04"
        />

        {/* House Signatures and Roman/Devanagari House Identifiers */}
        {houses.map((h) => {
          const isHighlighted = highlightHouse === h.num
          // Calculate rashi in house based on Lagna
          const houseRashi = ((lagnaRashi - 1 + (h.num - 1)) % 12) + 1

          return (
            <g key={h.num} className="transition-opacity">
              {/* House Number / Rashi mark */}
              <text
                x={h.cx}
                y={h.cy}
                textAnchor="middle"
                dominantBaseline="central"
                fill="currentColor"
                fontSize={h.num === 1 ? '10' : '8'}
                fontFamily="var(--font-body), sans-serif"
                className={isHighlighted ? 'font-bold opacity-100 fill-paper' : 'opacity-70 font-mono'}
              >
                {houseRashi}
              </text>
            </g>
          )
        })}

        {/* Center Bindu */}
        <circle cx="100" cy="100" r="1.5" fill="currentColor" opacity="0.6" />
      </svg>
    </div>
  )
}
