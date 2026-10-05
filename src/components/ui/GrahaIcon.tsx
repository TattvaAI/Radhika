'use client'

import React from 'react'

export interface GrahaIconProps {
  slug: string
  size?: number
  className?: string
}

export function GrahaIcon({ slug, size = 40, className = '' }: GrahaIconProps) {
  // Render bespoke celestial sigils tailored to each Vedic domain
  const renderIcon = () => {
    switch (slug) {
      case 'love-relationships':
        // Shukra (Venus) - Interlocking circles of emotional affinity
        return (
          <g stroke="currentColor" strokeWidth="1.2" fill="none">
            <circle cx="20" cy="18" r="9" />
            <circle cx="28" cy="24" r="9" />
            <circle cx="24" cy="21" r="1.5" fill="currentColor" />
          </g>
        )

      case 'marriage-matchmaking':
        // Sacred Mangala Sutra & Conjugal Union geometry (Dual diamonds aligned)
        return (
          <g stroke="currentColor" strokeWidth="1.2" fill="none">
            <polygon points="16,12 24,20 16,28 8,20" />
            <polygon points="32,12 40,20 32,28 24,20" />
            <circle cx="24" cy="20" r="2" fill="currentColor" />
          </g>
        )

      case 'career-job':
        // Surya (Sun / Radiance of Karma & 10th House)
        return (
          <g stroke="currentColor" strokeWidth="1.2" fill="none">
            <circle cx="24" cy="24" r="7" />
            <circle cx="24" cy="24" r="1.5" fill="currentColor" />
            {/* 8 Cardinal rays */}
            <line x1="24" y1="8" x2="24" y2="13" />
            <line x1="24" y1="35" x2="24" y2="40" />
            <line x1="8" y1="24" x2="13" y2="24" />
            <line x1="35" y1="24" x2="40" y2="24" />
            <line x1="13" y1="13" x2="16" y2="16" />
            <line x1="32" y1="32" x2="35" y2="35" />
            <line x1="35" y1="13" x2="32" y2="16" />
            <line x1="13" y1="35" x2="16" y2="32" />
          </g>
        )

      case 'business-finance':
        // Budha (Mercury / Commerce & Wealth Matrix)
        return (
          <g stroke="currentColor" strokeWidth="1.2" fill="none">
            <circle cx="24" cy="20" r="8" />
            <line x1="24" y1="28" x2="24" y2="40" />
            <line x1="18" y1="34" x2="30" y2="34" />
            <path d="M 17,14 C 20,8 28,8 31,14" />
          </g>
        )

      case 'health':
        // Dhanvantari Kalash & Vitality equilibrium
        return (
          <g stroke="currentColor" strokeWidth="1.2" fill="none">
            <ellipse cx="24" cy="26" rx="10" ry="12" />
            <line x1="16" y1="14" x2="32" y2="14" />
            <path d="M 20,14 L 24,8 L 28,14" />
            <circle cx="24" cy="26" r="2" fill="currentColor" />
          </g>
        )

      case 'education-exams':
        // Saraswati / Guru Trikona (Intellect & Fifth House cognition)
        return (
          <g stroke="currentColor" strokeWidth="1.2" fill="none">
            <polygon points="24,10 40,36 8,36" />
            <polygon points="24,30 32,16 16,16" opacity="0.6" />
            <circle cx="24" cy="22" r="2" fill="currentColor" />
          </g>
        )

      case 'property-vastu':
        // Vastu Purusha Mandala Square (Sacred Earth Architecture)
        return (
          <g stroke="currentColor" strokeWidth="1.2" fill="none">
            <rect x="10" y="10" width="28" height="28" />
            <line x1="10" y1="24" x2="38" y2="24" />
            <line x1="24" y1="10" x2="24" y2="38" />
            <circle cx="24" cy="24" r="5" />
          </g>
        )

      case 'numerology':
        // Navagraha 3x3 Magic Square / Yantra Matrix
        return (
          <g stroke="currentColor" strokeWidth="1.2" fill="none">
            <rect x="10" y="10" width="28" height="28" />
            <line x1="19.3" y1="10" x2="19.3" y2="38" strokeWidth="0.8" />
            <line x1="28.6" y1="10" x2="28.6" y2="38" strokeWidth="0.8" />
            <line x1="10" y1="19.3" x2="38" y2="19.3" strokeWidth="0.8" />
            <line x1="10" y1="28.6" x2="38" y2="28.6" strokeWidth="0.8" />
            <circle cx="24" cy="24" r="1.5" fill="currentColor" />
          </g>
        )

      case 'palmistry':
        // Samudrika Shastra - Palm mounts and life line vector
        return (
          <g stroke="currentColor" strokeWidth="1.2" fill="none">
            <path d="M 14,38 L 14,24 C 14,18 18,12 24,12 C 30,12 34,18 34,24 L 34,38" />
            <path d="M 19,26 C 22,29 27,29 29,26" />
            <path d="M 20,32 C 23,34 26,34 28,32" />
            <circle cx="24" cy="18" r="1.5" fill="currentColor" />
          </g>
        )

      default:
        // Universal Celestial Bindu
        return (
          <g stroke="currentColor" strokeWidth="1.2" fill="none">
            <circle cx="24" cy="24" r="12" />
            <circle cx="24" cy="24" r="2" fill="currentColor" />
          </g>
        )
    }
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`shrink-0 text-turmeric ${className}`}
      aria-hidden="true"
    >
      {renderIcon()}
    </svg>
  )
}
