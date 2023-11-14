import React from 'react'

import { Home } from '@/components/Home/Home'

type Params = {
  pageNumber: number
}

export default function UsersPage({ params }: { params: Params }) {
  const { pageNumber } = params

  return <Home pageNumber={pageNumber} />
}
