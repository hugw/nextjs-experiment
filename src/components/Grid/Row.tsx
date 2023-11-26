'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

import { User } from '@/queries/users'

import { Td } from './Td'

type RowProps = {
  user: User
}

export const Row = ({ user }: RowProps) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/users/${user.id}`)
  }

  return (
    <tr key={user.id} className="even:bg-gray-100 odd:bg-white">
      <Td>
        {user.firstName} {user.lastName}
      </Td>
      <Td>{user.email}</Td>
      <Td>{user.phoneNumber}</Td>
      <Td>{user.company}</Td>
      <Td>
        <button className="text-emerald-600 font-bold" onClick={handleClick}>
          view
        </button>
      </Td>
    </tr>
  )
}
