import Link from 'next/link'
import React from 'react'

import { ROUTES } from '@/config'
import { getUsers } from '@/queries/users'

import { Row } from '../Grid/Row'

type UsersProps = {
  pageNumber: number
}

export const Users = async ({ pageNumber = 1 }: UsersProps) => {
  const { data, error } = await getUsers(pageNumber)

  return (
    <div className="mx-auto w-1/2">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>{data?.map((user) => <Row key={user.id} user={user} />)}</tbody>
      </table>

      {pageNumber > 1 && (
        <Link href={`${ROUTES.users}?page=${+pageNumber - 1}`}>Previous</Link>
      )}

      {!!data?.length && (
        <Link href={`${ROUTES.users}?page=${+pageNumber + 1}`}>Next</Link>
      )}
    </div>
  )
}
