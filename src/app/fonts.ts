import { IBM_Plex_Sans_Devanagari, Noto_Serif_Devanagari } from 'next/font/google'

export const serifFont = Noto_Serif_Devanagari({
  subsets: ['devanagari', 'latin'],
  weight: 'variable',
  display: 'swap',
  variable: '--font-display',
  preload: true,
})

export const sansFont = IBM_Plex_Sans_Devanagari({
  subsets: ['devanagari', 'latin'],
  weight: ['400', '600'],
  display: 'swap',
  variable: '--font-body',
  preload: true,
})

export const fontDisplay = serifFont
export const fontBody = sansFont

export const cssVariables = `${serifFont.variable} ${sansFont.variable}`
export const fontVariables = cssVariables
