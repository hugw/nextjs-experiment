import Link from 'next/link'
import React from 'react'

import { ROUTES } from '@/config'
import { getUsers } from '@/queries/users'

import { Row } from '../Grid/Row'
import { Th } from '../Grid/Th'

type UsersProps = {
  pageNumber: number
}

export const Users = async ({ pageNumber = 1 }: UsersProps) => {
  const { data, error } = await getUsers(pageNumber)

  if (!data) return <div>Loading...</div>

  const { results, pagination } = data

  return (
    <div className="mx-auto w-1/2 mt-5">
      <table className="w-full">
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Phone Number</Th>
            <Th>Company</Th>
            <Th>{''}</Th>
          </tr>
        </thead>
        <tbody>
          {results?.map((user) => <Row key={user.id} user={user} />)}
        </tbody>
      </table>

      <div className="mt-5 flex justify-end gap-2">
        {pagination.page > 1 && (
          <Link
            className="text-emerald-600 font-bold"
            href={`${ROUTES.users}?page=${pagination.page - 1}`}
          >
            Previous
          </Link>
        )}

        {pagination.page < pagination.totalPages && (
          <Link
            className="text-emerald-600 font-bold"
            href={`${ROUTES.users}?page=${+pageNumber + 1}`}
          >
            Next
          </Link>
        )}
      </div>
    </div>
  )
}
