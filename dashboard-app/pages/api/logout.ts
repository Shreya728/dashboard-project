import { serialize } from 'cookie'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookie = serialize('token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    expires: new Date(0),
  })

  res.setHeader('Set-Cookie', cookie)
  res.writeHead(302, { Location: '/login' })
  res.end()
}
