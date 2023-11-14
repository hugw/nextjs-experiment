import { User } from '@/queries/users'

import usersJson from './users.json'

export const users = usersJson.reduce<Record<string, User>>(
  (acc, cur) => {
    return {
      ...acc,
      [cur.id]: cur,
    }
  },
  {} as Record<string, User>,
)
