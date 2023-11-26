import React from 'react'

import { Users } from '@/components/Users/Users'

type SearchParams = {
  page: number
}

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default function UsersPage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const { page } = searchParams

  return <Users pageNumber={page} />
}
