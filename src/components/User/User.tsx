import React from 'react'

import { users } from '@/db/users'

import { Back } from './Back'

type UserProps = {
  userId: string
}

export const User = ({ userId }: UserProps) => {
  const user = users[userId]

  return (
    <div className="mx-auto w-1/2">
      <Back />

      <h4 className="mt-3">
        {user.firstName} {user.lastName}
      </h4>
      <div>{user.email}</div>
      <div>{user.company}</div>
      <div>{user.phoneNumber}</div>
    </div>
  )
}
