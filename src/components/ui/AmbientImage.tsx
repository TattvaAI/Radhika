'use client'

import React, { useState } from 'react'
import Image from 'next/image'

export interface AmbientImageProps {
  seed?: string
  src?: string
  alt: string
  width?: number
  height?: number
  className?: string
  aspectRatio?: '16/9' | '3/4' | '1/1' | '4/3'
}

export function AmbientImage({
  seed,
  src,
  alt,
  width = 600,
  height = 400,
  className = '',
  aspectRatio = '16/9',
}: AmbientImageProps) {
  const [hasError, setHasError] = useState(false)

  // Use reliable picsum atmospheric seed if no direct src provided
  const imageUrl = src || `https://picsum.photos/seed/${seed || 'jyotish-geometry'}/${width}/${height}`

  const aspectClass = {
    '16/9': 'aspect-[16/9]',
    '3/4': 'aspect-[3/4]',
    '1/1': 'aspect-square',
    '4/3': 'aspect-[4/3]',
  }[aspectRatio]

  return (
    <div
      className={`relative overflow-hidden bg-surface-raised border border-line rounded-none ${aspectClass} ${className}`}
    >
      {!hasError ? (
        <Image
          src={imageUrl}
          alt={alt}
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-opacity duration-300 opacity-90 hover:opacity-100"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center p-4 text-center bg-surface-raised text-text-muted">
          <span className="font-mono text-xs uppercase tracking-wider">
            [Atmospheric Image: {alt}]
          </span>
        </div>
      )}
    </div>
  )
}
