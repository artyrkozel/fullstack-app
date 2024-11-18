import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest, res: NextResponse) {

    return NextResponse.next();
}

export const config = {
    matcher: '/((?!auth|_next/static|favicon.ico).*)',
};