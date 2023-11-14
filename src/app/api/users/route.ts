import { NextRequest, NextResponse } from 'next/server'

import users from '@/db/users.json'

const DEFAULT_PER_PAGE = 10
const TOTAL_USERS = users.length
const NUMBER_OF_PAGES = Math.ceil(TOTAL_USERS / DEFAULT_PER_PAGE)

export const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams
  const page = searchParams.get('page')

  const perPage = page ? +page : 0

  const currentPageIndex = +perPage! * DEFAULT_PER_PAGE
  const results = users.slice(
    currentPageIndex,
    currentPageIndex + DEFAULT_PER_PAGE,
  )

  return NextResponse.json(results, { status: 200 })
}
