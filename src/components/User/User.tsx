import Link from 'next/link'
import React from 'react'

import { ROUTES } from '@/config'
import { users } from '@/db/users'

type UserProps = {
  userId: string
}

export const User = ({ userId }: UserProps) => {
  const user = users[userId]

  return (
    <div>
      <Link href={ROUTES.root}>Back to all users</Link>
      <h4>
        {user.firstName} {user.lastName}
      </h4>
      <div>{user.email}</div>
      <div>{user.company}</div>
      <div>{user.phoneNumber}</div>
    </div>
  )
}
