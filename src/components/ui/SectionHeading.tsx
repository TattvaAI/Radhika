import React from 'react'

export interface SectionHeadingProps {
  eyebrow?: string
  title: string
  body?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center'

  return (
    <div
      className={`space-y-3 ${
        isCenter ? 'text-center mx-auto' : 'text-left'
      } ${className}`}
    >
      {eyebrow && (
        <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-turmeric font-sans font-medium">
          {eyebrow}
        </span>
      )}

      <h2
        className={`font-serif text-3xl md:text-4xl lg:text-5xl text-text-primary font-medium tracking-tight leading-[1.15] ${
          isCenter ? 'mx-auto' : ''
        }`}
      >
        {title}
      </h2>

      {body && (
        <p
          className={`font-sans text-sm md:text-base text-text-muted leading-relaxed max-w-[65ch] ${
            isCenter ? 'mx-auto' : ''
          }`}
        >
          {body}
        </p>
      )}
    </div>
  )
}
