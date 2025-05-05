import { NextResponse } from 'next/server';

export function middleware(request) {
  // Example middleware for logging or redirects
  // console.log(`Request to ${request.nextUrl.pathname}`);
  return NextResponse.next();
}

// Removed misplaced jsconfig.json content