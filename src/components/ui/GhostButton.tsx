import React from 'react'
import Link from 'next/link'

export interface GhostButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
  disabled?: boolean
  variant?: 'turmeric' | 'line' | 'madder'
}

export function GhostButton({
  children,
  href,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  variant = 'turmeric',
}: GhostButtonProps) {
  const variantStyles = {
    turmeric:
      'border-turmeric/60 text-turmeric hover:border-turmeric hover:bg-turmeric/10 focus-visible:ring-turmeric',
    line:
      'border-line text-text-primary hover:border-turmeric hover:text-turmeric hover:bg-turmeric/5 focus-visible:ring-turmeric',
    madder:
      'border-madder bg-madder text-paper hover:bg-madder/90 focus-visible:ring-madder',
  }

  const baseStyles =
    'inline-flex items-center justify-center border px-5 py-2.5 text-xs font-sans font-medium uppercase tracking-[0.15em] rounded-none transition-colors duration-150 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:opacity-50 disabled:pointer-events-none'

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
    >
      {children}
    </button>
  )
}
