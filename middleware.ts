// middleware.js

import { NextResponse } from 'next/server';

export function middleware(request:any) {
  const { pathname } = request.nextUrl;

  // Your authentication logic here
  const isAuthenticated = request.cookies.get('accessToken')?.value || '';

  if (!isAuthenticated && pathname !== '/login') {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (isAuthenticated && pathname === '/login') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/users'], // Add routes to apply the middleware
};
