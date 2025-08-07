import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const isStudio = pathname.startsWith('/studio')
  const isProd = process.env.NODE_ENV === 'production'

  if (isProd && isStudio) {
    const authHeader = request.headers.get('authorization') || ''
    const expected = process.env.STUDIO_BASIC_AUTH
    if (!expected || authHeader !== `Basic ${expected}`) {
      return new NextResponse('Authentication required', {
        status: 401,
        headers: { 'WWW-Authenticate': 'Basic realm="Studio"' },
      })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/studio/:path*'],
}


