import { query } from '@/utils/rq/server'

export const getStatus = () =>
  query({
    method: 'GET',
    path: '/api/status',
  })
