'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

import { User } from '@/queries/users'

type RowProps = {
  user: User
}

export const Row = ({ user }: RowProps) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/users/${user.id}`)
  }

  return (
    <tr key={user.id} onClick={handleClick}>
      <td>
        {user.firstName} {user.lastName}
      </td>
      <td>{user.email}</td>
      <td>{user.phoneNumber}</td>
      <td>{user.company}</td>
    </tr>
  )
}
