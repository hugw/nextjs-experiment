import React from 'react'

import { User } from '@/components/User/User'

type Params = {
  userId: string
}

export default function UserPage({ params }: { params: Params }) {
  const { userId } = params

  return <User userId={userId} />
}
