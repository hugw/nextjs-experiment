import Link from 'next/link'
import React from 'react'

import { ROUTES } from '@/config'
import { getUsers } from '@/queries/users'

import { Row } from '../Grid/Row'

type HomeProps = {
  pageNumber: number
}

export const Home = async ({ pageNumber = 0 }: HomeProps) => {
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

      {!!pageNumber && (
        <Link href={`${ROUTES.root}${+pageNumber - 1}`}>Previous</Link>
      )}
      {<Link href={`${ROUTES.root}${+pageNumber + 1}`}>Next</Link>}
    </div>
  )
}
