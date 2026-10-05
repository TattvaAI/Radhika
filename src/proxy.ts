import { NextResponse } from 'next/server'
import type { NextProxy } from 'next/server'
import { DEFAULT_LOCALE, type Locale } from './content/types'

function getPreferredLocale(acceptLanguageHeader: string | null): Locale {
  if (!acceptLanguageHeader) {
    return DEFAULT_LOCALE
  }

  const entries = acceptLanguageHeader.split(',').map((part) => {
    const [rawLang, rawQ] = part.trim().split(';')
    const lang = rawLang.toLowerCase()
    let q = 1.0
    if (rawQ && rawQ.trim().startsWith('q=')) {
      const parsedQ = parseFloat(rawQ.trim().slice(2))
      if (!isNaN(parsedQ)) q = parsedQ
    }
    return { lang, q }
  })

  entries.sort((a, b) => b.q - a.q)

  for (const entry of entries) {
    if (entry.lang.startsWith('hi')) {
      return 'hi'
    }
    if (entry.lang.startsWith('en')) {
      return 'en'
    }
  }

  return DEFAULT_LOCALE
}

export const proxy: NextProxy = (request) => {
  const { pathname } = request.nextUrl

  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  if (
    pathname.startsWith('/hi/') ||
    pathname === '/hi' ||
    pathname.startsWith('/en/') ||
    pathname === '/en'
  ) {
    return NextResponse.next()
  }

  const locale = getPreferredLocale(request.headers.get('accept-language'))
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|_next|favicon.ico|sitemap.xml|robots.txt|.*\\..*).*)',
  ],
}
