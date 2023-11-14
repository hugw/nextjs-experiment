import { NextRequest, NextResponse } from 'next/server'

import { users } from '@/db/users'

type Params = {
  userId: string
}

export const GET = async (req: NextRequest, { params }: { params: Params }) => {
  const user = users[params.userId]

  if (!user) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 })
  }

  return NextResponse.json(user, { status: 200 })
}
