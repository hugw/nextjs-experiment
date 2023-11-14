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

export const getUsers = (pageNumber: number = 0) =>
  query<UsersResponse>({
    method: 'GET',
    path: `/api/users?page=${pageNumber}`,
  })
