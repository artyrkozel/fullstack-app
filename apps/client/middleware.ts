import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(req: NextRequest) {
  const token = req.cookies.get('refreshToken')?.value || '';

  if (req.nextUrl.pathname === '/login' && token) {
    return NextResponse.redirect(req.nextUrl.origin + '/dashboard')
  }

  if (!token && req.nextUrl.pathname !== '/login') {
    return NextResponse.redirect(req.nextUrl.origin + '/login')
  }

  NextResponse.next();
}

export const config = { matcher: ['/test', '/login', '/', '/dashboard'] };
