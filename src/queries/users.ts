import { query } from '@/utils/rq/server'

export type User = {
  id: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  company: string
}

type UsersResponse = User[]

export const getUsers = (pageNumber: number) =>
  query<UsersResponse>({
    method: 'POST',
    path: `/api/users?page=${pageNumber}`,
  })
