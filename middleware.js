import { NextResponse } from 'next/server';
export function middleware(req) {
  const user = {
    name: 'amr',
    email: 'test@gmail.com',
    phone: '01015147813',
    role: 'user',
    activated: true,
  };
  const response = NextResponse.next();
  response.cookies.set('user', JSON.stringify(user));
  return response;
}
