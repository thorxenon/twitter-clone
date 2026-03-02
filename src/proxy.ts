import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export default function middleware(request: NextRequest) {
  const token = request.cookies.get('auth_token')?.value

  const signInURL = new URL('/signin', request.url)
  const homeURL = new URL('/home', request.url)

  if (!token) {
    if (
      request.nextUrl.pathname === '/signin' ||
      request.nextUrl.pathname === '/signup'
    ) {
      return NextResponse.next()
    }

    return NextResponse.redirect(signInURL)
  }

  if (
    request.nextUrl.pathname === '/signin' ||
    request.nextUrl.pathname === '/signup'
  ) {
    return NextResponse.redirect(homeURL)
  }
}

export const config = {
  matcher: [
    '/',
    '/profile/:path*',
    '/home/:path*',
    '/explore/:path*',
    '/notifications/:path*',
    '/messages/:path*',
    '/bookmarks/:path*',
    '/lists/:path*',
    '/signin',
    '/signup',
  ],
}