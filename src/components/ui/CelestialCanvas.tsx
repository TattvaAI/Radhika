'use client'

import React, { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  radius: number
  alpha: number
  alphaTarget: number
  speed: number
}

export function CelestialCanvas({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let stars: Star[] = []
    const starCount = 140

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initStars()
    }

    const initStars = () => {
      stars = []
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.2 + 0.3,
          alpha: Math.random() * 0.7 + 0.1,
          alphaTarget: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.015 + 0.005,
        })
      }
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i]

        // Subtle twinkling animation
        if (Math.abs(star.alpha - star.alphaTarget) < 0.02) {
          star.alphaTarget = Math.random() * 0.75 + 0.15
        } else if (star.alpha < star.alphaTarget) {
          star.alpha += star.speed
        } else {
          star.alpha -= star.speed
        }

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(242, 237, 227, ${star.alpha * 0.75})`
        ctx.shadowColor = 'rgba(217, 164, 65, 0.6)'
        ctx.shadowBlur = star.radius > 1 ? 4 : 0
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    resize()
    window.addEventListener('resize', resize)
    render()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none fixed inset-0 z-0 opacity-60 ${className}`}
      aria-hidden="true"
    />
  )
}
