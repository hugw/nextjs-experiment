import { NextRequest, NextResponse } from 'next/server'

import users from '@/db/users.json'

const DEFAULT_PER_PAGE = 10
const TOTAL_USERS = users.length
const NUMBER_OF_PAGES = Math.ceil(TOTAL_USERS / DEFAULT_PER_PAGE)

export const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams
  const page = searchParams.get('page')

  const currentPageIndex = page ? +page - 1 : 0

  if (
    !Number.isInteger(currentPageIndex) ||
    currentPageIndex < 0 ||
    currentPageIndex > NUMBER_OF_PAGES - 1
  ) {
    return NextResponse.json({ message: 'Invalid page' }, { status: 400 })
  }

  const startIndex = currentPageIndex * DEFAULT_PER_PAGE
  const endIndex = startIndex + DEFAULT_PER_PAGE

  const results = users.slice(startIndex, endIndex)

  return NextResponse.json(results, { status: 200 })
}
