import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { deleteCookieToken, getUser } from './functions'

type TokenPayload = {
  publicId: string
  isSuperAdmin: boolean
  isCollaborator: boolean
  exp: number
}

function decodeToken(token: string): TokenPayload | null {
  try {
    const payload = JSON.parse(
      Buffer.from(token.split('.')[1], 'base64').toString()
    )
    return payload
  } catch {
    return null
  }
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get('auth_token')?.value

  const isLoginRoute = pathname.startsWith('/login')
  const isDashboardRoute = pathname.startsWith('/dashboard')
  const isAdminRoute = pathname.startsWith('/admin')

  const redirect = (path: string) => {
    const url = request.nextUrl.clone()
    url.pathname = path
    return NextResponse.redirect(url)
  }

  if (!token) {
    if (isDashboardRoute) {
      return redirect('/login')
    }

    if (isAdminRoute) {
      return redirect('/not-found')
    }

    return NextResponse.next()
  }

  const payload = decodeToken(token)

  if (!payload || payload.exp * 1000 < Date.now()) {
    return redirect('/login')
  }

  if (isLoginRoute) {
    return redirect(
      payload.isCollaborator ? '/admin' : '/dashboard'
    )
  }

  if (isAdminRoute) {
    if (!payload.isSuperAdmin && !payload.isCollaborator) {
      return redirect('/not-found')
    }

    const user = await getUser();

    if (!user || !user.isCollaborator) {
      deleteCookieToken();
      return redirect('/not-found')
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/dashboard/:path*',
    '/login',
  ],
}
