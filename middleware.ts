import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  // Middleware sekarang hanya bertugas mengamankan route jika diperlukan, 
  // kontrol utama dipindah ke layout.tsx untuk performa instan tanpa flashing.
  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
